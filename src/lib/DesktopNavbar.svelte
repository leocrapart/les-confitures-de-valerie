<script>
  import NavItem from "./NavItem.svelte";

  import CartIcon from "./CartIcon.svelte";
  import InfoIcon from "./InfoIcon.svelte";
  import JamIcon2 from "./JamIcon2.svelte";
  import LolipopIcon from "./LolipopIcon.svelte";
  import JamIcon from "./JamIcon.svelte";
</script>

<div class="grid grid-cols-2 bg-red-500 py-4 px-8 text-gray-50">
  <a href="/">
    <div class="font-semibold text-2xl">Les confitures de Valérie</div>
  </a>
  <div class="flex justify-end items-center space-x-4 font-semibold">
    <!-- Confitures -->
    <NavItem href="/" text="Confitures">
      <JamIcon2 />
    </NavItem>

    <!-- Sucreries -->
    <NavItem href="/sucreries" text="Sucreries">
      <LolipopIcon />
    </NavItem>

    <!-- Contact -->
    <NavItem href="/contact" text="Contact">
      <InfoIcon />
    </NavItem>

    <!-- Panier -->
    <NavItem href="/panier" text="Panier">
      <CartIcon />
    </NavItem>
  </div>
</div>
