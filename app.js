let app = new Vue({
  el: '#app',
  data: {
    todos: [
      {
        id: 1,
        text: 'Buy milk',
        done: false
      },
      {
        id: 2,
        text: 'Learn Vue JS',
        done: false
      },
      {
        id: 3,
        text: 'Be Awesome',
        done: true
      }
    ],
    newTask: ''
  },
  methods: {
    toggleTask (todo) {
      // todo.done = !todo.done
      this.todos = this.todos.map((crtTask) => {
        if (crtTask.id === todo.id) {
          return {
            ...todo,
            done: !todo.done
          }
        }

        return crtTask
      })
    },
    getClasses (todo) {
      return [
        'list-group-item',
        {
          'list-group-item-success': todo.done,
          'list-group-item-secondary': !todo.done
        }
      ]
    },
    addTask () {
      if (!this.newTask.trim())  return
      
      this.todos = [
        ...this.todos,
        {
          id: +new Date(),
          text: this.newTask,
          done: false
        }
      ]

      this.newTask = ''
    },
    removeTask (task) {
      this.todos = this.todos.filter(currentTask => currentTask.id !== task.id)
    }
  }
})