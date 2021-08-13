<script>
	import { Col, Container, Row, Popover, Accordion, AccordionHeader, AccordionItem, Icon } from 'sveltestrap';
	import Fa from 'svelte-fa/src/fa.svelte'
	import Header from '../lib/Header.svelte'
	import { faArrowRight, faBalanceScale, faClipboardList } from '@fortawesome/free-solid-svg-icons'
	import content from '../data/content.json'

</script>

<Header headerColor="blue"/>

<div class="banner">
	<span>Fossil-free Fashion Scorecard</span>
</div>

<div class="cover">
	<div class="overlay">
		<h1>{content.methodology_title}</h1>
	</div>
</div>

<div class="content">
	<Container>
		<Row>
			<Col sm=12 lg={{size:8, offset:2}}>
			{@html content.methodology_body_1}
			</Col>
		</Row>
	</Container>
</div>

<style>

	.banner {
		font-family:'Amsi Pro Ultra';
		display:flex;
		flex: 1 1 100%;
		justify-content:center;
		background:var(--secondary-color);
		text-transform:uppercase;
	}

	.banner span {
		color:var(--primary-color);
		letter-spacing:2px;
		font-size:2.4rem;
		padding-top:15px;
		padding-bottom:10px;
	}

	.cover {
		background-image:url('/assets/images/SE-ScorecardCover-210729-D3-Desktop-Footer-1366x500.png');
		background-position:bottom;
		min-height:210px;
		position:relative;
		z-index:-1;
	}

	.cover h1 {
		margin-top:130px;
	}
	.overlay {
		background:rgba(255,255,255,0.8);
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left:0;
	}

	.content {
		display:block;
	}

	.bottomNav {
		margin-top:50px;
		margin-bottom:50px;
		display:table;
	}

	.bottomNavItem {
		padding:10px;
		background:#DEEBF0;
		min-width:270px;
		height:80px;
		display:table-cell;
		vertical-align:middle;
	}

</style>

