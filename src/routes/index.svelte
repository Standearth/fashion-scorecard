<script>
	import Grid from '$lib/Grid.svelte';
	import { Col, Container, Row, Collapse, Accordion, AccordionItem} from 'sveltestrap';
	import summary from "../data/summary.json";
	import homepage from "../data/homepage.json";
	import Header from '$lib/Header.svelte';
    import '../styles/water.css';
	import '../styles/app.css';
	import '../styles/font.css';
	let isOpen = false;
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
					<h2>Fashion's fossil fuel problem</h2>
					{@html summary.section_2_copy}
					<a href="#brand-scores">
						<button>
							See brand scores
						</button>
					</a>
				</div>
			</Col>
			<Col sm=12 lg=6>
				<div id="s1img">
					<img src="assets/images/iceberg.jpeg">
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
					<button on:click={() => (isOpen = !isOpen)} class="mb-3">
						See full executive summary
					</button>
					<Collapse {isOpen}>
						{@html homepage.Section_2_content_2}
					</Collapse>
				</div>
			</Col>
		</Row>
		<Row>
			<Col sm=12 lg={{size:8, offset:2 }}>
				<p>{homepage.criteria_opening}</p>
			</Col>
		</Row>
		<Row>
			<Col sm=12 md=6 lg=4>
				<div class="box">
					<div class="boximg">
						<img alt="logo" src="assets/images/s1.svg"> 
					</div>
					<h4>{homepage.Criteria1}</h4>
					{homepage.Criteria1b}
				</div>
			</Col>
			<Col sm=12 md=6 lg=4>
				<div class="box">
					<div class="boximg">
						<img alt="logo" src="assets/images/s2.svg"> 
					</div>
					<h4>{homepage.Criteria2}</h4>
					{homepage.Criteria2b}
				</div>
			</Col>
			<Col sm=12 md=6 lg=4>
				<div class="box">
					<div class="boximg">
						<img alt="logo" src="assets/images/s5.svg"> 
					</div>
					<h4>{homepage.Criteria3}</h4>
					{homepage.Criteria3b}
				</div>
			</Col>
			<Col sm=12 md=6 lg=4>
				<div class="box">
					<div class="boximg">
						<img alt="logo" src="assets/images/s3.svg"> 
					</div>
					<h4>{homepage.Criteria4}</h4>
					{homepage.Criteria4b}
				</div>
			</Col>
			<Col sm=12 md=6 lg=4>
				<div class="box">
					<div class="boximg">
						<img alt="logo" src="assets/images/s4.svg"> 
					</div>
					<h4>{homepage.Criteria5}</h4>
					{homepage.Criteria5b}
				</div>
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
									<h3>{homepage.Finding1}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{homepage.Finding1b}</p>
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
									<h3>{homepage.Finding2}</h3>
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
									<h3>{homepage.Finding3}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{homepage.Finding3b}</p>
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
									<h3>{homepage.Finding4}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{homepage.Finding4b}</p>
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
									<h3>{homepage.Finding5}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{homepage.Finding5b}</p>
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
									<h3>{homepage.Finding6}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{homepage.Finding6b}</p>
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
									<h3>{homepage.Finding7}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{homepage.Finding7b}</p>
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
									<h3>{homepage.Finding8}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{homepage.Finding8b}</p>
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
									<h3>{homepage.Finding9}</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm=12>
								<p>{homepage.Finding9b}</p>
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
			</Accordion>
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
				{homepage.criteria_opening}
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
		float:left;
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
