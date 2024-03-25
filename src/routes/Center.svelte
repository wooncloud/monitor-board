<script>
    import { Card } from '@sveltestrap/sveltestrap';
    import { Col, Row } from '@sveltestrap/sveltestrap';

</script>

<style>
    section {
        padding: 1rem 0;
    }
</style>

<section>
    <!-- 각종 위젯 -->
    <Row class="mb-3">
        <Col>
            <Card body inverse color="dark">api 센터 핑 위젯</Card>
        </Col>
        <Col><Card body inverse color="dark">아무 위젯</Card></Col>
        <Col><Card body inverse color="dark">아무 위젯</Card></Col>
    </Row>
    <Row class="mb-3">
        <Col>
            <Card body inverse color="dark">아무 위젯</Card>
        </Col>
        <Col><Card body inverse color="dark">아무 위젯</Card></Col>
        <Col><Card body inverse color="dark">아무 위젯</Card></Col>
    </Row>
</section>