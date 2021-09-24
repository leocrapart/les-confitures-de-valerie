<script>
  import JamIcon2 from "./JamIcon2.svelte";

  import JamIcon from "./JamIcon.svelte";

  import CartIcon from "./CartIcon.svelte";

  import InfoIcon from "./InfoIcon.svelte";

  import LolipopIcon from "./LolipopIcon.svelte";

  import DropdownItem from "./DropdownItem.svelte";
</script>

<div class="flex flex-col space-y-1 text-left ">
  <div class="pt-2" />
  <DropdownItem text="Confitures" href="/">
    <JamIcon2 />
  </DropdownItem>

  <DropdownItem text="Sucreries" href="/sucreries">
    <LolipopIcon />
  </DropdownItem>
  <DropdownItem text="Contact" href="/contact">
    <InfoIcon />
  </DropdownItem>
  <DropdownItem text="Panier" href="/panier">
    <CartIcon />
  </DropdownItem>
</div>
