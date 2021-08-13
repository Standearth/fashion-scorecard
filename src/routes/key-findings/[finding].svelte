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
	import { onMount } from 'svelte'
	import Fa from 'svelte-fa/src/fa.svelte'
	import Header from '../../lib/Header.svelte'
	import { faArrowRight, faBalanceScale, faClipboardList } from '@fortawesome/free-solid-svg-icons'
	import Preloader from '../../lib/Preloader.svelte';
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
			</Col>
		</Row>
	</Container>
</div>

<div class="bottomNav">
	<Container>
		<Row>
			<Col sm=12 lg={{size:5, offset:2}}>
				<div class="bottomNavItem">
					{#if slug == 'fashions-fossil-fuel-problem'}
						<a href="/key-findings/climate-commitments-energy-transparency"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf2_title}</strong> <Fa icon="{faArrowRight}" size="1x"/></a>
					{:else if slug == 'climate-commitments-energy-transparency' }
						<a href="/key-findings/renewable-energy-efficient-manufacturing"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf3_title}</strong> <Fa icon="{faArrowRight}" size="1x"/></a>
					{:else if slug == 'renewable-energy-efficient-manufacturing' }
						<a href="/key-findings/renewable-energy-advocacy"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf4_title}</strong> <Fa icon="{faArrowRight}" size="1x"/></a>
					{:else if slug == 'renewable-energy-advocacy' }
						<a href="/key-findings/low-carbon-longer-lasting-materials"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf5_title}</strong> <Fa icon="{faArrowRight}" size="1x"/></a>
					{:else if slug == 'low-carbon-longer-lasting-materials' }
						<a href="/key-findings/greener-shipping"><Fa icon="{faClipboardList}" size="1x"/> Next section: <strong>{content.kf6_title}</strong> <Fa icon="{faArrowRight}" size="1x"/></a>
					{/if}
				</div>
			</Col>
			<Col sm=12 lg=3>
				<div class="bottomNavItem">
					<a href="/brand-scores"><Fa icon="{faBalanceScale}" size="1x"/> <strong>View brand scores</strong> <Fa icon="{faArrowRight}" size="1x"/></a>
				</div>
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

