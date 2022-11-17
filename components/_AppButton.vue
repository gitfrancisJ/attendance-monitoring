<template>
  <div>
   <button class="w-full bg-teal-500 text-sm p-2 text-white rounded disabled:bg-gray-300" :disabled="btn.btnStatus" >
    {{btn.label}}
   </button>
  </div>
</template>
<script>
export default {
    props: {
        btn: {
        type: Object,
        default: () => {},
        }
    }
}
</script>