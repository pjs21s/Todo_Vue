<template>
<div class="container">
  <h2>Todo List</h2>
  <div class="input-group" style="margin-bottom:10px;">
    <input type="text" class="form-control" placeholder="Write Todo" v-model="name" v-on:keyup.enter="createTodo(name)">
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="createTodo(name)">ADD</button>
    </span>
  </div>
  <ul class="list-group">
    <li class="list-group-item" v-for="(todo, index) in todos" :key="todo">
    {{index}}. {{todo.name}}
      <div class="btn-group pull-right" style="font-size: 12px; line-height: 1;">
      <button type="button" class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      More
      <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a href="#" @click="deleteTodo(index)">Delete</a></li>
      </ul>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
  export default {
    name:'TodoPage',
    data(){
      return {
        todos: [
          { name:'Cleaning' },
          { name:'Writing Blog' },
          { name:'Eating' },
          { name:'Hellow' },
        ]
      };
    },
    methods: {
      deleteTodo(i){
        this.todos.splice(i,1)
      },
      createTodo(name){
        if(name != null){
          this.todos.push({name:name})
          this.name = null
        }
      }
    },
    mounted() {
      this.getTodos()
    }
  }
</script>