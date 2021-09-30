import { firebaseConfig } from './env';


export async function initFirebase() {
    if (typeof window !== "undefined") {
        const fb: any = (await import('firebase/app')).default;
        await import('firebase/auth');
        await import('firebase/firestore');
        fb.initializeApp(firebaseConfig);
        return;
    }
    
    const fb = await import('firebase');
        if(fb.apps.length == 0) {
            fb.initializeApp(firebaseConfig);
            return;
        }
}

