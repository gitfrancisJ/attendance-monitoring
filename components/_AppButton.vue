<template>
  <div>
   <button class="w-full bg-teal-500 text-sm p-2 text-white rounded" @click.prevent='onClick(btn.method)' >
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

  data() {
    return {
      userCheckedIn: false,
    }
  },

  methods: {

    ...mapActions(['checkedUser']),

    onClick(methodName) {
          this[methodName]();
        }
  }
}
</script>