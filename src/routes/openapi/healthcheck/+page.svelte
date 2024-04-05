<script>
	import { onMount } from "svelte";
    let animateClass = "";
    $:animateClass
    onMount(() => {
        setTimeout(applyAnimation, 500); // 페이지 로드 후 약간의 딜레이 후에 애니메이션 시작
    });

    function applyAnimation() {
        animateClass = "";

        setTimeout(() => {
            animateClass = "animate";
        }, 10);

        setTimeout(applyAnimation, 1500);
    }
</script>

<style>
  .circle {
    width: 100px;
    height: 100px;
    background-color: #15bd66;
    border-radius: 50%;
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

<div>
    <div class="circle {animateClass}">
    </div>
</div>