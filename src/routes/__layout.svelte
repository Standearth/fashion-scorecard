<svelte:head>
	<meta property="og:image" content="https://fashion.stand.earth/assets/images/SE-ScorecardCover-210729-D3-Desktop-Header-1366x675.png"/>
	<link rel="canonical" href="https://fashion.stand.earth"/>
	<meta property="og:url" content="https://fashion.stand.earth"/>
	<link rel="image_src" href="https://fashion.stand.earth/assets/images/SE-ScorecardCover-210729-D3-Desktop-Header-1366x675.png"/>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</svelte:head>

<script>
	import '../styles/water.css';
	import '../styles/app.css';
	import '../styles/font.css';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'
</script>

<GoogleAnalytics properties={[ 'G-8C7YDS4311']} />

<main>
	<slot />
</main>

<div id="form-wrap"><iframe title="action_form" src="https://act.stand.earth/page/32295/data/1" frameBorder="0" class="inner_wrapper"></iframe></div>
<footer>
	<p>© Stand.earth  |  Media inquiries: <a href="mailto:media@stand.earth">media@stand.earth</a> |  Design: Erika Rathje / Illustration: Cheryl Loh</p>
</footer>


<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	#form-wrap {
      float: none;
      width:100%;
      clear: both;
      position: relative;
      min-height: 365px;
      overflow: hidden;
      display: block;
    }

	#form-wrap .inner_wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

	@media (max-width: 641px) {
      #form-wrap {
          min-height: 550px !important;
          clear:both;
      }
    }
	
	@media screen and (min-width:642px) and (max-width: 992px) {
      #form-wrap {
          min-height: 408px !important;
          clear:both;
      }
    }

	
	
	footer {
		display: flex;
		background:var(--primary-color);
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-left:20px;
		padding-right:20px;
	}

	footer p {
		color:var(--white);
	}

	footer a {
		text-decoration: underline;
		color:var(--white);
	}

	footer a:hover {
		text-decoration: underline;
		color:var(--secondary-color);
	}
</style>
