<script>
    import { elapsedTime } from '$lib/index';
    import { Alert, Badge } from '@sveltestrap/sveltestrap';
    import { fly } from 'svelte/transition';
    export let name = "";
    export let message = "";
    export let color = '';
    export let date = '';

    let relativeTime = elapsedTime(date);
</script>

<style>
    .card-wrap {
        margin: 1rem 0;
    }

    .time-font {
        font-size: small;
        opacity: 0.7;
    }
</style>

<div class="card-wrap" transition:fly={{ y: -25, duration: 1000 }}>
    <Alert 
        color={color}
        heading={name}
        theme="dark"
    >
        <div>{message}</div>
        <div class="time-font">{relativeTime}</div>
    </Alert>
</div>