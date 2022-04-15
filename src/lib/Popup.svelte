<script>
	import Grade from '../lib/Grade.svelte';
	import Modal from 'sveltestrap/src/Modal.svelte';
	import ModalBody from 'sveltestrap/src/ModalBody.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
	import Container from 'sveltestrap/src/Container.svelte';
	import Row from 'sveltestrap/src/Row.svelte';

	export let open = false;
	const toggle = () => (open = !open);
	export let name;
	export let path;
	export let grade;
	export let summary;
	import social from '../data/social.json';
	let socialContent;

	function processSocialClick(channel) {
		social.forEach(function (d) {
			if (d.Brand == name) {
				socialContent = d;
			}
		});

		var twitterShare = {
			message: encodeURIComponent(socialContent.Tweet + ' https://fashion.stand.earth/' + path)
		};

		var emailShare = {
			subject: encodeURI(name + ' scored ' + grade + ' in our fossil-free fashion scorecard'),
			message:
				encodeURI(socialContent.Email) + '%0A%0A' + encodeURI('https://fashion.stand.earth/' + path)
		};
		var facebookShare = {
			url:
				encodeURIComponent('https://fashion.stand.earth/' + path) +
				'%26en_chan%3Dfb%26ea.tracking.id%3Dfb-share'
		};
		if (channel == 'Facebook') {
			return facebookShare.url;
		} else if (channel == 'Twitter') {
			return twitterShare.message;
		} else if (channel == 'Email') {
			return emailShare;
		}
	}
</script>

<div class="overlay">
	<Modal isOpen={open} size="lg">
		<ModalBody header>
			<button class:open on:click={() => (open = !open)}>
				<Fa on:click={toggle} icon={faTimes} />
			</button>
			<Container>
				<Row>
					<div class="rower">
						<div class="grade">
							<Grade gradeDetail={grade} gradeType="overall" grade={grade.charAt(0)} />
						</div>
						<div class="logo">
							<img alt={name} src="/assets/images/logos/{path}.png" />
						</div>
						<div class="name">
							<h1>{name}</h1>
						</div>
					</div>
				</Row>
				<Row>
					<div class="summary-content">
						<div class="summary">
							<p>{@html summary}</p>
						</div>
					</div>
					<div class="actions">
						<a href="/{path}" on:click={toggle}
							>View full summary <Fa icon={faArrowRight} size="1x" /></a
						>
						<a
							rel="external"
							target="_new"
							href="https://www.facebook.com/sharer.php?u={processSocialClick('Facebook')}"
							><Fa icon={faFacebook} color="#2C72F6" size="2x" /></a
						>
						<a
							rel="external"
							target="_new"
							href="https://twitter.com/intent/tweet?text={processSocialClick('Twitter')}"
							><Fa icon={faTwitter} color="#1DA1F2" size="2x" /></a
						>
						<a
							rel="external"
							target="_new"
							href="mailto:?subject={processSocialClick('Email').subject}&body={processSocialClick(
								'Email'
							).message}"><Fa icon={faEnvelope} color="#2F5E80" size="2x" /></a
						>
					</div>
				</Row>
			</Container>
		</ModalBody>
	</Modal>
</div>

<style>
	.summary-content {
		max-width: 1200px;
		margin: auto;
		background: var(--white);
		border-radius: 6px;
		min-height: 300px;
		padding: 30px;
	}

	button {
		float: right;
		position: absolute;
		top: 0px;
		right: 10px;
		color: var(--heading-blue);
		font-size: 30px;
	}

	.rower {
		display: flex;
		width: 100%;
		padding-left: 30px;
		padding-right: 30px;
	}

	.grade {
		margin-top: -16px;
	}

	.name {
		margin-top: 20px;
		margin-left: 20px;
		font-weight: bold;
	}

	.name h1 {
		color: var(--primary-color);
		font-size: 37px;
		padding-top: 7px;
	}

	.logo {
		max-width: 150px;
		padding-left: 10px;
		padding-right: 10px;
		margin-top: 25px;
	}

	.summary {
		width: 100%;
		max-width: 830px;
		min-width: 200px;
		display: inline;
		padding-top: 40px;
		padding-bottom: 40px;
		font-size: 20px;
		font-family: var(-sans);
		color: rgb(47, 94, 128);
		font-weight: lighter;
	}

	.actions {
		padding-left: 30px;
		padding-bottom: 30px;
	}

	.actions a {
		color: var(--dark-red);
		text-decoration: underline;
		padding-right: 20px;
		font-size: 18px;
		font-weight: lighter;
	}

	.actions a:first-child {
		padding-right: 100px;
	}
</style>
