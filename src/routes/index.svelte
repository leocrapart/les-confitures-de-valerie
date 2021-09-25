<script>
  import Mosaique from "$lib/Mosaique.svelte";

  import Banner from "$lib/Banner.svelte";
  import ProductCard from "$lib/ProductCard.svelte";

  import { data } from "../data.js";
  import ProductsRow from "$lib/ProductsRow.svelte";

  const products = $data.products;
  const springProducts = products.filter((p) => p.season == "spring");
  const summerProducts = products.filter((p) => p.season == "summer");
  const autumnProducts = products.filter((p) => p.season == "autumn");
  const winterProducts = products.filter((p) => p.season == "winter");

  function getProduct(id) {
    const productsResult = products.filter((p) => id == p.url);
    if (productsResult.length > 0) {
      const product = productsResult[0];
      return product;
    } else {
      return "";
    }
  }
  function getProducts(idList) {
    const productsResult = idList.map((id) => getProduct(id));
    const products = productsResult.filter((p) => p != "");
    return products;
  }
  const springProductsRow1 = getProducts([
    "fraise",
    "cerise",
    "abricot",
    "framboise",
  ]);

  const summerProductsRow1 = getProducts([
    "nectarine",
    "nectarine-blanche",
    "nectarine-abricot",
    "peche",
    "peche-abricot",
    "peche-blanche",
  ]);
  const summerProductsRow2 = getProducts([
    "mirabelle",
    "mirabelle-abricot",
    "reine-claude",
    "prune-d-ente",
    "prune-d-ente-rhum",
  ]);
  const summerProductsRow3 = getProducts([
    "figue-noire",
    "figue-blanche",
    "figue-vanille",
  ]);
  const autumnProductsRow1 = getProducts([
    "coing",
    "gelee-coing",
    "poire",
    "poire-vanille",
  ]);
  const autumnProductsRow2 = getProducts([
    "melon",
    "melon-vanille",
    "tomate-verte",
    "tomate-vanille",
  ]);
  const winterProductsRow1 = getProducts([
    "pomme-cannelle",
    "gelee-pomme",
    "kiwi",
    "kiwi-vanille",
  ]);
</script>

<svelte:head>
  <title>Les confitures de Valérie</title>
</svelte:head>

<!-- sm = a bit less than md +
   md = mid screen+
    lg = 66% +
    xl = 75% screen +
    2xl = 100%+
-->

<div class="px-2 py-5 md:p-10 xl:px-20 xl:py-10 ">
  <Banner />
</div>

<!-- grande mosaique -->
<div class="px-10 py-10 flex flex-col justify-center">
  <div class="">
    <Mosaique products={springProducts} title="Les Fruits du Printemps">
      <ProductsRow products={springProductsRow1} />
    </Mosaique>
  </div>

  <div class="mt-12">
    <Mosaique products={summerProducts} title="Les Fruits de l'Eté">
      <ProductsRow products={summerProductsRow1} />
      <ProductsRow products={summerProductsRow2} />
      <ProductsRow products={summerProductsRow3} />
    </Mosaique>
  </div>

  <div class="mt-12">
    <Mosaique products={autumnProducts} title="Les Fruits de l'Automne">
      <ProductsRow products={autumnProductsRow1} />
      <ProductsRow products={autumnProductsRow2} />
    </Mosaique>
  </div>

  <div class="mt-12">
    <Mosaique products={winterProducts} title="Les Fruits de l'Hiver">
      <ProductsRow products={winterProductsRow1} />
    </Mosaique>
  </div>
</div>
