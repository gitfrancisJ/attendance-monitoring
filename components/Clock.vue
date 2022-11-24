<template>
    <div class="flex flex-row gap-2 text-white">
      <h1>{{ currentDay }} -</h1>
      <h1>{{ currentMonth }}</h1>
      <h1>{{ currentDate }},</h1>
      <h1>{{ currentYear }} -</h1>
      <h1>{{ currentTime }}</h1>
    </div>
  </template>
<script>
export default {

  created() {
    setInterval(()=>{
      this.getTime(); 
    },1000)
  },


  data() {
    return {
      currentTime: '',
      currentDay: '',
      currentDate: '',
      currentMonth: '',
      currentYear: '',
    }
  },

  methods: {
    
    getTime() {
        const dayToday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const monthToday = ['JAN','FEB', 'MARCH', 'APRIL', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const today = new Date();
        const time = (today.getHours() < 10 ? '0' : '') + today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();
        const day = today.getDay();
        const thisMonth = today.getMonth();
        this.currentMonth = monthToday[thisMonth];
        this.currentDate = today.getDate();
        this.currentDay = dayToday[day];
        this.currentTime = time;
        this.currentYear = today.getFullYear();
      }
  }
}
  </script>