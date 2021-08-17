<script context="module">
	import { base } from '$app/paths';
	export async function load({ page, fetch }) {
		const slug = page.params.finding;
		const body = await fetch(`${base}/key-findings/${slug}.json`)
			.then((r) => r.json());
		const content = body.content;
		return {
			props: {content,slug}
		};
	}
</script>

<script>
	import { Col, Container, Row, Popover, Accordion, AccordionHeader, AccordionItem, Icon } from 'sveltestrap';
	import createFootnotes from '../../lib/footnote.js'
	import Grid from '../../lib/Grid.svelte'
	import { onMount } from 'svelte'
	import Fa from 'svelte-fa/src/fa.svelte'
	import Header from '../../lib/Header.svelte'
	import PieChart from '../../lib/PieChart.svelte'
	import { faArrowRight, faArrowLeft, faClipboardList } from '@fortawesome/free-solid-svg-icons'
	export let content;
	export let slug;

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
					{@html content.kf1_body_1}
					<PieChart />
					{@html content.kf1_body_2}
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
					{@html content.kf2_body_2}
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
										<a target="_self"  href="/key-findings/climate-commitments-energy-transparency"> <Fa icon="{faClipboardList}" size="1x"/> Previous section: <strong>Executive Summary</strong></a>
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
		<!-- svelte-ignore a11y-missing-content -->
		<a name="brand-scores"></a>
		<Container>
			<div id="grid">
				<Grid sort="bic2" mode="related" />
			</div>
			</Container>
	</div>
{:else if slug == 'renewable-energy-advocacy' }
	<div class="section section-4">
		<!-- svelte-ignore a11y-missing-content -->
		<a name="brand-scores"></a>
		<Container>
			<div id="grid">
				<Grid sort="bic5" mode="related" />
			</div>
			</Container>
	</div>
{:else if slug == 'low-carbon-longer-lasting-materials' }
	<div class="section section-4">
		<!-- svelte-ignore a11y-missing-content -->
		<a name="brand-scores"></a>
		<Container>
			<div id="grid">
				<Grid sort="bic3" mode="related" />
			</div>
			</Container>
	</div>
{:else if slug == 'greener-shipping' }
	<div class="section section-4">
		<!-- svelte-ignore a11y-missing-content -->
		<a name="brand-scores"></a>
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

</style>

