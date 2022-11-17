<template>
  <div class="w-1/2 h-1/2 border-2 border-teal-500 flex items-center justify-center shadow-xl">
    <form>
      <div class="flex justify-center">
        <div class="mb-3 lg:w-96 flex flex-col justify-center gap-4 ">
          <AppButton v-show = "!userCheckedIn" v-for="data in userCheckedAction" :key="data.id" :btn="data" />
          <AppButton v-show = "userCheckedIn" v-for="data in userActions" :key="data.id" :btn="data" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {

      userCheckedIn: false,

      userCheckedAction: [
        {
          id: 0,
          value: 'check-in',
          label: 'Check-In',
          method: "checkedUser"
        },
        
      ],

      userActions : [
        {
          id: 1,
          value: 'morning-break',
          label: 'Morning Break',
        },
        {
          id: 2,
          value: 'lunch-break',
          label: 'Lunch Break',
        },
        {
          id: 3,
          value: 'afternoon-break',
          label: 'Afternoon Break',
        },
        {
          id: 4,
          value: 'check-out',
          label: 'Check-Out',
        },
      ]
    }
  },
}
</script>