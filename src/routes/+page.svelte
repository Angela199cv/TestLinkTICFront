<script>
	import { onMount } from 'svelte';
	import { Carousel, Card, Button, Input } from 'flowbite-svelte';
	import { deleteRecord, getResource, getResources } from '../fetch/fetchMethods';
	import { getCookie } from '../cookies';

	let hCard = false;
	/**
	 * @type {string | any[]}
	 */
	let products = [];
	let info = '';
	let item = null;
	const globalState = getCookie('privileged');

	const images = [
		{
			alt: '1',
			src: 'https://static.vecteezy.com/system/resources/previews/004/299/806/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg',
			title: 'Image 1'
		},
		{
			alt: '2',
			src: 'https://static.vecteezy.com/system/resources/previews/002/006/605/original/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg',
			title: 'Image 2'
		}
	];

	async function fetchProducts() {
		try {
			products = await getResources('http://localhost:4000/v1/products');
		} catch (error) {
			console.error('Error al obtener productos:', error);
		}
	}

	/**
	 * @param {string} id
	 */
	async function searchItem(id) {
		try {
			item = await getResource(`http://localhost:4000/v1/products`, id);
			console.log(item);
		} catch (error) {
			console.error('Error al buscar el producto:', error);
			item = null;
		}
	}

	/**
	 * @param {any} id
	 */
	async function deleteItem(id) {
		try {
			const res = await deleteRecord('http://localhost:4000/v1/products', id);
			await fetchProducts();
			item = null;
		} catch (error) {
			console.error('Error al eliminar el producto:', error);
		}
	}

	$: {
		if (!info) {
			item = null;
			fetchProducts();
		}
	}

	function handleInputChange(event) {
		info = event.target.value;
	}
</script>

<div>
	<div class="Carrousel">
		<Carousel {images} duration={3000} />
	</div>
	<div class="column-center mb-2">
		<Input
			id="default-input"
			placeholder="Busqueda por Identificador"
			bind:value={info}
			on:input={handleInputChange}
		/>
		<Button color="light" class="dark:text-white" on:click={() => searchItem(info)}>Buscar</Button>
	</div>
	{#if products.length > 0 && !item}
		<div class="space-y-4">
			{#each products as product}
				<div class="column-center">
					<Card img={product.image_url} href="/" horizontal size="md" reverse={hCard}>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{product.name}
						</h5>
						<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
							{product.description}
						</p>
						<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
							Price: ${product.price}
						</p>
						{#if !globalState}
							<Button color="light" class="dark:text-white">Comprar</Button>
						{:else}
							<Button color="red" on:click={() => deleteItem(product.id)}>Eliminar</Button>
							<Button color="light" class="dark:text-white">Actualizar</Button>
						{/if}
					</Card>
				</div>
			{/each}
		</div>
	{:else if item}
		{#if item.length > 0}
			<div class="column-center">
				<Card img={item[0].image_url} href="/" horizontal size="md" reverse={hCard}>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{item[0].name}
					</h5>
					<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
						{item[0].description}
					</p>
					<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
						Price: ${item[0].price}
					</p>
					{#if !globalState}
						<Button color="light" class="dark:text-white">Comprar</Button>
					{:else}
						<Button color="red" on:click={() => deleteItem(item[0].id)}>Eliminar</Button>
						<Button color="light" class="dark:text-white">Actualizar</Button>
					{/if}
				</Card>
			</div>
		{/if}
	{/if}
</div>

<style>
	.column-center {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30px;
	}
</style>
