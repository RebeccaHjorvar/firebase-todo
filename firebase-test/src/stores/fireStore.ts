import { writable } from 'svelte/store';
import type { Firestore } from 'firebase/firestore';

export const firestore = writable<Firestore>(null);
