import { useEffect, useState } from "react";
import { insertData } from "../../api/insertDatabase";
import { CircularProgress } from "@mui/material";

export function FirestoreInitPage() {
    const [isDone, setIsDone] = useState<boolean>(false)

    async function cleanAndInsert() {
        const isSuccess = await insertData();
        setIsDone(isSuccess);
    }

    useEffect(() => {
        cleanAndInsert();
    }, [])

    return <>
        {!isDone
            ? <CircularProgress />
            : <div>
                Firestore init successfully!
            </div>}
    </>
}