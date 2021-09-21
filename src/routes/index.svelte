<script>
  import Banner from "../lib/Banner.svelte";
  import ProductCard from "$lib/ProductCard.svelte";

  import { data } from "../data.js";
</script>

<div class="px-60 py-10">
  <Banner />
</div>

<div class="px-10 py-10">
  <div class="flex flex-wrap justify-center">
    {#each $data.products as p}
      <ProductCard
        name={p.shortName}
        url={p.url}
        img_url={p.imgUrl}
        price={p.price}
      />
    {/each}
  </div>
</div>
