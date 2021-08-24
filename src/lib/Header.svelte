<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import logo from '../svg/logo_white.svg';
	import Sidebar from "../lib/Sidebar.svelte";
	import Hamburger from "../lib/Hamburger.svelte";
	let open = false;
	export let headerColor = "blue";
	console.log(base);
	let y;
</script>

<header>
	<Sidebar bind:open/>
	<div class="wrapper">
		<div class="corner">
			<a href="/">
				<img src={logo} alt="Stand.earth" />
			</a>
		</div>

		<nav id="main-nav">
			<ul>
				<li class:active={$page.path === '{base}/brand-scores'}><a target="_self" sveltekit:prefetch href="{base}/brand-scores">Brand scores</a></li>
				<li id="{headerColor}"><a rel="external" target="_new" href="https://act.stand.earth/page/26072/petition/1?ea.tracking.id=referrals">Take action</a></li>
				<li class:active={$page.path === '/'}><Hamburger bind:open={open} /></li>
			</ul>
		</nav>

	</div>
</header>



<style>
	header {
		background:var(--primary-color);
		color:var(--white);
		position: -webkit-sticky; /* Safari */
		position: sticky;
		top: 0;
		width:100%;
		
		z-index:99;
	}

	#yellow {
		background-color:#FCD455;
	}

	#blue {
		background-color:var(--secondary-color);
	}

	.wrapper {
		display: flex;
		justify-content:space-between;
	}
	
	.corner {
		width: 10em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		max-width: 200px;
    	float:left;
    	padding-left:30px;
	}

	nav#main-nav {
		display: flex;
		padding-right:20px;
		justify-content: right;
	}

	nav#main-nav ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	nav#main-nav li {
		height: 100%;
	}

	nav#main-nav li:nth-child(2) a {
		color:var(--primary-color);
		font-family:var(--sans-bold);
	}

	@media screen and (max-width:700px) {
		nav#main-nav li:first-child {
			display:none;
		}
		nav#main-nav li:nth-child(2) {
			display:none;
		}
	}

	nav#main-nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--white);
		font-size: 1rem;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
		cursor:pointer;
	}

	nav#main-nav a:hover {
		color: var(--white);
	}

	a {
		font-family:var(--sans-bold);
	}

	
</style>
