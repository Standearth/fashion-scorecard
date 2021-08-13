<script>
    import copy from "../data/summary.json";
    import brands from "../data/sheet.json";
    import Grade from "../lib/Grade.svelte";
    import { page } from '$app/stores';
    import {
        Modal,
        ModalBody
    } from 'sveltestrap';
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
	import { faArrowRight,faTimes } from '@fortawesome/free-solid-svg-icons'
    import { Col, Container, Row } from 'sveltestrap';
    export let open = false;
    const toggle = () => (open = !open);
    export let name;
    export let path;
    export let grade;
    export let summary;
</script>

<div class="overlay">
    <Modal isOpen={open} size="lg">
        <ModalBody header>
            <button class:open on:click={() => open = !open}>
                <Fa on:click={toggle} icon={faTimes} />
            </button>
            <Container>
                <Row>
                    <div class="rower">
                        <div class="grade">
                            <Grade gradeDetail={grade} gradeType='overall' grade={grade.charAt(0)} />
                        </div>
                        <div class="logo">
                            <img alt="{name}" src="assets/images/logos/{path}.png">
                        </div>
                        <div class="name">
                            <h1>{name}</h1>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="summary-content">
                        <div class="summary">
                            {@html summary}
                        </div>
                    </div>
                    <div class="actions">
                        <a href="/{path}" on:click={toggle}>View full summary <Fa icon="{faArrowRight}" size="1x"/></a>
                        <a href="#facebook"><Fa icon="{faFacebook}" color="#2C72F6" size="2x"/></a>
                        <a href="#twitter"><Fa icon="{faTwitter}" color="#1DA1F2" size="2x" /></a>
                        <a href="#email"><Fa icon="{faEnvelope}" color="#2F5E80" size="2x"/></a>
                    </div>
                </Row>
            </Container>
        </ModalBody>
    </Modal>
</div>


<style>
    
    .summary-content {
		max-width:1200px;
		margin:auto;
		background:var(--white);
		border-radius: 6px;
		min-height:300px;
        padding:30px;
	}

    button {
        float:right;
        position:absolute;
        top:0px;
        right:10px;
        color:var(--heading-blue);
        font-size:30px;
    }

    .rower {
        display:flex;
        width:100%;
        padding-left:30px;
        padding-right:30px;
    }

	.grade {
		margin-top:-16px;
		
	}

	.name {
        margin-top:20px;
        margin-left:20px;
		font-weight:bold;
		
	}

	.name h1 {
		color:var(--primary-color);
		font-size:37px;
	}

	.logo {
		max-width:150px;
		padding-left:10px;
		padding-right:10px;
		margin-top:25px;
	}

	.summary {
		width:100%;
		max-width:830px;
		min-width:200px;
		display:inline;
		padding-top:40px;
		padding-bottom:40px;
		font-size:20px;
		font-family:var(-sans);
		color:rgb(47,94,128);
		font-weight:lighter;
	}

    .actions {
        padding-left:30px;
        padding-bottom:30px;
    }

    .actions a {
        color:var(--dark-red);
        text-decoration:underline;
        padding-right:20px;
        font-size:18px;
        font-weight:lighter;
    }

    .actions a:first-child {
        padding-right:100px;
    }
</style>
