import { Component, OnInit } from '@angular/core';

import { Page } from 'ui/page';

import { Todo } from '../../shared/todo/todo'

@Component({
    selector: 'todos',
    templateUrl: 'pages/todos/todos.html',
    styleUrls: ['pages/todos/todo.css']
})

export class TodosComponent implements OnInit {
    todo: Todo;
    todos: Array<Object> = [];
    newTodo: string;

    constructor(private page: Page){
        this.todo = new Todo();
        this.todos.push({ name: 'Apple' });
    }

    ngOnInit(){
        this.page.actionBarHidden = true;
    }

    addTodo(){
        console.log(this.newTodo);
    }
    deleteTodo(item: Todo){
        console.log(item.name)
    }
}
