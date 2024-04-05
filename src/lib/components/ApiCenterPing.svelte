<script>
    import { 
        Card, 
        Badge, 
        Row, 
        Col, 
        CardHeader, 
        CardBody, 
        CardTitle, 
        CardSubtitle 
    } from '@sveltestrap/sveltestrap';
    let color = "success";
    let content = "";
    $:color;
    $:content;

    setInterval(async() => {
        try {
            const resp = await fetch("https://api.flow.team/v1/test/ping");
            const {response} = await resp.json();
            if (response.success) {
                color = "success";
            } else {
                color = 'danger';
            }
        } catch (e) {
            color = 'danger';
        }
    }, (10 * 1000));
</script>

<style>
</style>

<div>
    <Card body inverse {color}>api 센터 핑 위젯</Card>
</div>