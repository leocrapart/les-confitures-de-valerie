<script context="module">
  export function load(ctx) {
    const id = ctx.page.params.product_id;
    console.log("id =>", id);
    return { props: { product_id: id } };
  }
</script>

<script>
  import CheckIcon from "../lib/CheckIcon.svelte";

  import { data } from "../data";

  export let product_id;

  let products = $data.products;
  let product = products.filter((product) => product.url == product_id)[0];
</script>

<svelte:head>
  <title>{product.shortName}</title>
</svelte:head>

<div class=" px-5 py-5 md:py-20 xl:px-20">
  <div
    class="flex flex-col
              md:flex-row"
  >
    <!-- image -->
    <div
      class="w-full
            sm:w-80
            md:w-80 lg:w-80 xl:w-1/3 "
    >
      <img src={product.imgUrl} alt="" class="rounded " />
    </div>
    <!-- a droite -->
    <div class="flex flex-col md:px-10 md:space-y-5 pt-5">
      <div class="font-bold text-xl whitespace-nowrap">{product.fullName}</div>
      <div
        class="mb-5 font-semibold text-lg 
               md:mb-0"
      >
        {product.price} TTC
      </div>
      <!-- ajouter au panier -->
      <div class="inline-flex">
        <div
          class=" px-4 py-2 font-semibold rounded bg-gray-200 hover:cursor-pointer
                  hover:bg-gray-300 "
        >
          Ajouter au panier
        </div>
      </div>

      <!-- description -->
      <div>
        <br />
        <!-- idee v faite maison -->
        <div class="flex py-1"><CheckIcon /> Artisanale</div>
        <div class="flex py-1"><CheckIcon /> Faite maison</div>
        <div class="flex py-1"><CheckIcon /> Cuite en bassine de cuivre</div>
        <div class="flex py-1">
          <CheckIcon />
          {product.fruits} direct producteur
        </div>
        <div class="flex py-1">
          <CheckIcon />
          {product.fruits} du Lot et Garonne
        </div>
        <div>
          <!-- idee camembert  -->
          <br />
          <div>350g</div>
          <div>60% de fruits frais direct producteur</div>
          <div>40% de sucre, jus de citron, extrait d'arôme de vanille</div>
          <br />
        </div>
      </div>
    </div>
  </div>

  <!-- description -->
</div>
