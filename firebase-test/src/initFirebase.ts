import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';

import { firebaseConfig } from './env';

export async function initFirebase() {
	const app = initializeApp(firebaseConfig);
	const firestore = getFirestore(app);

	return firestore;
}
