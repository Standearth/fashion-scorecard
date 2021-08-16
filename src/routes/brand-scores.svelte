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
			<Grid />
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

</style>

