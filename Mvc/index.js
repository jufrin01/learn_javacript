// proses argv : bisa mengambil input dari Terminal
const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController = require('./controller/TodoController');

 switch (command) {
    case 'tambah' :
       TodoController.add(params);
        break;
    case 'remove':
        TodoController.remove(params);
        break;
     case 'update' :
         TodoController.update(params);
         break;
     case 'show' :
         TodoController.show();
         break;
     default :
         TodoController.message("Silahkan command dengan benar")
         break;
 }

