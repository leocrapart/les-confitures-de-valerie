<script>
  export let name = "Fraise";
  export let img_url = "/cerise.jpeg";
  export let price = "5,90€";
  export let url = "/fraise";
</script>

<a href={url} class="w-52 mx-4 my-4">
  <div class="flex flex-col ">
    <div class="flex items-end h-52">
      <img class=" rounded-t" src={img_url} alt={"confiture de " + name} />
    </div>

    <div class="flex justify-between bg-gray-200 rounded-b px-4 py-3 ">
      <div>{name}</div>
      <div class="font-semibold">{price}</div>
    </div>
  </div>
</a>
