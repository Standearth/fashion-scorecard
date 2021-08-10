<script context="module">
	import data from '../../data/sheet.json';
	let res = "blue";
	function loadData (slug) {
		console.log(slug);
		data.forEach(function(d) {
			console.log(d);
			if (d.path == slug) {
			  res = d;
			  return res;
		  }
		})
	}
	
	export async function load({ page, fetch }) {
	  const slug = page.params.finding;
	  //const url = `http://localhost:3000/src/data/${slug}.json`;
	  
		loadData(`${slug}`)
		return {
					props: {
						content: res
					}
				}
	}
  </script>

<script>
	import Grade from '../../lib/Grade.svelte'
	import { Col, Container, Row, Accordion, AccordionHeader, AccordionItem, Icon } from 'sveltestrap';
	import Grid from '../../lib/Grid.svelte'
	import Fa from 'svelte-fa/src/fa.svelte'
	import Header from '../../lib/Header.svelte'
	import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
	export let content;
	console.log(content);
</script>

<Header headerColor="blue"/>

<div class="banner">
	<span>Fossil-free Fashion Scorecard</span>
	{content.brand}
</div>
<style>

</style>

