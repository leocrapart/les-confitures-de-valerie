<script>
  import Banner from "../lib/Banner.svelte";
  import ProductCard from "$lib/ProductCard.svelte";

  import { data } from "../data.js";

  const products = $data.products;
  const springProducts = products.filter((p) => p.season == "spring");
  const summerProducts = products.filter((p) => p.season == "summer");
  const autumnProducts = products.filter((p) => p.season == "autumn");
  const winterProducts = products.filter((p) => p.season == "winter");
</script>

<svelte:head>
  <title>Les confitures de Valérie</title>
</svelte:head>

<div class="px-60 py-10">
  <Banner />
</div>

<!-- grande mosaique -->
<div class="px-10 py-10 flex flex-col justify-center">
  <!-- summer mosaique -->
  <div class="font-semibold text-2xl">Les fruits de l'Eté</div>
  <div class="flex flex-wrap ">
    {#each summerProducts as p}
      <ProductCard
        name={p.shortName}
        url={p.url}
        img_url={p.imgUrl}
        price={p.price}
      />
    {/each}
  </div>
  <!-- autumn mosaique -->
  <div class="font-semibold text-2xl mt-8">Les fruits de l'Automne</div>
  <div class="flex flex-wrap ">
    {#each autumnProducts as p}
      <ProductCard
        name={p.shortName}
        url={p.url}
        img_url={p.imgUrl}
        price={p.price}
      />
    {/each}
  </div>
  <!-- winter mosaique -->
  <div class="font-semibold text-2xl mt-8">Les fruits de l'Hiver</div>
  <div class="flex flex-wrap ">
    {#each winterProducts as p}
      <ProductCard
        name={p.shortName}
        url={p.url}
        img_url={p.imgUrl}
        price={p.price}
      />
    {/each}
  </div>
  <!-- spring mosaique -->
  <div class="font-semibold text-2xl mt-8">Les fruits du Printemps</div>
  <div class="flex flex-wrap ">
    {#each springProducts as p}
      <ProductCard
        name={p.shortName}
        url={p.url}
        img_url={p.imgUrl}
        price={p.price}
      />
    {/each}
  </div>
</div>
