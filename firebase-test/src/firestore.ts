import { collection, Firestore, getDocs, addDoc } from '@firebase/firestore';
import type { TodoItem } from './types/TodoItem';

export const getTodos = async (firestore: Firestore) => {
	const publicCollection = collection(firestore, 'public');
	const snapshot = await getDocs(publicCollection);
	const row = snapshot.docs.map((value) => value.data());
	return row;
};

export const addTodo = async (firestore: Firestore, todo: TodoItem) => {
	const publicCollection = collection(firestore, 'public');

	try {
		const ref = await addDoc(publicCollection, todo);
		console.log(`Added todo item with id ${ref.id}`);
	} catch (error) {
		console.log(`Could not create todo item: ${error}`);
	}
};
