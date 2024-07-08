<script>
	import { Button } from 'flowbite-svelte';
	import { setCookie } from '../../cookies';

	let privileged = false;


	const handlePrivileged = () => {
		privileged = !privileged;
		setCookie('privileged', privileged, 30);
	};

	export { privileged };
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>
	<p>
		This website is a specific ecommerce for electronic equipment. It is based on general commerce
		pages. Images with copyright were used to generate greater aesthetics and because it will not be
		for a commercial view but for testing.
	</p>
	<p class="bold">
		Market prices were used but not exact and some references were changed to respect the brand.
	</p>
	<h1>PRIVILEGED USER</h1>
	<p>If you are a privileged user please press this button to delete or edit the information</p>
	<Button color="light" class="dark:text-white" on:click={handlePrivileged}>PRIVILEGED USER</Button>
</div>

<style>
	.bold {
		font-weight: bold;
	}

	.text-column {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
</style>
