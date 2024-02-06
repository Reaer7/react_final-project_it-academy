import { useEffect, useState } from 'react';
import './App.css';
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "../config/firebase";
import { Footer } from './layouts/Footer';
import { Header } from './layouts/Header';
import { Content } from './layouts/Content';
import { RootPage } from "./pages/RootPage";
import { ErrorPage } from './pages/ErrorPage';
import { PrivateRoute } from './common/PrivateRoute';
import { LoginPage } from "./pages/LoginPage";
import { User } from 'firebase/auth';
import { HomePage } from './pages/HomePage';
import { Provider } from 'react-redux';
import { store } from "../store";
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';

type FirebaseUser = User | null;

export enum APP_URL {
    ALL = '*',
    ERROR = '/error',
    ROOT = '/',
    HOME = '/home',
    LOGIN = '/login',
    REGISTER = '/register',
    PROFILE = '/profile',
}

export function App() {
    /*const [currentUser, setCurrentUser] = useState<FirebaseUser>(null)
    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        auth.onAuthStateChanged((user: FirebaseUser) => {
            setCurrentUser(user)
        })
    }, [])*/

    return <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <Content>
                    <Routes>
                        <Route path={APP_URL.ERROR} element={<ErrorPage />} />
                        <Route path={APP_URL.ALL} element={
                            <Navigate to={APP_URL.ERROR}
                                      state={{ message: 'Page not found!' }}
                                      replace={true}
                            />}
                        />

                        <Route id="root" path={APP_URL.ROOT} element={
                            <RootPage />
                        } />

                        <Route path={APP_URL.HOME} element={
                            <PrivateRoute>
                                <HomePage />
                            </PrivateRoute>
                        } />

                        <Route path={APP_URL.PROFILE} element={
                            <PrivateRoute>
                                <ProfilePage />
                            </PrivateRoute>
                        } />

                        <Route path={APP_URL.LOGIN} element={<LoginPage />} />
                        <Route path={APP_URL.REGISTER} element={<RegisterPage />} />

                    </Routes>
                </Content>
                <Footer />
            </Provider>
        </BrowserRouter>
    </div>
}

// --- LOAD DATA --- //
// navigate('/error', { state: { message: 'Something went wrong with download data!' } });
