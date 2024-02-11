import { Link } from 'react-router-dom';
import { Register } from '../common/Register';
import { APP_URL } from "./urls";
import { FormattedMessage } from "react-intl";
import { Container, Grid } from "@mui/material";

export function RegisterPage() {
    return <Container component="main" maxWidth="xs">
        <h3>
            <FormattedMessage
                id="page.register.head"
            />
        </h3>
        <Register />
        <Grid container>
            <Grid item xs>
                <FormattedMessage
                    id="page.register.description"
                    values={{
                        link: <Link to={APP_URL.LOGIN}>
                            <FormattedMessage
                                id="page.register.description.redirect"
                            />
                        </Link>
                    }}
                />
            </Grid>
        </Grid>
    </Container>
}
