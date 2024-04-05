<script>
	import ApiCenterPing from '$lib/components/ApiCenterPing.svelte';

    const flowOpenApi = {
        content: "플로우 openAPI 서버 핑",
        url: "https://api.flow.team/v1/test/ping"
    }
    const morningmateOpenApi = {
        content: "모닝메이트 openAPI 서버 핑",
        url: "https://api.morningmate.com/v1/test/ping"
    }

</script>

<style>

</style>

<div>
    <div class="p-3">
    <ApiCenterPing
        content={flowOpenApi.content}
        url={flowOpenApi.url}
    />
    </div>
    <div class="p-3">
    <ApiCenterPing
        content={morningmateOpenApi.content}
        url={morningmateOpenApi.url}
    />
    </div>
</div>