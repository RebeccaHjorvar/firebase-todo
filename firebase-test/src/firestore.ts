import type firebase from 'firebase/app';

let db: firebase.Firestore = null;

export async function firestore(): Promise<firebase.firestore.
Firestore> {
    if (db) {
        return db;
    } 

    // Checks for the client
    if (typeof window !== 'undefined') {
        const fb = (await import('firebase/app')).default;

        db = fb.firestore();
        return db;
    }

    const fb = await import('firebase');
    return fb.apps[0].firestore() as firebase.firestore.Firestore;
}