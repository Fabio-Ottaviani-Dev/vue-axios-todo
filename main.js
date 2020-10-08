const API_URL = 'http://localhost:5000'

var app = new Vue({
  el: '#app',
  data() {
    return {
      todos: [],
      todoId: null,
      todoName: '',
      update: false,
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      },
    },
  },
  methods: {
    // Create >> Todo
    createTodo() {
      console.log('createTodo')
      axios
        .post(`${API_URL}/todos`, { name: this.todoName })
        .then((res) => {
          // this.todos = [...this.todos, res.data];
          this.todoName = ''
          this.readTodos()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // Read >> All Todos
    readTodos() {
      console.log(`readTodo{S}`)
      axios
        .get(`${API_URL}/todos`)
        .then((res) => {
          this.todos = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // Update >> Todo
    editTodo(id = null) {
      if (id != null) {
        console.log(`editTodo -> id: ${id}`)
        axios
          .get(`${API_URL}/todos/${id}`)
          .then((res) => {
            this.todoId = id
            this.todoName = res.data.name
            this.update = true
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    // ---
    updateTodo() {
      console.log(`updateTodo patch`)
      var id = this.todoId
      axios
        .patch(`${API_URL}/todos/${id}`, { name: this.todoName })
        .then((res) => {
          //console.log(res);
          this.update = false
          this.todoName = ''
          this.todoId = null
          this.readTodos()
        })
        .catch((err) => {
          console.error(err)
        })
    },
    // Delete >> Todo
    deleteTodo(id) {
      console.log(`deleteTodo -> id: ${id}`)
      axios
        .delete(`${API_URL}/todos/${id}`)
        .then((res) => {
          //console.log(res);
          this.todoName = ''
          this.update = false
          this.readTodos()
        })
        .catch((err) => {
          console.error(err)
        })
    },
  }, // END methods
  created() {
    this.readTodos()
  },
})
