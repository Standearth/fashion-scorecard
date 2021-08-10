<script>
	import '../styles/water.css';
	import '../styles/app.css';
	import '../styles/font.css';
</script>


<main>
	<slot />
</main>

<footer>
	<p>© Stand.earth  |  Media inquiries: <a href="mailto:media@stand.earth">media@stand.earth</a> |  Design: Erika Rathje / Illustration: Cheryl Loh</p>
</footer>


<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		background:var(--primary-color);
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer p {
		color:var(--white);
	}

	footer a {
		text-decoration: underline;
		color:var(--white);
	}

	footer a:hover {
		text-decoration: underline;
		color:var(--secondary-color);
	}
</style>
