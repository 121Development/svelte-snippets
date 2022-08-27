<script>
    import { page } from '$app/stores';
</script>

<p>Current URL: {$page.path}</p>

// OR

<script>
    import { onMount } from 'svelte';

    let url = ``;

    onMount(() => url = window.location.href);
</script>

<p>Current URL: {url}</p>