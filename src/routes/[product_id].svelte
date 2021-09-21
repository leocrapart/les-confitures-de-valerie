<script context="module">
  export function load(ctx) {
    const id = ctx.page.params.product_id;
    console.log("id =>", id);
    return { props: { product_id: id } };
  }
</script>

<script>
  import { data } from "../data";

  export let product_id;

  let products = $data.products;
  let product = products.filter((product) => product.url == product_id)[0];
</script>

<svelte:head>
  <title>{product.shortName}</title>
</svelte:head>

<div class="py-20 px-20">
  <div class="flex">
    <!-- image -->
    <div class="w-1/3 ">
      <img src={product.imgUrl} alt="" class="rounded " />
    </div>
    <!-- a droite -->
    <div class="flex flex-col px-10 space-y-5">
      <div class="font-bold text-xl">{product.fullName}</div>
      <div class="font-semibold text-lg">{product.price} TTC</div>
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
        <div>v Artisanale</div>
        <div>v Faite maison</div>
        <div>v cuite en bassine de cuivre</div>
        <div>v {product.fruits} direct producteur</div>
        <div>v {product.fruits} du Lot et Garonne</div>
        <div>
          <!-- idee camembert  -->
          <br />
          <div>60% de fruits frais direct producteur</div>
          <div>40% de sucre, jus de citron, extrait d'arôme de vanille</div>
          <br />
          <div>350g</div>
        </div>
      </div>
    </div>
  </div>

  <!-- description -->
</div>
