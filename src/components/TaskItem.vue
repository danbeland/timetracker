<template>
  <div class="taskItem">
    <div class="d-flex">
      <div class="name"><input type="text" v-model="inputValue" v-on:keyup.enter="this.$emit('toggle', this.task)" class="form-control" placeholder="Task Name"></div>
      <div class="duration h4 mb-0">{{ durationLabel }}</div>
      <div class="actions">
        <button class="btn" @click="this.$emit('toggle', this.task)" tabindex="-1"><i class="fa-solid" :class="{ 'text-success fa-play': !task.running, 'text-warning fa-pause': task.running }"></i></button>
        <button class="btn text-secondary" @click="this.$emit('reset', this.task)" tabindex="-1"><i class="fa-solid fa-rotate"></i></button>
        <button class="btn text-muted" @click="this.$emit('remove', this.task)" tabindex="-1"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: Object,
    modelValue: String
  },
  computed: {
    inputValue: {
      get() {
        return this.task.name;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    },
    durationLabel() {
      let seconds = Math.floor((this.task.duration) % 60),
          minutes = Math.floor((this.task.duration / 60) % 60),
          hours = Math.floor((this.task.duration / (60 * 60)) % 24);
      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0'); 
      seconds = String(seconds).padStart(2, '0'); 
      return hours + ":" + minutes + ":" + seconds;
    }
  }
}
</script>

<style scoped>
.taskItem { background-color: white; border-radius: 50px; padding: 5px; margin-bottom: 1rem; transition: all 200ms ease; box-shadow: 0px 5px 10px -5px rgb(0 0 0 / 10%); } 
.taskItem .name { flex-grow: 1; }
.taskItem .duration { flex-shrink: 1; display: grid; place-items: center; padding: 0 5px; }
.taskItem .actions { flex-shrink: 1; padding: 0 15px; white-space: nowrap; }
.taskItem .actions button { padding: 5px 7px; border-color: transparent; }
.taskItem input[type=text] { width: 100%; border-width: 0; border-radius: 50px; box-shadow: none; font-weight: 500; }
.taskItem:hover { box-shadow: 0px 5px 10px -5px rgb(0 0 0 / 30%); }
.fa-trash:hover { color: var(--bs-danger); }
</style>