<script>
  import "../styles/tailwind-output.css";
</script>

<!-- navbar here -->

<div class="grid grid-cols-2 bg-red-500 py-4  px-8 text-gray-50">
  <a href="/">
    <div class="font-semibold text-2xl">Les confitures de Valérie</div>
  </a>
  <div class="flex justify-end items-center space-x-12 font-semibold">
    <!-- Produits -->
    <a href="/" class="flex hover:text-gray-700"> Produits </a>
    <!-- Contact -->
    <a href="/contact" class="flex hover:text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Contact
    </a>
    <!-- Panier -->
    <a href="/panier" class="flex hover:text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      Panier
    </a>
  </div>
</div>

<slot />
