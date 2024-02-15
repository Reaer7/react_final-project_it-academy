import { useEffect } from "react";
import { insertData } from "../../api/insertDatabase";

export function FirestoreInitPage() {
    useEffect(() => {
        insertData();
    }, [])

    return <div>
        Firestore init successfully!
    </div>
}