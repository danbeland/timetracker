<template>
  <div id="taskList">
    <TaskItem />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
export default {
  name: 'TaskList',
  components: {
    TaskItem
  }
}
</script>