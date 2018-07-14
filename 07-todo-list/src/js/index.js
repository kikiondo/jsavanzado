import { d } from './helper/dom'
import ToDoList from './components/TodoList'

const task = d.querySelector('#task')
const list = d.querySelector('#list')
const todo = new ToDoList('edList')

todo.render()
