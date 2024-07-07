<script>
	import { Carousel } from 'flowbite-svelte';
	import "../app.css";
  
	const images = [
	  {
		alt: '1',
		src: "https://static.vecteezy.com/system/resources/previews/004/299/806/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
		title: "Image 1"
	  },
	  {
		alt: '2',
		src: "https://static.vecteezy.com/system/resources/previews/002/006/605/original/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg",
		title: "Image 2"
	  }
	];
  </script>
  
  <div class="Carrousel">
	<Carousel {images} duration={3000} />
  </div>
  

<style>

</style>
