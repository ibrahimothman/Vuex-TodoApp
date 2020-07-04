<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos :todos="todos"/>
    </div>
  </div>
</template>

<script>

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";


export default {
  name: 'App',
  components: {
    Todos, 
    AddTodo,
    FilterTodos
   
  },
  data(){
    return {
      todos:[
        {
        id: 1,
        title: "todo one",
        completed: false
        },
        {
        id: 2,
        title: "todo two",
        completed: false
        }
      ]
    }
  },
  
}
</script>

<style>

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>
