<script>
    import { Alert } from '@sveltestrap/sveltestrap';
    import { fly } from 'svelte/transition';
    export let title = '';
    export let message = '';
    export let color = '';
    export let date = '';
    const formatDate = getDateTimeFormet(date);

    function getDateTimeFormet(date) {
        const options = {
            year: "2-digit",
            month: "short",
            weekday: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }
        const intl = new Intl.DateTimeFormat("ko-KR", options);
        const dateObj = new Date(date);

        return intl.format(dateObj);
    }
</script>

<style>
    .card-wrap {
        margin: 1rem 0;
    }

    .date-font {
        font-size: small;
        opacity: 0.8;
    }
</style>

<div class="card-wrap" transition:fly={{ y: -25, duration: 1000 }}>
    <Alert 
        color={color}
        heading={title}
    >
        <div class="date-font">{formatDate}</div>
        <div>{message}</div>
    </Alert>
</div>