<script>
	import {} from '@sveltestrap/sveltestrap';
	export let content = "";
	export let url = "";
	let color = 'yellow';
	let animateClass = '';
	$: color;
	$: animateClass;

	setInterval(async () => {
		try {
			animateClass = '';
			const resp = await fetch(url, {
				headers: {
					"x-flow-passthrough": "true",
					"x-flow-skip-logging": "true",
				}
			});
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

<div class="health-check-wrap">
	<span class="d-flex p-3 align-items-center bg-dark border border-dark-subtle rounded-pill">
		<div class="circle {color} {animateClass}"></div>
		<h2 class="fw-bold text-light px-3 m-0">{content}</h2>
	</span>
</div>

<style>
	.health-check-wrap {
		display: flex;
	}

	.circle {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 5px solid white;
	}

	.yellow {
		background-color: yellow;
	}

	.green {
		background-color: #15bd66;
	}

	.red {
		background-color: #bd1515;
	}

	@keyframes fadeInOut {
		from {
			opacity: 0;
			transform: scale(0.25);
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
