<script>
	import Grid from '$lib/Grid.svelte';
	import { base } from '$app/paths';
	import {onMount} from 'svelte';
	import { Spinner, Col, Container, Row, Collapse, Accordion, AccordionItem} from 'sveltestrap';
	import homepage from "../data/homepage.json";
	import Header from '$lib/Header.svelte';
	import createFootnotes from "../lib/footnote";
    import '../styles/water.css';
	import '../styles/app.css';
	import '../styles/font.css';
	import Fa from 'svelte-fa/src/fa.svelte'
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
	let isOpen = false;
	let loading = true;
	//export let brands;

	onMount(() => {
		setTimeout(function() {
			loading = false;
			createFootnotes();
		}, 200);
	});
</script>

<svelte:head>
	<title>Fossil-free Fashion Scorecard | Stand.earth</title>
	<meta name="title" content="Fossil-free Fashion Scorecard | Stand.earth"/>
	<meta property="og:title" content="Fossil-free Fashion Scorecard | Stand.earth"/>
	<meta property="og:description" content="As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."/>
	<meta name="description" content="As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."/>
</svelte:head>

{#if loading} 

	<div id="spinner">
		<Spinner color=primary/>
	</div>

{:else}

<Header headerColor="yellow"/>

<div class="cover">
	<picture>
		<source media="(max-width: 400px)" srcset="assets/images/SE-ScorecardCover-210729-D3-Mobile-375px.png">
		<source media="(max-width: 700px)" srcset="assets/images/SE-ScorecardCover-210729-D3-Mobile-600px.png">
		<source media="(max-width: 1100px)" srcset="assets/images/SE-ScorecardCover-210729-D3-Tablet-1000px.png">
		<img src="assets/images/SE-ScorecardCover-210729-D3-Desktop-Header-1366x675.png" alt="Fossil-free Fashion Scorecard">
	  </picture>
</div>

<div class="section section-1">
	<Container>
		<Row>
			<Col sm=12 lg=6>
				<div id="s1copy">
					<h2>{homepage.Section_1_title}</h2>
					{@html homepage.Section_1_content}
					<a sveltekit:prefetch href="/key-findings/fashions-fossil-fuel-problem">
							Learn more <Fa icon="{faArrowRight}" size="1x"/>
					</a>
					
				</div>
			</Col>
			<Col sm=12 lg=6>
				<div id="s1img">
					<!--<img alt="iceberg" src="assets/images/iceberg.jpeg">-->
				</div>
			</Col>
		</Row>
	</Container>
</div>

<div class="section section-3">
	<Container>
		<Row>
			<Col sm=12 lg=8>
				<div class="box">
					<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/546159387?h=e29eaf2bdf&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
				</div>
			</Col>
			<Col sm=12 lg=4>
				<div class="box">
					<h3>Read the report</h3>
					<ul>
						<li>
							<a target="_self" sveltekit:prefetch href="{base}/executive-summary">Executive Summary</a>
						</li>
						<li>
							<a target="_self" sveltekit:prefetch href="{base}/key-findings/fashions-fossil-fuel-problem">Fashion's Fossil Fuel Problem</a>
						</li>
						<li>
							<a target="_self" sveltekit:prefetch href="{base}/key-findings/climate-commitments-energy-transparency">Key Findings</a>
						</li>
						<li>
							<a target="_self" sveltekit:prefetch href="{base}/brand-scores">Brand Scores</a>
						</li>
						<li>
							<a href="#">Take Action</a>
						</li>
				</div>
			</Col>
		</Row>
	</Container>
</div>

{/if}

<div class="section section-4">
	<!-- svelte-ignore a11y-missing-content -->
	<a name="brand-scores"></a>
	<Container>
		<Row>
			<Col sm=12 md={{size:8, offset:2}} lg={{size:8, offset:2}}>
				<h2>Brand scores</h2>
				<p>{homepage.brand_scores}</p>
			</Col>
		</Row>	
		<div id="grid">
			<Grid sort="btow"/>
		</div>
		</Container>
</div>


<style>
	.cover img {
		width:100%;
	}

	a {
		color:var(--primary-color);
	}

	p {
		font-size:18px;
		font-weight:lighter;
	}

	.section-1 {
		background: var(--white);
		padding-top:50px;
	}

	#s1img {
		text-align:center;
	}
	#s1img img {
		max-height:400px;
	}

	a:hover {
		color:var(--primary-color);
	}

	h2 {
		color:var(--heading-blue);
		font-weight:bold;
	}

	hr {
		border:1px solid #AC9F9C;
	}

	.section {
		padding-top:50px;
		padding-bottom:50px;
	}

	.section-2 {
		background:rgba(174,205,218,0.12);
		
	}

	.section-3 {
		background:rgba(174,205,218,0.25);
		padding-top:50px;
		padding-bottom:50px;
	}

	.box {
		background:var(--white);
		margin:20px;
		padding:20px;
		border-radius:6px;
		font-size:17px;
		color:var(--primary-color);
		border:1px solid var(--white);
	}

	button {
		background:var(--primary-color);
		color:var(--white);
		padding:10px;
		margin:auto;
	}

	h4 {
		font-size:18px;
		color:var(--primary-color);
		line-height:1.4;
	}

	#grid {
		margin-top:50px;
	}

	ul {
        list-style:none;
    }
	
	ul li {
		padding-bottom:5px;
	}

    ul li:before {
        content: "";
        border-color: transparent var(--primary-color);
        border-style: solid;
        border-width: 0.35em 0 0.35em 0.45em;
        display: block;
        height: 0;
        width: 0;
        left: -1em;
        top: 1em;
        position: relative;
    }

	#spinner {
		width:100%;
		height:600px;
		margin-top:30%;
		text-align:center;
	}
</style>
