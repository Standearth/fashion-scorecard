<script context="module">
	import { base } from '$app/paths';
	export async function load({ params, fetch }) {
		const slug = params.finding;
		const body = await fetch(`${base}/key-findings/${slug}.json`)
			.then((r) => r.json());
		const content = body.content;
		return {
			props: {content,slug}
		};
	}
</script>

<svelte:head>
	{#if slug == 'fashions-fossil-fuel-problem'}
			<title>{content.kf1_title} | Fossil-free Fashion Scorecard | Stand.earth</title>
			<meta name="title" content="{content.kf1_title} | Fossil-free Fashion Scorecard | Stand.earth"/>
			<meta property="og:title" content="{content.kf1_title} | Fossil-free Fashion Scorecard"/>
		{:else if slug == 'climate-commitments-energy-transparency' }
			<title>{content.kf2_title} | Fossil-free Fashion Scorecard | Stand.earth</title>
			<meta name="title" content="{content.kf2_title} | Fossil-free Fashion Scorecard | Stand.earth"/>
			<meta property="og:title" content="{content.kf2_title} | Fossil-free Fashion Scorecard"/>
		{:else if slug == 'renewable-energy-efficient-manufacturing' }
			<title>{content.kf3_title} | Fossil-free Fashion Scorecard | Stand.earth</title>
			<meta name="title" content="{content.kf3_title} | Fossil-free Fashion Scorecard | Stand.earth"/>
			<meta property="og:title" content="{content.kf3_title} | Fossil-free Fashion Scorecard"/>
		{:else if slug == 'renewable-energy-advocacy' }
			<title>{content.kf4_title} | Fossil-free Fashion Scorecard | Stand.earth</title>
			<meta name="title" content="{content.kf4_title} | Fossil-free Fashion Scorecard | Stand.earth"/>
			<meta property="og:title" content="{content.kf4_title} | Fossil-free Fashion Scorecard"/>
		{:else if slug == 'low-carbon-longer-lasting-materials' }
			<title>{content.kf5_title} | Fossil-free Fashion Scorecard | Stand.earth</title>
			<meta name="title" content="{content.kf5_title} | Fossil-free Fashion Scorecard | Stand.earth"/>
			<meta property="og:title" content="{content.kf5_title} | Fossil-free Fashion Scorecard"/>
		{:else if slug == 'greener-shipping' }
			<title>{content.kf6_title} | Fossil-free Fashion Scorecard | Stand.earth</title>
			<meta name="title" content="{content.kf6_title} | Fossil-free Fashion Scorecard | Stand.earth"/>
			<meta property="og:title" content="{content.kf6_title} | Fossil-free Fashion Scorecard"/>
		{:else}
			<title>404 Page not found</title>
		{/if}
	<meta property="og:url" content="https://fashion.stand.earth/key-findings/{slug}"/>
	<meta property="og:description" content="As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."/>
	<meta name="description" content="As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."/>
</svelte:head>

<script>
	import TabContent from 'sveltestrap/src/TabContent.svelte';
	import TabPane from 'sveltestrap/src/TabPane.svelte';
	import Accordion from 'sveltestrap/src/Accordion.svelte';
	import AccordionItem from 'sveltestrap/src/AccordionItem.svelte';
	import Container from 'sveltestrap/src/Container.svelte';
	import Row from 'sveltestrap/src/Row.svelte';
	import Col from 'sveltestrap/src/Col.svelte';

	import createFootnotes from '../../lib/footnote.js'
	import Grid from '../../lib/Grid.svelte'
	import { onMount } from 'svelte'
	import Fa from 'svelte-fa/src/fa.svelte'
	import Header from '../../lib/Header.svelte'
	import table from '../../data/table.json'
	import { faArrowRight, faArrowLeft, faClipboardList } from '@fortawesome/free-solid-svg-icons'
	export let content;
	export let slug;

	let countries = ['Bangladesh','Cambodia','China','Indonesia','Taiwan','Turkey','Vietnam']

	onMount(() => {
		createFootnotes();		
	});

</script>

<Header headerColor="blue"/>

<div class="banner">
	<span>Fossil-free Fashion Scorecard</span>
</div>

<div class="cover">
	<div class="overlay">
		{#if slug == 'fashions-fossil-fuel-problem'}
			<h1>{content.kf1_title}</h1>
		{:else if slug == 'climate-commitments-energy-transparency' }
			<h1>{content.kf2_title}</h1>
		{:else if slug == 'renewable-energy-efficient-manufacturing' }
			<h1>{content.kf3_title}</h1>
		{:else if slug == 'renewable-energy-advocacy' }
			<h1>{content.kf4_title}</h1>
		{:else if slug == 'low-carbon-longer-lasting-materials' }
			<h1>{content.kf5_title}</h1>
		{:else if slug == 'greener-shipping' }
			<h1>{content.kf6_title}</h1>
		{:else}
			<h1>404 Page not found</h1>
		{/if}
	</div>
</div>

<div class="content">
	<Container>
		<Row>
			<Col sm=12 lg={{size:8, offset:2}}>
				{#if slug == 'fashions-fossil-fuel-problem'}
					{@html content.kf1_intro}
					<h3 style="text-align:center;">Fashion's fossil fuel problem</h3>
					<img alt="iceberg" src="/assets/images/iceberg-graphic@2x.png">
					{@html content.kf1_body_1}
					<div id="grid-mix">
						<h3>Grid mix by country</h3>
						<TabContent>
							{#each countries as country}
								{#if country == 'China'}
									<TabPane tabId={country} tab={country} active>
										<img alt="grid mix in {country}" src="/assets/images/charts/{country}.png">
									</TabPane>
								{:else}
									<TabPane tabId={country} tab={country}>
										<img alt="grid mix in {country}" src="/assets/images/charts/{country}.png">
									</TabPane>
								{/if}
							{/each}
						</TabContent>
					</div>
					{@html content.kf1_body_2}
					<h3 style="text-align:center;">Fracked fashion's supply chain</h3>
					<img alt="fracking" src="/assets/images/fracking.png">
					{@html content.kf1_body_3}
					<div class="notes">
						<Accordion flush>
							<AccordionItem>
								  <div class="notes-header" slot="header">
									  <Row>
										  <Col sm=12 lg=12>
												<h4>Notes</h4>
										  </Col>
									  </Row>
								  </div>
								  <div class="notes-body">
									  <Row>
										  <Col sm=12>
											{@html content.kf1_notes}
										  </Col>
									  </Row>
								  </div>
							  </AccordionItem>
							</Accordion>
						
					</div>
				{:else if slug == 'climate-commitments-energy-transparency' }
					{@html content.kf2_body_1}
					<!-- svelte-ignore component-name-lowercase -->
					<table>
						<thead>
							<tr>
								<th>Company</th>
								<th>Intensity-Based Commitment</th>
								<th>Description</th>
								<th>Absolute Reduction Equivalence</th>
							</tr>
						</thead>
						<tbody>
							{#each table as {c,i,d,a}}
								<tr>
									<td>{c}</td>
									<td>{i}</td>
									<td>{d}</td>
									<td>{@html a}</td>
								</tr>
							{/each}
						</tbody>
					</table>
					{@html content.kf2_body_2}
					<div id="ambition-graphic">
						<h4>Climate ambition of companies</h4>
						<p>Associated global warming pathway</p>
						<img src="/assets/images/climate-ambition.png" alt="climate ambition of fashion companies">
						<p>2030 absolute scope 3 GHG emissions reduction target</p>
					</div>
					{@html content.kf2_body_3}
					<div class="notes">
						<Accordion flush>
							<AccordionItem>
								  <div class="notes-header" slot="header">
									  <Row>
										  <Col sm=12 lg=12>
												<h4>Notes</h4>
										  </Col>
									  </Row>
								  </div>
								  <div class="notes-body">
									  <Row>
										  <Col sm=12>
											{@html content.kf2_notes}
										  </Col>
									  </Row>
								  </div>
							  </AccordionItem>
							</Accordion>
						
					</div>
				{:else if slug == 'renewable-energy-efficient-manufacturing' }
					{@html content.kf3_body_1}
					<div class="notes">
						<Accordion flush>
							<AccordionItem>
								  <div class="notes-header" slot="header">
									  <Row>
										  <Col sm=12 lg=12>
												<h4>Notes</h4>
										  </Col>
									  </Row>
								  </div>
								  <div class="notes-body">
									  <Row>
										  <Col sm=12>
											{@html content.kf3_notes}
										  </Col>
									  </Row>
								  </div>
							  </AccordionItem>
							</Accordion>
						
					</div>
				{:else if slug == 'renewable-energy-advocacy' }
					{@html content.kf4_body_1}
					<div class="notes">
						<Accordion flush>
							<AccordionItem>
								<div class="notes-header" slot="header">
									<Row>
										<Col sm=12 lg=12>
												<h4>Notes</h4>
										</Col>
									</Row>
								</div>
								<div class="notes-body">
									<Row>
										<Col sm=12>
											{@html content.kf4_notes}
										</Col>
									</Row>
								</div>
							</AccordionItem>
							</Accordion>
						
					</div>
				{:else if slug == 'low-carbon-longer-lasting-materials' }
					{@html content.kf5_body_1}
						<div class="notes">
							<Accordion flush>
								<AccordionItem>
									<div class="notes-header" slot="header">
										<Row>
											<Col sm=12 lg=12>
													<h4>Notes</h4>
											</Col>
										</Row>
									</div>
									<div class="notes-body">
										<Row>
											<Col sm=12>
												{@html content.kf5_notes}
											</Col>
										</Row>
									</div>
								</AccordionItem>
							</Accordion>
							
						</div>
				{:else if slug == 'greener-shipping' }
					{@html content.kf6_body_1}
				{/if}
				<div class="bottomNav">
					<Container>
						<Row>
							<Col sm=12 lg=6>
								<div class="bottomNavItem">
									<div id="chevron-left">
										<Fa icon="{faArrowLeft}" size="1x"/>
									</div>
									{#if slug == 'fashions-fossil-fuel-problem'}
										<a target="_self"  href="/executive-summary"> <Fa icon="{faClipboardList}" size="1x"/> Previous section: <strong>Executive Summary</strong></a>
									{:else if slug == 'climate-commitments-energy-transparency' }
										<a target="_self"  href="/key-findings/fashions-fossil-fuel-problem"> <Fa icon="{faClipboardList}" size="1x"/> Previous section: <strong>{content.kf1_title}</strong></a>
									{:else if slug == 'renewable-energy-efficient-manufacturing' }
										<a target="_self"  href="/key-findings/climate-commitments-energy-transparency"><Fa icon="{faClipboardList}" size="1x"/> Previous section: <strong>{content.kf2_title}</strong></a>
									{:else if slug == 'renewable-energy-advocacy' }
										<a target="_self"  href="/key-findings/renewable-energy-efficient-manufacturing"><Fa icon="{faClipboardList}" size="1x"/> Previous section: <strong>{content.kf3_title}</strong></a>
									{:else if slug == 'low-carbon-longer-lasting-materials' }
										<a target="_self"  href="/key-findings/renewable-energy-advocacy"><Fa icon="{faClipboardList}" size="1x"/> Previous section: <strong>{content.kf4_title}</strong></a>
										{:else if slug == 'greener-shipping' }
										<a target="_self"  href="/key-findings/low-carbon-longer-lasting-materials"><Fa icon="{faClipboardList}" size="1x"/> Previous section: <strong>{content.kf5_title}</strong></a>
									{/if}
								</div>
							</Col>
							<Col sm=12 lg=6>
								<div class="bottomNavItem">
									<div id="chevron-right">
										<Fa icon="{faArrowRight}" size="1x"/>
									</div>
									{#if slug == 'fashions-fossil-fuel-problem'}
										<a target="_self" href="/key-findings/climate-commitments-energy-transparency"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf2_title}</strong> </a>
									{:else if slug == 'climate-commitments-energy-transparency' }
										<a target="_self"  href="/key-findings/renewable-energy-efficient-manufacturing"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf3_title}</strong></a>
									{:else if slug == 'renewable-energy-efficient-manufacturing' }
										<a target="_self"  href="/key-findings/renewable-energy-advocacy"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf4_title}</strong> </a>
									{:else if slug == 'renewable-energy-advocacy' }
										<a target="_self"  href="/key-findings/low-carbon-longer-lasting-materials"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf5_title}</strong> </a>
									{:else if slug == 'low-carbon-longer-lasting-materials' }
										<a target="_self"  href="/key-findings/greener-shipping"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf6_title}</strong></a>
										{:else if slug == 'greener-shipping' }
										<a href="/methodology"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.methodology_title}</strong></a>
									{/if}
									
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</Col>
		</Row>
	</Container>
</div>

{#if slug == 'climate-commitments-energy-transparency' }
	<div class="section section-4">
		<!-- svelte-ignore a11y-missing-content -->
		<Container>
			<div id="grid">
				<Grid sort="bic1" mode="related"/>
			</div>
			</Container>
	</div>
{:else if slug == 'renewable-energy-efficient-manufacturing' }
	<div class="section section-4">
		<Container>
			<div id="grid">
				<Grid sort="bic2" mode="related" />
			</div>
			</Container>
	</div>
{:else if slug == 'renewable-energy-advocacy' }
	<div class="section section-4">
		<Container>
			<div id="grid">
				<Grid sort="bic5" mode="related" />
			</div>
			</Container>
	</div>
{:else if slug == 'low-carbon-longer-lasting-materials' }
	<div class="section section-4">
		<Container>
			<div id="grid">
				<Grid sort="bic3" mode="related" />
			</div>
			</Container>
	</div>
{:else if slug == 'greener-shipping' }
	<div class="section section-4">
		<Container>
			<div id="grid">
				<Grid sort="bic4" mode="related" />
			</div>
			</Container>
	</div>
{/if}

<style>

	.banner {
		font-family:'Amsi Pro Ultra';
		display:flex;
		flex: 1 1 100%;
		justify-content:center;
		background:var(--secondary-color);
		text-transform:capitalize;
	}

	tbody {
		font-family:var(--sans);
	}

	.banner span {
		color:var(--primary-color);
		letter-spacing:2px;
		font-size:2.4rem;
		padding-top:15px;
		padding-left:15px;
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

	.content {
		display:block;
	}

	.content img {
		padding-top:20px;
		padding-bottom:20px;
	}

	#grid-mix {
		text-align:center;
		padding-top:10px;
		padding-bottom:30px;
	}

	.bottomNav {
		margin-top:50px;
		margin-bottom:50px;
		display:table;
	}

	.bottomNav a {
		color:var(--primary-color);
	}

	.bottomNavItem {
		padding:20px;
		background:#DEEBF0;
		min-width:270px;
		height:60px;
		display:table-cell;
		vertical-align:middle;
	}

	#chevron-left {
		width:20px;
		height:100%;
		text-align:center;
		float:left;
	}

	#chevron-right {
		width:20px;
		text-align:center;
		height:100%;
		float:right;
	}

	#ambition-graphic {
		padding:10px;
		margin-bottom:20px;
		text-align:center;
	}

	#ambition-graphic h4 {
		padding-bottom:20px;
		text-align:left;
	}

	#ambition-graphic p {
		padding-top:10px;
		color:var(--heading-blue);
	}

</style>

