<script>
	import Grid from '$lib/Grid.svelte';
	import { base } from '$app/paths';
	import {onMount} from 'svelte';
	import { Col, Container, Row, Collapse, Accordion, AccordionItem} from 'sveltestrap';
	import summary from "../data/summary.json";
	import homepage from "../data/homepage.json";
	import Header from '$lib/Header.svelte';
	import createFootnotes from "../lib/footnote";
    import '../styles/water.css';
	import '../styles/app.css';
	import '../styles/font.css';
	let isOpen = false;
	//export let brands;

	onMount(() => {
		setTimeout(() => {
			createFootnotes();
		}, 2000);
	});
</script>

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
						<button>
							Learn more
						</button>
					</a>
					
				</div>
			</Col>
			<Col sm=12 lg=6>
				<div id="s1img">
					<img alt="iceberg" src="assets/images/iceberg.jpeg">
				</div>
			</Col>
		</Row>
	</Container>
</div>

<div class="section section-2">
	<Container>
		<Row>
			<Col sm=12 md={{size:8, offset:2}} lg={{size:8, offset:2}}>
				<div id="s2copy">
					<h2>{homepage.Section_2_title}</h2>
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
	<Container>
		<Row>
			<Col sm=12 lg={{size:8, offset:2 }}>
				<h2>{@html homepage.criteria_title}</h2>
				<p>{@html homepage.criteria_opening}</p>
			</Col>
		</Row>
		<Row>
			<Col sm=12 md=6 lg=4>
				<a target="_self" sveltekit:prefetch href="{base}/key-findings/climate-commitments-energy-transparency">
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s1.svg"> 
						</div>
						<h4>{homepage.Criteria1}</h4>
						{homepage.Criteria1b}
					</div>
				</a>
			</Col>
			<Col sm=12 md=6 lg=4>
				<a target="_self" sveltekit:prefetch href="{base}/key-findings/renewable-energy-efficient-manufacturing">
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s2.svg"> 
						</div>
						<h4>{homepage.Criteria2}</h4>
						{homepage.Criteria2b}
					</div>
				</a>
			</Col>
			<Col sm=12 md=6 lg=4>
				<a target="_self" sveltekit:prefetch href="{base}/key-findings/renewable-energy-advocacy">
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s5.svg"> 
						</div>
						<h4>{homepage.Criteria3}</h4>
						{homepage.Criteria3b}
					</div>
				</a>
			</Col>
			<Col sm=12 md=6 lg=4>
				<a target="_self" sveltekit:prefetch href="{base}/key-findings/low-carbon-longer-lasting-materials">
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s3.svg"> 
						</div>
						<h4>{homepage.Criteria4}</h4>
						{homepage.Criteria4b}
					</div>
				</a>
			</Col>
			<Col sm=12 md=6 lg=4>
				<a target="_self" sveltekit:prefetch href="{base}/key-findings/greener-shipping">
					<div class="box">
						<div class="boximg">
							<img alt="logo" src="assets/images/s4.svg"> 
						</div>
						<h4>{homepage.Criteria5}</h4>
						{homepage.Criteria5b}
					</div>
				</a>
			</Col>
			
		</Row>
		<Row>
			<Col sm=12 lg={{size:8, offset:2 }}>
				<h4>{homepage.Criteria_closing}</h4>
			</Col>
		</Row>
	</Container>
</div>

<div class="section section-3">
	<Container>	
		<Row>
			<Col sm=12 lg={{size:8,offset:2}}>
				<h2>Major findings</h2>
			<Accordion flush>
				<AccordionItem active>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=12>
								<div class="section-title">
									<h3>{@html homepage.Finding1}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{@html homepage.Finding1b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
					<hr/>
				<AccordionItem>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=12>
								<div class="section-title">
									<h3>{@html homepage.Finding2}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{homepage.Finding2b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=12>
								<div class="section-title">
									<h3>{@html homepage.Finding3}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{@html homepage.Finding3b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=12>
								<div class="section-title">
									<h3>{@html homepage.Finding4}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{@html homepage.Finding4b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=12>
								<div class="section-title">
									<h3>{@html homepage.Finding5}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{@html homepage.Finding5b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=12>
								<div class="section-title">
									<h3>{@html homepage.Finding6}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{@html homepage.Finding6b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=12>
								<div class="section-title">
									<h3>{@html homepage.Finding7}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{@html homepage.Finding7b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=12>
								<div class="section-title">
									<h3>{@html homepage.Finding8}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{@html homepage.Finding8b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=12>
								<div class="section-title">
									<h3>{@html homepage.Finding9}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{@html homepage.Finding9b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
			</Accordion>
			<div class="notes">
				<Accordion flush>
					<AccordionItem active>
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
									{@html homepage.homepage_notes}
								  </Col>
							  </Row>
						  </div>
					  </AccordionItem>
					</Accordion>
				
			</div>
			</Col>
		</Row>
	</Container>
</div>

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
			<Grid />
		</div>
		</Container>
</div>


<style>
	.cover img {
		width:100%;
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
		float:left;
		border:1px solid var(--white);
	}

	button {
		background:var(--primary-color);
		color:var(--white);
		padding:10px;
		margin:auto;
	}

	.box:hover {
		border:1px solid #2F5E80;
		
	}

	.boximg {
		text-align:center;
	}

	.box img {
		margin:auto;
		max-height:50px;
		max-width:70px;
	}

	.box:hover h4 {
		color:var(--primary-color);
		text-decoration:none;
	}

	.box h4:hover {
		text-decoration:underline;
	}

	h4 {
		font-size:18px;
		color:var(--primary-color);
		line-height:1.4;
	}

	.acc-header {
		width:100%;
	}

	.acc-header h3 {
		font-size:22px;
		color:var(--primary-color);
		font-weight:600;
	}

	#grid {
		margin-top:100px;
	}
</style>
