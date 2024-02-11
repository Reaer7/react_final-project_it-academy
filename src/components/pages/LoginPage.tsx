import { Link } from 'react-router-dom';
import { Login } from '../common/Login';
import { APP_URL } from "./urls";
import { FormattedMessage } from "react-intl";
import { Container, Grid } from '@mui/material';

export function LoginPage() {
    return <Container component="main" maxWidth="xs">
        <h3>
            <FormattedMessage
                id="page.login.head"
            />
        </h3>
        <Login />
        <Grid container>
            <Grid item xs>
                <FormattedMessage
                    id="page.login.description"
                    values={{
                        link: <Link to={APP_URL.REGISTER}>
                            <FormattedMessage
                                id="page.login.description.redirect"
                            />
                        </Link>
                    }}
                />
            </Grid>
        </Grid>
    </Container>
}