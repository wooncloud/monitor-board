<script>
	import img_guestbook from '$lib/assets/guestbook.png';
	import { Card } from '@sveltestrap/sveltestrap';
	import { Col, Row } from '@sveltestrap/sveltestrap';
</script>

<section>
	<!-- 각종 위젯 -->
	<Row class="mb-3">
		<Col>
		</Col>
		<Col><Card body>api center 24시간 기준 사용량 위젯</Card></Col>
		<Col><Card body>모니토이 API 링크</Card></Col>
	</Row>
	<Row class="mb-3">
		<Col>
			<Card body>
				⬅️ 글 남기기
				<img src={img_guestbook} alt="guestbook" width="100" height="100" />
			</Card>
		</Col>
		<Col><Card body>아무 위젯</Card></Col>
		<Col><Card body>아무 위젯</Card></Col>
	</Row>
</section>

<style>
	section {
		padding: 1rem 0;
	}
</style>
