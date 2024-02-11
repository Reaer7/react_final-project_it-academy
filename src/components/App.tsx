import './App.css';
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from './layouts/Footer';
import { Header } from './layouts/Header';
import { Content } from './layouts/Content';
import { RootPage } from "./pages/RootPage";
import { ErrorPage } from './pages/ErrorPage';
import { PrivateRoute } from './common/PrivateRoute';
import { LoginPage } from "./pages/LoginPage";
import { User } from 'firebase/auth';
import { MainPage } from './pages/MainPage';
import { Provider } from 'react-redux';
import { store } from "../store";
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { APP_URL } from './pages/urls';
import { AuthRoute } from "./common/AuthRoute";
import { useIntl } from 'react-intl';
import { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { login } from "../store/auth";
import { useStoreDispatch } from "../hooks/useStoreDispatch";

type FirebaseUser = User | null;

export function App() {
    const intl = useIntl()
    const [currentUser, setCurrentUser] = useState<FirebaseUser>(
        JSON.parse(localStorage.getItem("user") ?? '{}')
    );

    useEffect(() => {
        auth.onAuthStateChanged((user: FirebaseUser) => {
            setCurrentUser(user);
            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );
        });
    }, [])

    function RefreshUser() {
        const dispatch = useStoreDispatch();

        if (currentUser) {
            dispatch(login({
                id: currentUser.uid,
                accessToken: currentUser.refreshToken || null,
                displayName: currentUser.displayName || null,
                email: currentUser.email,
                emailVerified: currentUser.emailVerified,
                photoUrl: currentUser.photoURL || null,
            }));
        }

        return <></>
    }

    return <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                <RefreshUser />
                <Header />
                <Content>
                    <Routes>
                        <Route path={APP_URL.ERROR} element={
                            <ErrorPage />
                        } />

                        <Route path={APP_URL.ALL} element={
                            <Navigate to={APP_URL.ERROR}
                                      state={{
                                          message: intl.formatMessage({
                                              id: "message.404"
                                          })
                                      }}
                            />}
                        />

                        <Route id="root" path={APP_URL.ROOT} element={
                            <RootPage />
                        } />

                        <Route path={APP_URL.MAIN} element={
                            <PrivateRoute>
                                <MainPage />
                            </PrivateRoute>
                        } />

                        <Route path={APP_URL.PROFILE} element={
                            <AuthRoute>
                                <ProfilePage />
                            </AuthRoute>
                        } />

                        <Route path={APP_URL.LOGIN} element={
                            <LoginPage />
                        } />

                        <Route path={APP_URL.REGISTER} element={
                            <RegisterPage />
                        } />

                    </Routes>
                </Content>
                <Footer />
            </Provider>
        </BrowserRouter>
    </div>
}
