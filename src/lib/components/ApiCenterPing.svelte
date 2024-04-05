<script>
	import {} from '@sveltestrap/sveltestrap';
	let color = 'success';
	let animateClass = '';
	$: color;
	$: animateClass;

	setInterval(async () => {
		try {
			animateClass = '';
			const resp = await fetch('https://api.flow.team/v1/test/ping');
			const { response } = await resp.json();
			animateClass = 'animate';
			if (response.success) {
				color = 'green';
			} else {
				color = 'red';
			}
		} catch (e) {
			color = 'red';
		}
	}, 10 * 1000);
</script>

<div>
	<div class="circle {color} {animateClass}"></div>
</div>

<style>
	.circle {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}

	.green {
		background-color: #15bd66;
	}

	.red {
		background-color: #bd1515;
	}

	@keyframes fadeInOut {
		from {
			opacity: 0.5;
			transform: scale(0.75);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.animate {
		animation-name: fadeInOut;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
	}
</style>
