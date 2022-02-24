<script>
    import { page } from '$app/stores'
    import { base } from '$app/paths'
    import Fa from 'svelte-fa/src/fa.svelte'
	import { faFileDownload,faRss,faGraduationCap } from '@fortawesome/free-solid-svg-icons'
	export let open = false;
</script>

<aside class="absolute w-full h-full border-r-2" class:open>
	<nav id="full-nav">
        <div id="menu-wrap">
            <p><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/">Home</a></p>
            <p><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/executive-summary">Executive Summary</a></p>
            <p><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/key-findings/fashions-fossil-fuel-problem">Fashion's Fossil Fuel Problem</a></p>
            <p><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/brand-scores">Brand Scores</a></p>
            <p><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/key-findings/climate-commitments-energy-transparency">Key Findings</a></p>
                <ul>
                    <li ><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/key-findings/climate-commitments-energy-transparency">Climate Commitments and Energy Transparency</a></li>
                    <li ><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/key-findings/renewable-energy-efficient-manufacturing">Renewable & Energy Efficient Manufacturing</a></li>
                    <li ><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/key-findings/renewable-energy-advocacy">Renewable Energy Advocacy</a></li>
                    <li ><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/key-findings/low-carbon-longer-lasting-materials">Low Carbon and Longer Lasting Materials</a></li>
                    <li ><a on:click={() => open = !open} target="_self" sveltekit:prefetch href="{base}/key-findings/greener-shipping">Greener Shipping</a></li>
                </ul>
            <p><a on:click={() => open = !open} sveltekit:prefetch href="{base}/methodology">Methodology</a></p>
            <p><a on:click={() => open = !open} rel="external" target="_new" href="https://www.stand.earth/sites/stand/files/stand-fossil-free-fashion-scorecard.pdf"><Fa icon="{faFileDownload}"/> Download PDF</a></p>
            <p><a on:click={() => open = !open} rel="external" target="_new" href="https://www.stand.earth/latest/markets-vs-climate/fossil-free-fashion/new-standearth-analysis-shows-major-fashion-brands"><Fa icon="{faRss}"/> Read Press Release</a></p>
            <p><a on:click={() => open = !open} rel="external" target="_new" href="https://www.stand.earth/markets-vs-climate/fossil-free-fashion"><Fa icon="{faGraduationCap}"/> Learn More</a></p>
            <p><a on:click={() => open = !open} rel="external" target="_new" href="https://act.stand.earth/page/26072/petition/1?ea.tracking.id=referrals"><button>Take Action</button></a></p>
        </div>
        
    </nav>
</aside>

<style>
	aside {
		right: -100%;
        display:none;
        position:absolute;
        background:#fff;
		color:var(--primary-color);
		width:100%;
		max-width:500px;
        min-width:200px;
		padding:40px;
		box-shadow:0px 0px 10px #333;
		transition: right 0.3s ease-in;
        z-index:18;
        overflow: hidden;
	}

    aside a {
        color:var(--primary-color);
    }
	
	.open {
		top:0;
        right: 0;
        display:block;
	}

    a:hover {
        text-decoration:underline;
        color:var(--primary-color);
    }

    button {
        background:#305E80;
        color:var(--white);
        padding-left:20px;
        padding-right:20px;
    }

    button:hover {
        background:var(--primary-color);
    }

    ul {
        list-style:none;
    }

    ul li:before {
        content: "";
        border-color: transparent var(--primary-color);
        border-style: solid;
        border-width: 0.35em 0 0.35em 0.45em;
        display: block;
        height: 0;
        width: 0;
        left: -1em;
        top: 1em;
        position: relative;
    }
</style>