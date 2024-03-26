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
            // console.log(response);
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
    <Card>
        <CardHeader>
            <CardTitle>개발자센터 Health Check</CardTitle>
        </CardHeader>
        <CardBody>
        <CardSubtitle lass="mt-1">flow</CardSubtitle>
        <Row class="py-1 mb-1">
            <Col><Badge pill {color}>운영</Badge></Col>
            <Col><Badge pill color="secondary">릴리즈</Badge></Col>
            <Col><Badge pill color="secondary">디벨롭</Badge></Col>
        </Row>
        <CardSubtitle lass="mt-1">morningmate</CardSubtitle>
        <Row class="py-1 mb-1">
            <Col><Badge pill color="secondary">운영</Badge></Col>
            <Col><Badge pill color="secondary">릴리즈</Badge></Col>
            <Col><Badge pill color="secondary">디벨롭</Badge></Col>
        </Row>
        </CardBody>
    </Card>
</div>