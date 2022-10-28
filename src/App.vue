<template>
  <div class="container pt-5" style="max-width: 768px;">
    
    <button class="btn btn-primary float-end" @click="addTask()"><i class="fa-solid fa-plus"></i></button>
    <h1 class="text-center mb-5">Time Tracker</h1>
    
    <TaskItem 
      v-for="task in tasks" 
      :key="task.id" 
      :task="task" 
      v-model="task.name"
      @toggle="toggleTask"
      @reset="resetTask"
      @remove="removeTask"
      />

    <div class="mt-5 text-center text-muted"><small>&copy; {{ new Date().getFullYear() }} Choss Labs.</small></div>
  </div>
</template>

<script>
import TaskItem from './components/TaskItem.vue';

let taskid = 1;

export default {
  name: 'App',
  data() {
    return {
      tasks: [
        { 
          id: taskid,
          name: '',
          running: false,
          interval: null,
          duration: 0
        }
      ] 
    }
  },
  mounted() {
    if(localStorage.getItem('tasks')) this.tasks = JSON.parse(localStorage.getItem('tasks'));
    // window might have been closed with timers running
    // stop all the timers
    this.tasks.forEach((task, i) => {
      this.tasks[i].running = false;   
      this.tasks[i].interval = null;     
    });
  },
  watch: {
    tasks: {
      handler(newTasks) {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
      },
      deep: true
    }
  },
  methods: {
    addTask() {
      taskid++;
      this.tasks.push(
        { 
          id: taskid,
          name: '',
          running: false,
          interval: null,
          duration: 0
        }
      );
    },
    toggleTask(task) {
      if(task.running) {
        this.stopTask(task);
      } else {
        this.startTask(task);
      }
    },
    startTask(task) {
      task.running = true;
      task.interval = setInterval(() => { 
        this.incrementTask(task);
      }, 1000);
      // toast the other tasks
      for(let t of this.tasks) {
        if(t.id != task.id) {
          this.stopTask(t);
        }
      }
      console.log(this.tasks);
    },
    stopTask(task) {
      task.running = false;
      if(task.interval != null) clearInterval(task.interval);
    },
    incrementTask(task) {
      task.duration++;
    },
    resetTask(task) {
      if(confirm('Are you sure?')) task.duration=0;
    },
    removeTask(task) {
      if(confirm('Are you sure?')) {
        let index = this.tasks.indexOf(task);
        if(index != -1) {
          this.stopTask(this.tasks[index]);
          this.tasks.splice(index ,1);
        }
      }
    }
  },
  components: {
    TaskItem
  }
}
</script>

<style>
.btn { border-radius: 50px; }
</style>