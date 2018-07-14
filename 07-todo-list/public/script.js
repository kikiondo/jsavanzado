!function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var Task=function Task(name){return _classCallCheck(this,Task),this.id=(new Date).getTime(),this.name=name,this.isComplete=!1,this};exports["default"]=Task},{}],2:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_dom=require("../helper/dom"),_Task=require("./Task"),_Task2=_interopRequireDefault(_Task),ToDoList=function(){function ToDoList(key){_classCallCheck(this,ToDoList),this.key=key,_dom.ls.getItem(key)||_dom.ls.setItem(key,_dom.j.stringify([])),this.addTask=this.addTask.bind(this),this.editTask=this.editTask.bind(this),this.removeTask=this.removeTask.bind(this)}return _createClass(ToDoList,[{key:"editTask",value:function(e){var _this=this;if("label"===e.target.localName){var tasks=_dom.j.parse(_dom.ls.getItem(this.key)),toEdit=tasks.findIndex(function(task){return task.name===e.target.textContent}),label=_dom.d.querySelector('[data-id="'+tasks[toEdit].id+'"]');_dom.c(tasks,toEdit,label);var saveTask=function(e){e.target.textContent=e.target.textContent,tasks[toEdit].name=e.target.textContent,_dom.ls.setItem(_this.key,_dom.j.stringify(tasks)),e.target.blur()};label.addEventListener("blur",function(e){return saveTask(e)}),label.addEventListener("keyup",function(e){return e.keyCode===_dom.ENTER_KEY&&saveTask(e)})}}},{key:"removeTask",value:function(e){if("a"===e.target.localName){var tasks=_dom.j.parse(_dom.ls.getItem(this.key)),toRemove=tasks.findIndex(function(task){return task.id.toString()===e.target.dataset.id});tasks.splice(toRemove,1),_dom.ls.setItem(this.key,_dom.j.stringify(tasks)),e.target.parentElement.remove()}}},{key:"addTask",value:function(e){if(e.target.value||alert("No puedes agregar una tarea vacía"),e.keyCode===_dom.ENTER_KEY){var newTask=new _Task2["default"](e.target.value),tasks=_dom.j.parse(_dom.ls.getItem(this.key));tasks.push(newTask),_dom.ls.setItem(this.key,_dom.j.stringify(tasks)),this.renderTask(newTask),e.target.value=null}}},{key:"renderTask",value:function(task){var templateTask='\n    <li class="List-item '+(task.isComplete?"complete":"")+'">\n    <input id="'+task.id+'" type="checkbox" class="List-checkbox" '+(task.isComplete?"checked":"")+'>\n    <label data-id="'+task.id+'" class="List-label" contenteditable  spellcheck>'+task.name+'</label>\n    <a href="#" data-id="'+task.id+'" class="List-removeLink">&#128465;</a>\n  </li>\n    ';list.insertAdjacentHTML("beforeend",templateTask)}},{key:"render",value:function(){var _this2=this,tasks=_dom.j.parse(_dom.ls.getItem(this.key)),listTasks=list.children;tasks.map(function(task){return _this2.renderTask(task)}),Array.from(listTasks).map(function(li){li.querySelector('input[type="checkbox"]').addEventListener("change",function(e){var task=tasks.filter(function(task){return task.id.toString()===e.target.id});e.target.checked?(e.target.parentElement.classList.add("complete"),task[0].isComplete=!0):(e.target.parentElement.classList.remove("complete"),task[0].isComplete=!1),_dom.ls.setItem(_this2.key,_dom.j.stringify(tasks))})}),task.addEventListener("keyup",this.addTask),list.addEventListener("click",this.editTask),list.addEventListener("click",this.removeTask)}}]),ToDoList}();exports["default"]=ToDoList},{"../helper/dom":3,"./Task":1}],3:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ENTER_KEY=13,c=console.log,d=document,j=JSON,ls=localStorage;exports.ENTER_KEY=ENTER_KEY,exports.c=c,exports.d=d,exports.j=j,exports.ls=ls},{}],4:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _dom=require("./helper/dom"),_TodoList=require("./components/TodoList"),_TodoList2=_interopRequireDefault(_TodoList),todo=(_dom.d.querySelector("#task"),_dom.d.querySelector("#list"),new _TodoList2["default"]("edList"));todo.render()},{"./components/TodoList":2,"./helper/dom":3}]},{},[4]);