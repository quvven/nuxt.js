<template>
  <div class="container main-container pt-5">
    <h3 class="text-center">Express.js ile ToDo App | Nuxt.js</h3>
    <TodoForm @addTodoEvent="addTodo($event)" />
    <h3 class="text-center mt-5 mb-3">Yapılacaklar Listesi</h3>
    <Alert v-if="todos.length === 0"/>
    <Todos
      v-else
      @updateTodoEvent="showUpdateContainer($event)"
      @deleteTodoEvent="deleteTodo($event)"
      :todos="todos" />
    <UpdateTodo
      :todo="toUpdateTodo"
      @updateTodoEvent="updateTodo($event)"
      @hideUpdateContainerEvent="showUpdate = false"
      :class="{'show-update-container' : showUpdate}" />
  </div>
</template>
<script>
  import Todos from "@/components/todo/Todos"
  import TodoForm from "@/components/todo/TodoForm"
  import UpdateTodo from "@/components/todo/UpdateTodo"
  import Alert from "@/components/todo/Alert"
  export default {
    components : {
      Todos,
      TodoForm,
      UpdateTodo,
      Alert
    },
    data(){
      return {
        showUpdate : false,
        toUpdateTodo : null
      }
    },
    methods : {
      addTodo(todo){
        this.$store.dispatch("addTodo", todo)
      },
      deleteTodo(todo){
        this.$store.dispatch("deleteTodo", todo)
      },
      showUpdateContainer(todo){
        this.showUpdate = true
        this.toUpdateTodo = todo
      },
      updateTodo(updatedTodo){
        this.showUpdate = false
        this.$store.dispatch("updateTodo", updatedTodo)
      }
    },
    computed : {
      todos(){
        return this.$store.getters.getTodos
      }
    }
  }
</script>
