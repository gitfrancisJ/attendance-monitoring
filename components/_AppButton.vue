<template>
  <div>
   <button class="w-full bg-teal-500 text-sm p-2 text-white rounded" :class="btn.class" @click.prevent='invokeFunc(btn.method)' >
    {{btn.label}}
   </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  props: {
    btn: {
      type: Object,
      default: () => {},
    }
  },

  methods: {
  
    ...mapActions(['checkedUser']),

    invokeFunc(methodName) {
          this[methodName]();
        }
  }
}
</script>