<script>
  import Dropdown from "./Dropdown.svelte";
  import { fade } from "svelte/transition";
  let dropdownActivated = false;
</script>

<div
  class="flex flex-col justify-center text-center py-4 md:grid md:grid-cols-2 bg-red-500 px-2 text-gray-50"
>
  <!-- Title -->
  <a href="/" class="py-4">
    <div class="font-semibold text-2xl">Les confitures de Valérie</div>
  </a>

  <!-- dropdown button -->
  <div on:click={() => (dropdownActivated = !dropdownActivated)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 hover:cursor-pointer hover:bg-gray-500 rounded"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
  {#if dropdownActivated}
    <div transition:fade>
      <Dropdown />
    </div>
  {/if}
</div>
