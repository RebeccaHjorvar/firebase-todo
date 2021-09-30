<script>
                                        // VARIABLES //
    let todos = [];
    let task = '';
    let error = '';

                                        // FUNCTIONS //

    // Checks if input is empty, adds a new todo{} to todos[] and clears input field
    const addTask = () => {
        let todo = {
            task: task,
            status: false,
            creationDate: new Date()
        }
        if (task != '')
        {
            todos = [...todos, todo]
            task = ''
        }
        else // stops user from adding an empty task
        {
            error = 'Task is empty'
        }
    }

    // Adds a task if user presses the enter key
    const enterKeyPressed = (event) => {
        if ( event.key === 'Enter' ){
            addTask()
        }
        else {
            error
            error = ''
        }
    }

    // Changes status of the chosen task
    const done = (index) => {
        todos[index].status = !todos[index].status
    }

    // Removes the chosen task
    const removeTask = (index) => {
        const remove = todos[index]
        todos = todos.filter((todo) => todo != remove)
    }

    // Creates an alert to stop user from unexpectedly deleting all tasks
    const alerter = () => {
        
        if (confirm("Press OK to delete all tasks")) {
            todos = []
        } 
    }
</script>



<div class="container">
    
    <h1 class="mb-5"><span class="uppercase text-lg tracking-wide">todo </span>- list</h1>
    
        <input class="inputfield" bind:value={task} type="text"/>
       
        <button class="uppercase px-1 py-1 text-xs text-gray-500 hover:text-black" on:click={addTask}>add task</button>
        
    <ul class="mb-1">
        {#each todos as todo, index}
            <li class="mt-2 mb-1">
                
                <span>
                    <button class="mr-2" on:click={ () => removeTask(index) }>❌</button>
                </span>
                <span class:done={todo.status}>{todo.task}</span>
                <span>
                    <button class="" on:click={ () => done(index) }>✔️</button>
                </span>
            </li>
            {:else}
            <p class="mt-5">No tasks found...</p>
        {/each}
        <p class="error">{error}</p>
    </ul>
    {#if todos.length > 0}
    <button class="uppercase mt-5 text-xs text-gray-500 hover:text-black" on:click={alerter}>
        remove all tasks
    </button>
    {/if}
</div>

<svelte:window on:keypress={enterKeyPressed} />

<style lang="postcss">
    .container {
        @apply mx-5 my-3 text-left;
    }
    .done {
        @apply line-through;
    }
    .error {
        @apply text-red-700;
    }
    .inputfield {
        @apply border-2;
    }
</style>