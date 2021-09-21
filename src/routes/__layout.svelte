<script>
  import "../styles/tailwind-output.css";
</script>

<!-- navbar here -->

<div class="grid grid-cols-2 bg-red-500 py-4  px-8 text-gray-50">
  <a href="/">
    <div class="font-semibold text-2xl">Les confitures de Valérie</div>
  </a>
  <div class="flex justify-end items-center space-x-12 font-semibold">
    <a href="/">
      <div>Produits</div>
    </a>

    <div>Contact</div>
    <div>Panier</div>
  </div>
</div>

<slot />
