<script>
	import brands from '../data/sheet.json';
	import Grade from '../lib/Grade.svelte';
	import { base } from '$app/paths';
	import Popup from '../lib/Popup.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import Spinner from 'sveltestrap/src/Spinner.svelte';
	import Container from 'sveltestrap/src/Container.svelte';
	import Row from 'sveltestrap/src/Row.svelte';
	import Col from 'sveltestrap/src/Col.svelte';

	let open = false;
	let loading = true;
	let content = {
		name: 'Adidas',
		path: 'adidas',
		grade: 'A-',
		summary: 'This is the summary'
	};

	function pickGrade(brand) {
		if (sort == 'bic1') {
			return brand.commitments_grade;
		} else if (sort == 'bic2') {
			return brand.renewable_grade;
		} else if (sort == 'bic3') {
			return brand.materials_grade;
		} else if (sort == 'bic4') {
			return brand.shipping_grade;
		} else if (sort == 'bic5') {
			return brand.advocacy_grade;
		} else {
			sortTitle = null;
			return brand.grade;
		}
	}

	export let filter = 'all';
	export let sort = 'abc';
	export let mode = 'full';
	let search;
	let filteredData = brands;
	let sortedData = filteredData;
	let sortTitle;
	console.log(filter);
	function filterGrid() {
		if (search) {
			filteredData = brands.filter(function (i, n) {
				for (var key in filter) {
					if (
						i.brand.toLowerCase().includes(search.toLowerCase()) ||
						i.main_brands.toLowerCase().includes(search.toLowerCase())
					)
						return true;
				}
				return false;
			});
		} else if (filter == 'all') {
			filteredData = brands;
		} else {
			filteredData = brands.filter(function (i, n) {
				return i.category.indexOf(filter) > -1;
			});
		}
		//sorting
		if (sort == 'abc') {
			sortedData = filteredData.sort(function (a, b) {
				return a.brand.localeCompare(b.brand);
			});
		} else if (sort == 'bic1') {
			sortTitle = 'Best in category: Climate Commitments and Energy Transparency';
			sortedData = filteredData.sort(function (a, b) {
				const order = { '+': -1, '-': 1, undefined: 0 };
				return (
					a.commitments_grade[0].localeCompare(b.commitments_grade[0]) ||
					order[a.commitments_grade[1]] - order[b.commitments_grade[1]] ||
					a.brand.localeCompare(b.brand)
				);
			});
		} else if (sort == 'bic2') {
			sortTitle = 'Best in category: Renewables & Energy Efficient Manufacturing';
			sortedData = filteredData.sort(function (a, b) {
				const order = { '+': -1, '-': 1, undefined: 0 };
				return (
					a.renewable_grade[0].localeCompare(b.renewable_grade[0]) ||
					order[a.renewable_grade[1]] - order[b.renewable_grade[1]] ||
					a.brand.localeCompare(b.brand)
				);
			});
		} else if (sort == 'bic3') {
			sortTitle = 'Best in category: Low Carbon Materials';
			sortedData = filteredData.sort(function (a, b) {
				const order = { '+': -1, '-': 1, undefined: 0 };
				return (
					a.materials_grade[0].localeCompare(b.materials_grade[0]) ||
					order[a.materials_grade[1]] - order[b.materials_grade[1]] ||
					a.brand.localeCompare(b.brand)
				);
			});
		} else if (sort == 'bic4') {
			sortTitle = 'Best in category: Greener Shipping';
			sortedData = filteredData.sort(function (a, b) {
				const order = { '+': -1, '-': 1, undefined: 0 };
				return (
					a.shipping_grade[0].localeCompare(b.shipping_grade[0]) ||
					order[a.shipping_grade[1]] - order[b.shipping_grade[1]] ||
					a.brand.localeCompare(b.brand)
				);
			});
		} else if (sort == 'bic5') {
			sortTitle = 'Best in category: Renewable Energy Advocacy';
			sortedData = filteredData.sort(function (a, b) {
				const order = { '+': -1, '-': 1, undefined: 0 };
				return (
					a.advocacy_grade[0].localeCompare(b.advocacy_grade[0]) ||
					order[a.advocacy_grade[1]] - order[b.advocacy_grade[1]] ||
					a.brand.localeCompare(b.brand)
				);
			});
		} else {
			sortedData = filteredData.sort(function (a, b) {
				const order = { '+': -1, '-': 1, undefined: 0 };
				return (
					a.grade[0].localeCompare(b.grade[0]) ||
					order[a.grade[1]] - order[b.grade[1]] ||
					a.brand.localeCompare(b.brand)
				);
			});
		}
	}
	onMount(() => {
		setTimeout(function () {
			loading = false;
		}, 200);
		filterGrid();
	});
</script>

<Popup bind:open {...content} />

{#if loading}
	<div id="spinner">
		<Spinner color="primary" />
	</div>
{:else}
	<Container>
		{#if mode == 'full'}
			<Row>
				<Col sm="12" lg={{ size: 3, offset: 1 }}>
					<div class="control">
						<label for="cat">Filter by category:</label>

						<!-- svelte-ignore a11y-no-onchange -->
						<select bind:value={filter} on:change={() => filterGrid()} name="cat" id="category">
							<option value="all">All</option>
							<option value="athletic">Athletic</option>
							<option value="outdoor">Outdoor</option>
							<option value="luxury">Luxury</option>
							<option value="fast">Fast fashion</option>
							<option value="shoes">Shoes</option>
							<option value="casual">Casual wear</option>
						</select>
					</div>
				</Col>
				<Col sm="12" lg={{ size: 4 }}>
					<div class="control">
						<label for="sort">Sort brand scores by:</label>

						<!-- svelte-ignore a11y-no-onchange -->
						<select bind:value={sort} on:change={() => filterGrid()} name="sort" id="order">
							<option value="abc">Alphabetically</option>
							<option value="btow">Best to worst overall</option>
							<option value="bic1"
								>Best in category: Climate commitments and energy transparency</option
							>
							<option value="bic2">Best in category: Renewable energy</option>
							<option value="bic3">Best in category: Low carbon materials</option>
							<option value="bic4">Best in category: Greeer shipping</option>
							<option value="bic5">Best in category: Advocacy</option>
						</select>
					</div>
				</Col>
				<Col sm="12" lg={{ size: 3 }}>
					<div class="control">
						<label for="search">Search for a brand:</label>

						<!-- svelte-ignore a11y-no-onchange -->
						<input
							type="text"
							bind:value={search}
							on:keyup={() => filterGrid()}
							name="search"
							id="order"
						/>
					</div>
				</Col>
			</Row>
		{/if}
		<Row>
			<Col sm="12">
				{#if sortTitle}
					<h4>{sortTitle}</h4>
				{/if}
				<div class="brand-scores">
					{#each sortedData as brand}
						<!-- svelte-ignore a11y-missing-attribute -->
						<a
							sveltekit:prefetch
							on:click={() =>
								(content = {
									name: brand.brand,
									path: brand.path,
									grade: brand.grade,
									summary: brand.summary
								})}
							on:click={() => (open = !open)}
						>
							<div class="score-box" transition:fade>
								<p>
									<img
										alt={brand.brand}
										transition:fade
										src="{base}/assets/images/logos/{brand.path}.png"
									/>
								</p>
								<div class="score-box-grade" transition:fade>
									<Grade
										on:change={() => pickGrade(brand)}
										gradeDetail={pickGrade(brand)}
										gradeType="grid"
										grade={pickGrade(brand).charAt(0)}
									/>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</Col>
		</Row>
	</Container>
{/if}

<style>
	.brand-scores {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		text-align: center;
	}

	.score-box {
		min-width: 133px;
		min-height: 133px;
		text-align: center;
		border: 1px solid #cccccc;
		border-radius: 6px;
		margin-right: 20px;
		margin-bottom: 20px;
	}

	.score-box:hover {
		border: 1px solid #2f5e80;
	}
	.score-box p {
		min-height: 35%;
	}

	.brand-scores a {
		text-decoration: none;
		cursor: pointer;
	}

	.score-box img {
		max-height: 50px;
		height: auto;
	}

	.control select,
	.control input {
		width: 100%;
		margin-bottom: 30px;
	}

	#spinner {
		width: 100%;
		height: 200px;
		margin-top: 10%;
		text-align: center;
	}
</style>
