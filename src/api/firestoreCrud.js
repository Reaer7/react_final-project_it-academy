import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const prefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

class FirestoreCrud {
	constructor(collectionId) {
		this.collectionId = `${prefix}-${collectionId}`;
	}

	async create(docId, data) {
		const docRef = doc(db, this.collectionId, docId);
		await setDoc(docRef, data);

		return this.get(docId);
	}

	async update(docId, data) {
		const docRef = doc(db, this.collectionId, docId);
		await updateDoc(docRef, data);

		return this.get(docId);
	}

	async list() {
		const docRef = collection(db, this.collectionId);
		const docsSnap = await getDocs(docRef);

		const docs = [];
		docsSnap.forEach((item) => {
			docs.push({
				id: item.id,
				...item.data()
			});
		})

		return docs;
	}

	async get(docId) {
		const docRef = doc(db, this.collectionId, docId);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return {
				id: docSnap.id,
				...docSnap.data()
			};
		} else {
			return null;
		}
	}

	async delete(docId) {
		const docRef = doc(db, this.collectionId, docId);
		await deleteDoc(docRef);

		return true;
	}
}

export const SpeakersApi = new FirestoreCrud('speakers');
export const ReportsApi = new FirestoreCrud('reports');