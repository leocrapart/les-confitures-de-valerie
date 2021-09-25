<script>
  import Logo from "../lib/Logo.svelte";

  let innerWidth;
  const mdBreakpoint = 768;

  $: isDesktop = innerWidth >= mdBreakpoint;
</script>

<svelte:window bind:innerWidth />

<div class="flex justify-center space-x-4 lg:space-x-16 items-center">
  {#if isDesktop}
    <div class="font-bold italic text-3xl whitespace-nowrap">
      Les Confitures de Valérie
    </div>
  {/if}
  <div class="flex-shrink-0">
    <Logo />
  </div>

  {#if isDesktop}
    <div class="font-bold italic text-3xl whitespace-nowrap ">
      Fruitées, locales et de saison
    </div>
  {:else}
    <div class="flex flex-col pl-1">
      <div class="font-bold italic text-3xl whitespace-nowrap ">Fruitées</div>
      <div class="font-bold italic text-3xl whitespace-nowrap ">Locales</div>
      <div class="font-bold italic text-3xl whitespace-nowrap ">
        Et de saison
      </div>
    </div>
  {/if}
</div>
