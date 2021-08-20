<script context="module">
	import { base } from '$app/paths';
	export async function load({ page, fetch }) {
		const slug = page.params.brand;
		const content = await fetch(`${base}/${slug}.json`)
			.then((r) => r.json());
		return {
			props: content
		};
	}
</script>

<script>
	import Grade from '../lib/Grade.svelte'
	import createFootnotes from '../lib/footnote.js'
	import {onMount} from 'svelte'
	import { Col, Container, Row, Accordion, AccordionItem, Spinner } from 'sveltestrap';
	import Grid from '../lib/Grid.svelte'
	import Fa from 'svelte-fa/src/fa.svelte'
	import Header from '../lib/Header.svelte'
	import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
	import social from '../data/social.json'
	export let content;
	let socialContent;
	let loading = false;
	

	function processSocialClick(channel) {
		console.log(social);

        social.forEach(function(d) {
		if (d.Brand == content.brand) {
			socialContent = d;
		}
        }); 

        var twitterShare = {
            message: encodeURIComponent(socialContent.Tweet + " https://fashion.stand.earth/" + content.path)
        }
    
        var emailShare = {
            subject: encodeURI(content.brand + " scored "+content.grade+" in our fossil-free fashion scorecard"),
            message: encodeURI(socialContent.Email)+"%0A%0A"+encodeURI("https://fashion.stand.earth/" + content.path)
        }
        var facebookShare = {
            url: encodeURIComponent("https://fashion.stand.earth/"+content.path)+'%26en_chan%3Dfb%26ea.tracking.id%3Dfb-share'
        }
        if (channel == 'Facebook') {
            return facebookShare.url;

        } else if (channel == 'Twitter') {
            return twitterShare.message;

        } else if (channel == 'Email') {
            return emailShare;
        } else {
			return socialContent.Facebook;
		}
    }
	

	onMount(() => {
		setTimeout(function() {
			loading = false;
			document.getElementsByClassName('accordion-collapse')[0].setAttribute('style','overflow:visible')
			createFootnotes();
		}, 200);
	});

	function updateFootnotes() {
		setTimeout(() => {
					createFootnotes();
					document.getElementsByClassName('accordion-collapse')[0].setAttribute('style','overflow:visible')
				}, 500);
	}

</script>

<svelte:head>
	<title>{content.brand} | Fossil-free Fashion Scorecard | Stand.earth</title>
	<meta name="title" content="{content.brand} scored {content.grade} in our Fossil-free Fashion Scorecard | Stand.earth"/>
	<meta property="og:title" content="{content.brand} scored {content.grade} in our Fossil-free Fashion Scorecard | Stand.earth"/>
	<meta property="og:description" content="{processSocialClick()}"/>
	<meta name="description" content="As one of the biggest drivers of climate pollution, fashion companies must move decisively to break their dependence on fossil fuels, spurring the rapid transition to renewable energy and fossil free fabrics we need to safeguard a livable future."/>
	<link rel="canonical" href="https://fashion.stand.earth"/>
	<meta property="og:url" content="https://fashion.stand.earth/{content.path}"/>
</svelte:head>

<Header headerColor="blue"/>

<div class="banner">
	<span>Fossil-free Fashion Scorecard</span>
</div>

<div class='brand-cover'>
	<div class="overlay">
		<div class="summary-content">
			{#if loading} 

				<div id="spinner">
				<Spinner color=primary/>
				</div>

			{:else}
				<div class="rower">
					<div class="grade">
						<Grade gradeDetail={content.grade} gradeType='overall' grade={content.grade.charAt(0)} />
					</div>
					<div class="logo">
						<img alt="{content.brand}" src="/assets/images/logos/{content.path}.png">
					</div>
					<div class="name">
						<h1>{content.brand}</h1>
					</div>
				</div>
				<div class="rower">
					<div class="summary">
						<p>{@html content.summary}</p>
					</div>
					{#if content.subsidiaries}
						<div class="related-brands">
							<h4>Main subsidiaries</h4>
							{#each content.subsidiaries.split(',') as subs}
							<img alt="{subs}" src="/assets/images/logos/{subs}.png">
							{/each}
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<div class="brand-content">
	{#if loading} 

				<div id="spinner">
				<Spinner color=primary/>
				</div>

	{:else}
	<Container>
		<Row>
		  <Col sm=12 lg={{size:8, offset:2}}>
			<h2>Key findings</h2>
			<hr />
			<Accordion flush>
			  <AccordionItem active on:toggle={(e) => {updateFootnotes()}}>
					<div class="acc-header" slot="header">
						<Row>
							<Col sm=1 lg=1>
								<div class="section-icon">
									<img alt="Climate commitments & supply chain energy transparency" src="assets/images/s1.svg">
								</div>
							</Col>
							<Col sm=1 lg=1>
								<div class="section-grade">
									<Grade gradeDetail={content.commitments_grade} gradeType='criteria' grade={content.commitments_grade.charAt(0)} />
								</div>
							</Col>
							<Col sm=11 md=10 lg=10>
								<div class="section-title">
									<h3>Climate commitments & supply chain energy transparency</h3>
								</div>
							</Col>
						</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm={{size:11, offset:1}} lg={{size:10, offset:2}}>
								{@html content.commitments_summary}
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem on:toggle={(e) => {updateFootnotes()}}>
					<div class="acc-header" slot="header">
					<Row>
						<Col sm=1 lg=1>
							<div class="section-icon">
								<img alt="Renewable & energy-efficient manufacturing" src="assets/images/s2.svg">
							</div>
						</Col>
							<Col sm=1 lg=1>
							<div class="section-grade">
								<Grade gradeDetail={content.renewable_grade} gradeType='criteria' grade={content.renewable_grade.charAt(0)} />
							</div>
						</Col>
						<Col sm=11 md=10 lg=10>
							<div class="section-title">
								<h3>Renewable & energy efficient manufacturing</h3>
							</div>
						</Col>
					</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm={{size:11, offset:1}} lg={{size:10, offset:2}}>
								{@html content.renewable_summary}
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem on:toggle={(e) => {updateFootnotes()}}>
					<div class="acc-header" slot="header">
					<Row>
						<Col sm=1 lg=1>
							<div class="section-icon">
								<img alt="Low-carbon materials" src="assets/images/s3.svg">
							</div>
						</Col>
							<Col sm=1 lg=1>
							<div class="section-grade">
								<Grade gradeDetail={content.materials_grade} gradeType='criteria' grade={content.materials_grade.charAt(0)} />
							</div>
						</Col>
						<Col sm=11 md=10 lg=10>
							<div class="section-title">
								<h3>Low carbon materials</h3>
							</div>
						</Col>
					</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm={{size:11, offset:1}} lg={{size:10, offset:2}}>
								{@html content.materials_summary}
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem on:toggle={(e) => {updateFootnotes()}}>
					<div class="acc-header" slot="header">
					<Row>
						<Col sm=1 lg=1>
							<div class="section-icon">
								<img alt="Climate commitments & supply chain energy transparency" src="assets/images/s4.svg">
							</div>
						</Col>
						<Col sm=1 lg=1>
							<div class="section-grade">
								<Grade gradeDetail={content.shipping_grade} gradeType='criteria' grade={content.shipping_grade.charAt(0)} />
							</div>
						</Col>
						<Col sm=11 md=10 lg=10>
							<div class="section-title">
								<h3>Greener Shipping</h3>
							</div>
						</Col>
					</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm={{size:11, offset:1}} lg={{size:10, offset:2}}>
								{@html content.shipping_summary}
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
				<AccordionItem>
					<div class="acc-header" slot="header">
					<Row>
						<Col sm=1 lg=1>
							<div class="section-icon">
								<img alt="Climate commitments & supply chain energy transparency" src="assets/images/s5.svg">
							</div>
						</Col>
							<Col sm=1 lg=1>
							<div class="section-grade">
								<Grade gradeDetail={content.advocacy_grade} gradeType='criteria' grade={content.advocacy_grade.charAt(0)} />
							</div>
						</Col>
						<Col sm=11 md=10 lg=10>
							<div class="section-title">
								<h3>Advocacy</h3>
							</div>
						</Col>
					</Row>
					</div>
					<div class="acc-body">
						<Row>
							<Col sm={{size:11, offset:1}} lg={{size:10, offset:2}}>
								{@html content.advocacy_summary}
							</Col>
						</Row>
					</div>
				</AccordionItem>
				<hr/>
			</Accordion>
		  </Col>
		</Row>
		<Row>
			<Col sm=12 lg={{size:8, offset:2}}>
					<div class="brand-share">
						<p>Share {content.brand}'s results: 
							<a rel="external" target="_new" href="https://www.facebook.com/sharer.php?u={processSocialClick('Facebook')}"><Fa icon="{faFacebook}" color="#2C72F6" size="2x"/></a>
                        	<a rel="external" target="_new" href="https://twitter.com/intent/tweet?text={processSocialClick('Twitter')}"><Fa icon="{faTwitter}" color="#1DA1F2" size="2x" /></a>
                        	<a rel="external" target="_new" href="mailto:?subject={processSocialClick('Email').subject}&body={processSocialClick('Email').message}"><Fa icon="{faEnvelope}" color="#2F5E80" size="2x"/></a>
						</p>
					</div>
			</Col>
		</Row>
		<Row>
			<Col sm=12 lg={{size:8, offset:2}}>
					<div class="similar-companies">
						<h3>Similar companies</h3>
						<Grid mode="related" filter={content.category.split(',')[0]}/>
						<p><a target="_self" href="/brand-scores"><Fa icon="{faArrowLeft}" size="2x"/> View all companies</a></p>
						<hr />
					</div>
					
			</Col>
		</Row>
		<Row>
			<Col sm=12 lg={{size:8,offset:2}}>
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
										<ul>
											{@html content.commitments_notes}
											{@html content.renewable_notes}
											{@html content.materials_notes}
											{@html content.shipping_notes}
										</ul>
									</Col>
								</Row>
							</div>
						</AccordionItem>
					</Accordion>
				</div>
			</Col>
		</Row>

	  </Container>
	  {/if}
</div>


<style>
	a {
		color:var(--primary-color);
	}
	.brand-cover {
		background-image:url('/assets/images/brand-cover.jpg');
		background-position:top;
		background-size: cover;
		min-height:500px;
		height:auto;
	}

	.overlay {
		width:100%;
		height:100%;
		background:rgba(47,94,128,0.4);
		min-height:400px;
		padding-top:100px;
		padding-bottom:80px;
	}

	.rower {
		width:100%;
		display:flex;

	}

	.summary-content {
		width:95%;
		max-width:1200px;
		margin:auto;
		background:var(--white);
		border-radius: 5px;
		padding:10px;
		min-height:300px;
		padding-left:30px;
	}

	.grade {
		margin-top:-10px;
	}

	.name {
		margin-top:25px;
		font-weight:bold;
		margin-left:10px;
		
	}

	.name h1 {
		color:var(--primary-color);
		font-size:37px;
	}

	.logo {
		max-width:150px;
		padding-left:20px;
		padding-right:10px;
		margin-top:27px;
	}

	.summary {
		width:100%;
		max-width:830px;
		min-width:200px;
		display:inline;
		padding-top:40px;
		padding-bottom:40px;
		font-size:20px;
		font-family:var(-sans);
		color:rgb(47,94,128);
		font-weight:lighter;
		padding-right:10px;
		
	}

	.related-brands {
		margin-top:5px;
		float:right;
		padding:20px;
		max-width:350px;
	}

	@media (max-width:750px) {
		.rower {
			flex-wrap:wrap;
		}
		.summary {
			flex-basis:100%;
			padding-bottom:10px;
		}

		.related-brands {
			flex-basis:100%;
		}

	}

	.related-brands img {
		max-width:150px;
		padding:5px;
	}

	.brand-content h2 {
		color: var(--dark-red);
		font-size: 30px;
		font-weight:600;
	}

	.brand-content hr {
		border-color:rgb(172,159,156);
		border:1pt;
	}

	.brand-content {
		margin-top:50px;
	}

	.acc-header h3 {
		font-size:22px;
		color:var(--primary-color);
		font-weight:600;
	}

	.section-icon {
		width:100%;
	}

	@media (max-width:768px) {
		.section-icon {
			display:none;
		}
	}

	.section-title {
		margin-top:-5px;
		padding-left:5px;

	}

	.acc-header {
		width:100%;
	}

	.brand-share p {
		padding-top:20px;
		font-size:18px;
		font-weight:600;
		color:#272B41;
	}


	.similar-companies {
		margin-top:40px;
	}

	.similar-companies h3 {
		color:rgb(47,94,128);
	}

	.similar-companies p {
		margin-bottom:60px;
	}

	.notes {
		margin-bottom:50px;
	}

	.notes-body {
		font-size:14px;
	}

	.notes-header h4{
		margin-top:0px;
		margin-bottom:0px;
	}

	.brand-share a {
		padding-left:10px;
		padding-right:10px;
		
	}

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
		padding-top:15px;
		padding-bottom:10px;
	}

	#spinner {
    width:100%;
    height:200px;
    margin-top:10%;
    text-align:center;
  }
</style>

