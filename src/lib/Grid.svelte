<script>
     import brands from "../data/sheet.json"
     import Grade from "../lib/Grade.svelte"
     import Popup from "../lib/Popup.svelte"
    import { page } from '$app/stores';
    let open = false;
    let content = {
        name: 'Adidas',
        path: 'adidas',
        grade: 'A-',
        summary: 'This is the summary'
    };
    
</script>

<Popup bind:open {...content} />

<div>
    <div class="brand-scores">
    {#each brands as brand}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a sveltekit:prefetch on:click={() => content = {name: brand.brand, path: brand.path, grade: brand.grade, summary:brand.summary}} on:click={() => (open = !open)}>
            <div class="score-box">
                <p>
                    <img alt="{brand.brand}" src="assets/images/logos/{brand.path}.png">
                </p>
                <div class="score-box-grade">
                    <Grade gradeDetail={brand.grade} gradeType='grid' grade={brand.grade.charAt(0)} />
                </div>
            </div>
        </a>
    {/each}
    </div>
</div>

<style>
    .brand-scores {
        display:flex;
        flex-flow: row wrap;
        align-items: center;
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
</style>
