<script context='module'>
    import { initFirebase } from '../initFirebase';

    export async function load({ page, fetch, session, context }) {
        await initFirebase();
        return {
            props: {},
        };
    }
</script>

<script>
    import "../app.postcss";
    
</script>
<slot></slot>