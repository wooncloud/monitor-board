<script>
	import { elapsedTime } from '$lib/index';
	import { Alert, Badge } from '@sveltestrap/sveltestrap';
	import { fly } from 'svelte/transition';
	export let name = '';
	export let message = '';
	export let color = '';
	export let date = '';

	let relativeTime = elapsedTime(date);
</script>

<div class="card-wrap" transition:fly={{ y: -25, duration: 1000 }}>
	<Alert {color} heading={name}>
		<div>{message}</div>
		<div class="time-font">{relativeTime}</div>
	</Alert>
</div>

<style>
	.card-wrap {
		margin: 1rem 0;
	}

	.time-font {
		font-size: small;
		opacity: 0.7;
	}
</style>
