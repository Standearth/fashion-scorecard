<script>
    import Fa from 'svelte-fa/src/fa.svelte'
	import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
	export let open = false;
</script>

<button class:open on:click={() => open = !open}>
	<svg width=40 height=32>
		<line id="top" x1=0 y1=2  x2=32 y2=2/>
		<line id="middle" x1=0 y1=12 x2=32 y2=12/>
		<line id="bottom" x1=0 y1=22 x2=32 y2=22/>
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
	}
	
	button {
		z-index: 25;
        height: 100%;
        margin-left:20px;
        position:relative;
        border:none;
        text-align:center;
	}

    button:focus {
        box-shadow:none;
    }

    .open svg {
        color:var(--heading-blue);
    }
	
	.open svg {
		transform: scale(0.9)
	}
	
	.open #top {
		transform: translate(5px, 0px) rotate(45deg)
	}

    .open:before {
        content: "CLOSE";
        position:relative;
        left:-10px;
        top:-2px;
        color:var(--heading-blue);
    }
	
	.open #middle {
		opacity: 0;
	}
	
    .open #bottom {
            transform: translate(-12px, 8px) rotate(-45deg)
        }

    
</style>