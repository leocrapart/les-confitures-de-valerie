<script>
  export let text;
  export let href;
</script>

<a {href}>
  <div class="flex hover:cursor-pointer hover:bg-gray-500 px-4 py-2 rounded">
    <slot />
    <div>{text}</div>
  </div>
</a>
