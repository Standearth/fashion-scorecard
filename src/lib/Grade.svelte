<script>
    export let grade;
    export let gradeType;
    export let gradeDetail;
</script>

{#if gradeType == 'overall'}

<div class="grade-{grade} {gradeType}">
   <div>{gradeDetail}</div>
   <div class="arrow-down"></div>
</div>

{:else if gradeType == 'grid'}
    <div class="grade-{grade} {gradeType}">
        <div>{gradeDetail}</div>
    </div>    

{:else}

<div class="grade-{grade} {gradeType}">
    <div>{gradeDetail}</div>
 </div>

{/if}

<style>

   .overall {
        height:145px;
        width:75px;
        padding:0px;
        text-align:center;
        position:relative;
   }

   .arrow-down {
        width: 0; 
        height: 0; 
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        z-index: var(--z-top);
        border-bottom: 15px solid var(--white);
        position:absolute;
        bottom:0;
    }

   .overall div {
       font-size:54.1px;
       padding-top:40px;
       font-family:var(--sans);
   }

   .criteria {
        font-family:var(--sans);
        font-size: 32px;
        line-height:44px;
        font-weight:bold;
        color:rgb(13,13,13);
        border-radius:50%;
        text-align:center;
        width: 50px;
        height: 50px;
   }

   .criteria div {
       padding-top:2px;
   }

   .grid {
        font-family:var(--sans);
        font-size: 24px;
        line-height:30px;
        font-weight:bold;
        color:rgb(13,13,13);
        border-radius:50%;
        text-align:center;
        margin:auto;
        width: 36px;
        height: 36px;
   }

   .grid div {
       padding-top:2px;
   }

   .grade-A {
       background:rgb(44,201,17)
   }
   .grade-B {
       background:rgb(204,203,47)
   }
   .grade-C {
       background:rgb(239,194,6)
   }
   .grade-D {
       background:rgb(237,138,7)
   }
   .grade-E {
       background:rgb(237,78,7)
   }
   .grade-F {
       background:rgb(189,18,13);
       color:#fff;
   }
</style>
