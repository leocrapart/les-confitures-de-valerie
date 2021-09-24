<script>
  export let href;
  export let text;
</script>

<a {href}>
  <div class="flex hover:bg-gray-500 rounded py-2 px-4">
    <slot />
    {text}
  </div>
</a>
