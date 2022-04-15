<script>
	import Accordion from 'sveltestrap/src/Accordion.svelte';
	import AccordionItem from 'sveltestrap/src/AccordionItem.svelte';
	import Container from 'sveltestrap/src/Container.svelte';
	import Row from 'sveltestrap/src/Row.svelte';
	import Col from 'sveltestrap/src/Col.svelte';

	import Fa from 'svelte-fa/src/fa.svelte';
	import createFootnotes from '../lib/footnote.js';
	import { onMount } from 'svelte';
	import Header from '../lib/Header.svelte';
	import { faArrowRight, faBalanceScale, faClipboardList } from '@fortawesome/free-solid-svg-icons';
	import homepage from '../data/homepage.json';

	onMount(() => {
		createFootnotes();
	});

	function updateFootnotes() {
		setTimeout(() => {
			createFootnotes();
			document
				.getElementsByClassName('accordion-collapse')[0]
				.setAttribute('style', 'overflow:visible');
		}, 500);
	}
</script>

<svelte:head>
	<meta name="title" content="Executive Summary | Fossil-free Fashion Scorecard | Stand.earth" />
	<meta property="og:title" content="Executive Summary | Fossil-free Fashion Scorecard" />
	<meta property="og:url" content="https://fashion.stand.earth/executive-summary" />
	<meta
		property="og:description"
		content="As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."
	/>
	<meta
		name="description"
		content="As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."
	/>
</svelte:head>

<Header headerColor="blue" />

<div class="banner">
	<span>Fossil-free Fashion Scorecard</span>
</div>

<div class="cover">
	<div class="overlay">
		<h1>{homepage.Section_2_title}</h1>
	</div>
</div>

<div class="section section-1">
	<Container>
		<Row>
			<Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 8, offset: 2 }}>
				<div id="s2copy">
					{@html homepage.Section_2_content}
					{@html homepage.Section_2_content_2}
					<!--<button on:click={() => (isOpen = !isOpen)} class="mb-3">
						See full executive summary
					</button>
					<Collapse {isOpen}>
						
					</Collapse>-->
				</div>
			</Col>
		</Row>
	</Container>
</div>

<div class="section section-2">
	<Container>
		<Row>
			<Col sm="12" lg={{ size: 8, offset: 2 }}>
				<h2>Major findings</h2>
				<Accordion flush>
					<AccordionItem
						active
						on:toggle={(e) => {
							updateFootnotes();
						}}
					>
						<div class="acc-header" slot="header">
							<Row>
								<Col sm="12">
									<div class="section-title">
										<h3>{@html homepage.Finding1}</h3>
									</div>
								</Col>
							</Row>
						</div>
						<div class="acc-body">
							<Row>
								<Col sm="12">
									<p>{@html homepage.Finding1b}</p>
								</Col>
							</Row>
						</div>
					</AccordionItem>
					<hr />
					<AccordionItem
						on:toggle={(e) => {
							updateFootnotes();
						}}
					>
						<div class="acc-header" slot="header">
							<Row>
								<Col sm="12">
									<div class="section-title">
										<h3>{@html homepage.Finding2}</h3>
									</div>
								</Col>
							</Row>
						</div>
						<div class="acc-body">
							<Row>
								<Col sm="12">
									<p>{homepage.Finding2b}</p>
								</Col>
							</Row>
						</div>
					</AccordionItem>
					<hr />
					<AccordionItem
						on:toggle={(e) => {
							updateFootnotes();
						}}
					>
						<div class="acc-header" slot="header">
							<Row>
								<Col sm="12">
									<div class="section-title">
										<h3>{@html homepage.Finding3}</h3>
									</div>
								</Col>
							</Row>
						</div>
						<div class="acc-body">
							<Row>
								<Col sm="12">
									<p>{@html homepage.Finding3b}</p>
								</Col>
							</Row>
						</div>
					</AccordionItem>
					<hr />
					<AccordionItem
						on:toggle={(e) => {
							updateFootnotes();
						}}
					>
						<div class="acc-header" slot="header">
							<Row>
								<Col sm="12">
									<div class="section-title">
										<h3>{@html homepage.Finding4}</h3>
									</div>
								</Col>
							</Row>
						</div>
						<div class="acc-body">
							<Row>
								<Col sm="12">
									<p>{@html homepage.Finding4b}</p>
								</Col>
							</Row>
						</div>
					</AccordionItem>
					<hr />
					<AccordionItem
						on:toggle={(e) => {
							updateFootnotes();
						}}
					>
						<div class="acc-header" slot="header">
							<Row>
								<Col sm="12">
									<div class="section-title">
										<h3>{@html homepage.Finding5}</h3>
									</div>
								</Col>
							</Row>
						</div>
						<div class="acc-body">
							<Row>
								<Col sm="12">
									<p>{@html homepage.Finding5b}</p>
								</Col>
							</Row>
						</div>
					</AccordionItem>
					<hr />
					<AccordionItem
						on:toggle={(e) => {
							updateFootnotes();
						}}
					>
						<div class="acc-header" slot="header">
							<Row>
								<Col sm="12">
									<div class="section-title">
										<h3>{@html homepage.Finding6}</h3>
									</div>
								</Col>
							</Row>
						</div>
						<div class="acc-body">
							<Row>
								<Col sm="12">
									<p>{@html homepage.Finding6b}</p>
								</Col>
							</Row>
						</div>
					</AccordionItem>
					<hr />
					<AccordionItem
						on:toggle={(e) => {
							updateFootnotes();
						}}
					>
						<div class="acc-header" slot="header">
							<Row>
								<Col sm="12">
									<div class="section-title">
										<h3>{@html homepage.Finding7}</h3>
									</div>
								</Col>
							</Row>
						</div>
						<div class="acc-body">
							<Row>
								<Col sm="12">
									<p>{@html homepage.Finding7b}</p>
								</Col>
							</Row>
						</div>
					</AccordionItem>
					<hr />
					<AccordionItem
						on:toggle={(e) => {
							updateFootnotes();
						}}
					>
						<div class="acc-header" slot="header">
							<Row>
								<Col sm="12">
									<div class="section-title">
										<h3>{@html homepage.Finding8}</h3>
									</div>
								</Col>
							</Row>
						</div>
						<div class="acc-body">
							<Row>
								<Col sm="12">
									<p>{@html homepage.Finding8b}</p>
								</Col>
							</Row>
						</div>
					</AccordionItem>
					<hr />
					<AccordionItem
						on:toggle={(e) => {
							updateFootnotes();
						}}
					>
						<div class="acc-header" slot="header">
							<Row>
								<Col sm="12">
									<div class="section-title">
										<h3>{@html homepage.Finding9}</h3>
									</div>
								</Col>
							</Row>
						</div>
						<div class="acc-body">
							<Row>
								<Col sm="12">
									<p>{@html homepage.Finding9b}</p>
								</Col>
							</Row>
						</div>
					</AccordionItem>
				</Accordion>
			</Col>
		</Row>
	</Container>
</div>

<div class="section section-3">
	<Container>
		<Row>
			<Col sm="12" lg={{ size: 8, offset: 2 }}>
				<h2>{@html homepage.criteria_title}</h2>
				<p>{@html homepage.criteria_opening}</p>
			</Col>
		</Row>
		<Row>
			<Col sm="12" md="6" lg="4">
				<a
					target="_self"
					sveltekit:prefetch
					href="/key-findings/climate-commitments-energy-transparency"
				>
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s1.svg" />
						</div>
						<h4>{homepage.Criteria1}</h4>
						<p>{homepage.Criteria1b}</p>
					</div>
				</a>
			</Col>
			<Col sm="12" md="6" lg="4">
				<a
					target="_self"
					sveltekit:prefetch
					href="/key-findings/renewable-energy-efficient-manufacturing"
				>
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s2.svg" />
						</div>
						<h4>{homepage.Criteria2}</h4>
						<p>{homepage.Criteria2b}</p>
					</div>
				</a>
			</Col>
			<Col sm="12" md="6" lg="4">
				<a target="_self" sveltekit:prefetch href="/key-findings/renewable-energy-advocacy">
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s5.svg" />
						</div>
						<h4>{homepage.Criteria3}</h4>
						<p>{homepage.Criteria3b}</p>
					</div>
				</a>
			</Col>
			<Col sm="12" md="6" lg="4">
				<a
					target="_self"
					sveltekit:prefetch
					href="/key-findings/low-carbon-longer-lasting-materials"
				>
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s3.svg" />
						</div>
						<h4>{homepage.Criteria4}</h4>
						<p>{homepage.Criteria4b}</p>
					</div>
				</a>
			</Col>
			<Col sm="12" md="6" lg="4">
				<a target="_self" sveltekit:prefetch href="/key-findings/greener-shipping">
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s4.svg" />
						</div>
						<h4>{homepage.Criteria5}</h4>
						<p>{homepage.Criteria5b}</p>
					</div>
				</a>
			</Col>
		</Row>
		<Row>
			<Col sm="12" lg={{ size: 8, offset: 2 }}>
				<h4>{homepage.Criteria_closing}</h4>
			</Col>
		</Row>
		<Row>
			<Col sm="12" lg={{ size: 8, offset: 2 }}>
				<div class="notes">
					<Accordion flush>
						<AccordionItem active>
							<div class="notes-header" slot="header">
								<Row>
									<Col sm="12" lg="12">
										<h4>Notes</h4>
									</Col>
								</Row>
							</div>
							<div class="notes-body">
								<Row>
									<Col sm="12">
										{@html homepage.homepage_notes}
									</Col>
								</Row>
							</div>
						</AccordionItem>
					</Accordion>
				</div>
			</Col>
			<div class="bottomNav">
				<Container>
					<Row>
						<Col sm="12" lg={{ size: 6, offset: 3 }}>
							<div class="bottomNavItem">
								<div id="chevron-right">
									<Fa icon={faArrowRight} size="1x" />
								</div>
								<a target="_self" href="/key-findings/fashions-fossil-fuel-problem"
									><Fa icon={faClipboardList} size="1x" /> Next section:
									<strong>Fashion's Fossil Fuel Problem</strong></a
								>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Row>
	</Container>
</div>

<style>
	.banner {
		font-family: 'Amsi Pro Ultra';
		display: flex;
		flex: 1 1 100%;
		justify-content: center;
		background: var(--secondary-color);
		text-transform: capitalize;
	}

	.banner span {
		color: var(--primary-color);
		letter-spacing: 2px;
		font-size: 2.4rem;
		padding-left: 15px;
		padding-top: 15px;
		padding-bottom: 10px;
	}

	.cover {
		background-image: url('/assets/images/SE-ScorecardCover-210729-D3-Desktop-Footer-1366x500.png');
		background-position: bottom;
		min-height: 210px;
		position: relative;
		z-index: -1;
	}

	.cover h1 {
		margin-top: 130px;
	}

	@media (max-width: 600px) {
		.cover h1 {
			margin-top: 60px;
		}

		.banner span {
			font-size: 1.5rem;
		}
	}
	.overlay {
		background: rgba(255, 255, 255, 0.8);
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	h2 {
		color: var(--heading-blue);
		font-weight: bold;
	}

	hr {
		border: 1px solid #ac9f9c;
	}

	.section {
		padding-top: 50px;
		padding-bottom: 50px;
	}

	.section-2 {
		background: rgba(174, 205, 218, 0.12);
	}

	.section-3 {
		background: rgba(174, 205, 218, 0.25);
		padding-top: 30px;
		padding-bottom: 50px;
	}

	.box {
		background: var(--white);
		margin: 20px;
		padding: 20px;
		border-radius: 6px;
		font-size: 17px;
		color: var(--primary-color);
		float: left;
		border: 1px solid var(--white);
	}

	.box:hover {
		border: 1px solid #2f5e80;
	}

	.boximg {
		text-align: center;
	}

	.box img {
		margin: auto;
		max-height: 50px;
		max-width: 70px;
	}

	.box:hover h4 {
		color: var(--primary-color);
		text-decoration: none;
	}

	.box h4:hover {
		text-decoration: underline;
	}

	h4 {
		font-size: 18px;
		color: var(--primary-color);
		line-height: 1.4;
	}

	.acc-header {
		width: 100%;
	}

	.acc-header h3 {
		font-size: 22px;
		color: var(--primary-color);
		font-weight: 600;
	}

	.notes {
		margin-top: 50px;
	}

	.bottomNav {
		margin-top: 50px;
		margin-bottom: 50px;
		display: table;
		width: 100%;
	}

	.bottomNav a {
		color: var(--primary-color);
	}

	.bottomNavItem {
		padding: 20px;
		background: #deebf0;
		min-width: 270px;
		height: 60px;
		display: table-cell;
		vertical-align: middle;
	}

	#chevron-right {
		width: 20px;
		text-align: center;
		height: 100%;
		float: right;
	}
</style>
