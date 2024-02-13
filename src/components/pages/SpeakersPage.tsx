import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { APP_URL } from "./urls";
import { CustomAlertSnackbar } from "../common/CustomAlertSnackbar";
import { useEffect } from "react";
import { useStoreSelector } from "../../hooks/useStoreSelector";
import { useStoreDispatch } from "../../hooks/useStoreDispatch";
import { Box, Paper, styled } from "@mui/material";
import Masonry from '@mui/lab/Masonry';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function SpeakersPage() {
    // const speakers = useStoreSelector(store => store.speakers);
    const speakers = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
    const dispatch = useStoreDispatch();
    const intl = useIntl();

    // useEffect(() => {
    //     loadPostsAction(dispatch);
    // }, []);

    return <div className="content-container">
        <h4>
            <FormattedMessage
                id="page.speakers.head"
            />
        </h4>
        <Box sx={{ width: 500, minHeight: 393 }}>
            <Masonry columns={4} spacing={2}>
                {speakers.map((height, index) => (
                    <Item key={index} sx={{ height }}>
                        {index + 1}
                    </Item>
                ))}
            </Masonry>
        </Box>
    </div>
}