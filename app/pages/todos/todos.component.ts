import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todos',
    templateUrl: 'pages/todos/todos.html'
})

export class TodosComponent implements OnInit {
    groceryList: Array<Object> = [];

    ngOnInit(){
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });
    }
}
