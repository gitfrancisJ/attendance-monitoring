<template>
  <div class="w-1/2 h-1/2 bg-teal-500 flex flex-col items-center justify-center gap-20
  text-white text-2xl shadow-xl absolute translate-50 z-50 ">
      <h1 class="text-white text-4xl">Break Time</h1>
      <div class="flex items-center justify-center gap-2 text-4xl">
        <h1>{{ minutesDisplay }}</h1>
        <h1>:</h1>
        <h1>{{ secondsDisplay }}</h1>
      </div>
      <div class="flex gap-8 text-sm ">
        <button class="bg-green-500 rounded p-2 border border-white" @click="startTimer()">
          Start Break
        </button>
        <button class="bg-red-500 rounded p-2 border border-white" >
          End Break
        </button>
        <!-- <AppButton v-for="data in buttonLabel" :key="data.id" :btn="data"/> -->
      </div>
  </div>
</template>
<script>
  export default {

    data() {
      return {

        minutesDisplay: '00',
        secondsDisplay: '00',
        buttonLabel: [
          {
            id: 0,
            class: 'bg-green-500 rounded p-2 border border-white',
            label: 'Start Break'
          },
          {
            id: 1,
            class: 'bg-red-500 rounded p-2 border border-white',
            label: 'End Break'
          }
        ]
      }
    },

    methods: {
      startTimer() {
        
        setInterval(() => {
          this.secondsDisplay++;
          const formatSeconds = (this.secondsDisplay < 10 ? '0' : '') + this.secondsDisplay;
          this.secondsDisplay = formatSeconds;

          if (this.secondsDisplay > 59) {
            this.secondsDisplay = '00';
            this.minutesDisplay++;
            const formatMinutes = (this.minutesDisplay < 10 ? '0' : '') + this.minutesDisplay;
            this.minutesDisplay = formatMinutes;
          }

        },1000);
      }

       
    }
    
  }
</script>