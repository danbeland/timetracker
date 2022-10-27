<template>
  <div class="container pt-5" style="max-width: 768px;">
    
    <button class="btn btn-primary float-end"><i class="fa-solid fa-plus"></i></button>
    <h1 class="text-center mb-5">Time Tracker</h1>
    
    <TaskList tasks="{{ tasks }}" />

    <div class="mt-5 text-center text-muted"><small>&copy; 2022 Choss Labs.</small></div>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  data() {
    return {
      tasks: []
    }
  },
  components: {
    TaskList
  }
}
</script>

<style>
.btn { border-radius: 50px; }
</style>