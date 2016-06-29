var vm = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      { text: 'Add some todos',
        complete : false
      }
    ],
  },
  filters: {
        inProgress: function(todos) {
            return todos.filter(function(todo) {
                return !todo.complete;
            });
        },

        taskCompleted: function(todos) {
            return todos.filter(function(todo) {
                return todo.complete;
            });
        },
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text, complete: false})
        this.newTodo = ''
      }
    },
    removeTodo: function (todo) {
      this.todos.$remove(todo)
    },
    finish: function (todo) {
      todo.complete = true;
    },
    undo: function(todo) {
      todo.complete = false;
    },
    finishAll: function() {
      this.todos.forEach(function(todo){
        todo.complete = true;
      })
    }
  }
})

