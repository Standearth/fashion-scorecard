<script>
	import Grade from '../lib/Grade.svelte'
	import {base} from '$app/paths'
	import { Col, Container, Row, Accordion, AccordionHeader, AccordionItem, Icon } from 'sveltestrap';
	import Grid from '../lib/Grid.svelte'
	import Fa from 'svelte-fa/src/fa.svelte'
	import Header from '../lib/Header.svelte'
	import homepage from "../data/homepage.json";
	import { faArrowRight, faBalanceScale, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
</script>

<svelte:head>
	<title>Brand Scores | Fossil-free Fashion Scorecard | Stand.earth</title>
	<meta name="title" content="Brand Scores | Fossil-free Fashion Scorecard | Stand.earth"/>
	<meta property="og:title" content="Brand Scores | Fossil-free Fashion Scorecard"/>
	<meta property="og:url" content="https://fashion.stand.earth/brand-scores"/>
	<meta property="og:description" content="As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."/>
	<meta name="description" content="As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."/>
</svelte:head>

<Header headerColor="blue"/>

<div class="banner">
	<span>Fossil-free Fashion Scorecard</span>
</div>

<div class="cover">
	<div class="overlay">
		<h1>Brand scores</h1>
	</div>
</div>

<div class="section section-4">
	<!-- svelte-ignore a11y-missing-content -->
	<a name="brand-scores"></a>
	<Container>
		<Row>
			<Col sm=12 md={{size:8, offset:2}} lg={{size:8, offset:2}}>
				<p>{homepage.brand_scores}</p>
			</Col>
		</Row>	
		<div id="grid">
			<Grid sort="btow"/>
		</div>
		<div class="bottomNav">
			<Container>
				<Row>
					<Col sm=12 lg={{size:6, offset:3}}>
						<div class="bottomNavItem">
							<div id="chevron-right">
								<Fa icon="{faArrowRight}" size="1x"/>
							</div>
								<a href="/executive-summary"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>Executive Summary</strong></a>
							
						</div>
					</Col>
				</Row>
			</Container>
		</div>
		</Container>
</div>
<style>

	.banner {
		font-family:'Amsi Pro Ultra';
		display:flex;
		flex: 1 1 100%;
		justify-content:center;
		background:var(--secondary-color);
		text-transform:capitalize;
	}

	.banner span {
		color:var(--primary-color);
		letter-spacing:2px;
		font-size:2.4rem;
		padding-left:15px;
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

	@media (max-width:600px) {
		.cover h1 {
			margin-top:60px;
		}	

		.banner span {
			font-size:1.5rem;
		}
	}

	.overlay {
		background:rgba(255,255,255,0.8);
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left:0;
	}

	#grid {
		padding-top:50px;
	}

	.bottomNav {
		margin-top:50px;
		margin-bottom:50px;
		display:table;
		width:100%;
	}

	.bottomNav a {
		color:var(--primary-color);
	}

	.bottomNavItem {
		padding:20px;
		background:#DEEBF0;
		min-width:100%;
		height:60px;
		vertical-align:middle;
	}

	#chevron-right {
		width:20px;
		text-align:center;
		height:100%;
		float:right;
	}

</style>

