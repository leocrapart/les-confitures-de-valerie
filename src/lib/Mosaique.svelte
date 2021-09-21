<script>
  import ProductsRow from "./ProductsRow.svelte";

  import Banner from "../lib/Banner.svelte";
  import ProductCard from "$lib/ProductCard.svelte";

  import { data } from "../data.js";

  export let title;
</script>

<div>
  <div class="font-semibold text-2xl rounded bg-gray-200 px-4 py-2 inline-flex">
    {title}
  </div>
</div>
<slot />
