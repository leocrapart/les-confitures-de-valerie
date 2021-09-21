<script>
  import ProductCard from "$lib/ProductCard.svelte";
  export let products;
</script>

<div class="flex flex-wrap ">
  {#each products as p}
    <ProductCard
      name={p.shortName}
      url={p.url}
      img_url={p.imgUrl}
      price={p.price}
    />
  {/each}
</div>
