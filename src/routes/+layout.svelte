<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot></slot>
	</main>

	<footer>
		<p>visit <a href="https://linktic.com/">LinkTic</a> for more information</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
		color:rgb(50, 187, 255);}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
