<script context="module">
	import { initFirebase } from '../initFirebase';
	import { getTodos } from '../firestore';
	import { firestore } from '../stores/fireStore';

	export async function load({ page, fetch, session, context }) {
		const store = await initFirebase();
		firestore.set(store);

		return {
			props: {}
		};
	}
</script>

<script>
	import '../app.postcss';
</script>

<slot />
