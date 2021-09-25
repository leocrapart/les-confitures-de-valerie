<script>
  import MobileNavbar from "$lib/MobileNavbar.svelte";

  import DesktopNavbar from "$lib/DesktopNavbar.svelte";

  import "../styles/tailwind-output.css";

  let innerWidth;
  let mdBreakpoint = 768;
</script>

<!-- navbar here -->
<svelte:window bind:innerWidth />

<div>
  <!-- idee: dropdown qui descend en se dépliant touk touk touk -->
  {#if innerWidth >= mdBreakpoint}
    <DesktopNavbar />
  {:else}
    <MobileNavbar />
  {/if}
</div>

<slot />
