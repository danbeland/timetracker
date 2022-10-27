<template>
  <div class="taskItem">
    <div class="row">
      <div class="col-7">
        <input type="text" class="form-control" placeholder="Task Name">
      </div>
      <div class="col-3 d-flex justify-content-center align-items-center h4 mb-0">00:00:00</div>
      <div class="col-2 d-flex justify-content-end">
        <button class="btn text-success"><i class="fa-solid fa-play"></i></button>
        <button class="btn text-secondary"><i class="fa-solid fa-rotate"></i></button>
        <button class="btn text-muted"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskItem'
}
</script>

<style scoped>
.taskItem { background-color: white; border-radius: 50px; padding: 5px; }
.taskItem input[type=text] { border-width: 0; border-radius: 50px; box-shadow: none; }
</style>