import {Todo} from './todo';
export class App {
 heading = 'My Tasks';
 newTodo = '';
 todos : Todo[] = [];
 
 addTodo(){
 
 if(this.newTodo){
 this.todos.push(new Todo(this.newTodo,this.im));
 this.newTodo = '';
 this.im = ''
 }

 }
 
 removeTodo(todo){
 
 let index = this.todos.indexOf(todo);
 if(index !== -1){
 if(confirm('Do you weant to delete this task'))
 {
 this.todos.splice(index,1);
 }
 }
 
 }
 
 /*router : Router;
  message = 'Hello World!';
  
  configureRouter(config : RouterConfiguration,router : Router) : void{
  config.title = 'My app';
  config.map([
  {
  route : [ '', 'home' ],
  name : 'home',
  moduleId : './home',
  nav : true,
  title : 'Home'
  },
  {
  route : 'about',
  name : 'about',
  moduleId : './about',
  nav : true,
  title : 'Contact Us'
  }
  
  ]);
  this.router = router;
  }
  */
}
