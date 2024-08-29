const Todo = require('../model/Todo');
const TodoViews = require('../view/TodoViews');

class TodoController {
    static show() {
        let todos = Todo.show();
        TodoViews.show(todos)
    }

    static add(todo) {
        Todo.addTodo(todo);
        TodoViews.massage('Todo berhasil ditambahkan');
    }

    static remove(todo) {
        Todo.remove(todo);
        TodoViews.massage('Todo berhasil dihapus');
    }

    static update(todo) {
        Todo.update(todo);
        TodoViews.massage('Todo berhasil diperbarui');
    }
    static message(msg) {
        TodoViews.massage(msg)
    }
}

module.exports = TodoController;