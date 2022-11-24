<template>
  <div class="relative flex items-center flex-col justify-center h-screen gap-10">
    <AppModal v-show = 'isOnBreak'/>
    <TimeLogs />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['isOnBreak'])
    }
  }
</script>