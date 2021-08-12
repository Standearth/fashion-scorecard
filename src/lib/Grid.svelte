<script>
     import brands from "../data/sheet.json"
     import Grade from "../lib/Grade.svelte"
     import Popup from "../lib/Popup.svelte"
     import {fade} from 'svelte/transition'
     import { Col, Container, Row } from 'sveltestrap';
    import { page } from '$app/stores';
    let open = false;
    let content = {
        name: 'Adidas',
        path: 'adidas',
        grade: 'A-',
        summary: 'This is the summary'
    };

    export let filter = 'all';
    let sort = 'abc';
    export let mode = 'full';
    let filteredData = brands;
    let sortedData = filteredData;
    console.log(filter);
    function filterGrid () {

        //filtering
        if (filter == 'all') {
            filteredData = brands;
        } else {
            filteredData = brands.filter(function (i,n) {
                return i.category.indexOf(filter) > -1;
            });
        }

        //sorting 
        if (sort == 'abc') {
            sortedData = filteredData.sort(function(a,b) {
                return a.brand.localeCompare(b.brand);
            })
        } else {
            sortedData = filteredData.sort(function(a,b) {
                return a.grade.localeCompare(b.grade);
            })
        }
    }
    filterGrid();
    
</script>

<Popup bind:open {...content} />


<Container>
    {#if mode == 'full'}
        <Row>
            <Col sm=12 lg={{size:3,offset:3}}>
                <div class="control">
                        <label for="cat">Filter by category:</label>

                        <!-- svelte-ignore a11y-no-onchange -->
                        <select bind:value={filter} on:change="{() => filterGrid()}" name="cat" id="category">
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
            <Col sm=12 lg={{size:3}}>
                <div class="control">
                        <label for="sort">Sort brand grades by:</label>

                        <!-- svelte-ignore a11y-no-onchange -->
                        <select bind:value={sort} on:change="{() => filterGrid()}" name="sort" id="order">
                            <option value="abc">Alphabetically</option>
                            <option value="btow">Best to worst</option>
                            <option value="bic1">Best in category: Climate commitments and energy transparency</option>
                            <option value="bic2">Best in category: Renewable energy</option>
                            <option value="bic3">Best in category: Low carbon materials</option>
                            <option value="bic4">Best in category: Greeer shipping</option>
                            <option value="bic4">Best in category: Advocacy</option>
                        </select>
                </div> 
            </Col>
        </Row>
    {/if}
        <Row>
            <Col sm=12>
                <div class="brand-scores">
                {#each sortedData as brand}
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a sveltekit:prefetch on:click={() => content = {name: brand.brand, path: brand.path, grade: brand.grade, summary:brand.summary}} on:click={() => (open = !open)}>
                        <div class="score-box" transition:fade>
                            <p>
                                <img alt="{brand.brand}" transition:fade src="assets/images/logos/{brand.path}.png">
                            </p>
                            <div class="score-box-grade" transition:fade>
                                <Grade gradeDetail={brand.grade} gradeType='grid' grade={brand.grade.charAt(0)} />
                            </div>
                        </div>
                    </a>
                {/each}
                </div>
            </Col>  
        </Row>
    </Container>



<style>
    .brand-scores {
        display:flex;
        flex-flow: row wrap;
        align-items: center;
        text-align:center;
    }

    .score-box {
        width:133px;
        height:133px;
        text-align:center;
        border:1px solid #cccccc;
        border-radius:6px;
        margin-right:20px;
        margin-bottom:20px;
    }

    .score-box:hover {
        border:1px solid #2F5E80;
    }
    .score-box p {
        min-height:35%;
    }

    .brand-scores a {
        text-decoration:none;
        cursor:pointer;
    }

    .score-box img {
        max-width: 100px;
        max-height:45px;
        height:auto;

    }

    .control select {
        width:100%;
        margin-bottom:50px;
    }
</style>
