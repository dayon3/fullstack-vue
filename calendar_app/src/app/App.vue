<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalendarEntry.vue';

export default {
  name: 'App',
  components: {
    CalendarWeek,
    CalendarEntry
  }
};
</script>

<style lang="scss">
body {
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  min-height: 100vh;
}

/* adjust width */
body::-webkit-scrollbar,
.shopping__list::-webkit-scrollbar {
  width: 0.4rem;
}

/* change track background */
body::-webkit-scrollbar-track,
.shopping__list::-webkit-scrollbar-track {
  background: #1e1e24;
}

/* change thumb background */
body::-webkit-scrollbar-thumb,
.shopping__list::-webkit-scrollbar-thumb {
  background: #00d1b2;
}
</style>

<style lang="scss" scoped>
#app {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  padding: 3rem;
}
</style>
