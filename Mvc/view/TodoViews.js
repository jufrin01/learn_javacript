class TodoViews {
    static show(todos){
      //  console.log(todos);
        console.log("Todo list: ");
        todos.forEach(todo => {
            const {id, task, status } = todo;
            if(status){
                console.log(`${id}. [✓] ${task}`);
            }else{
                console.log(`${id}. [ ] ${task}`);
            }
        })
    }
    static massage(msg) {
        console.log(msg);
    }
}

module.exports = TodoViews;