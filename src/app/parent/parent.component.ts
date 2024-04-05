import { Component, isStandalone } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name : string = "";
  salary : number = 0;
  date : Date = new Date();

  isActive : boolean = false;

  users : any = [];

  addUser()
  {
    this.users.push({name: this.name, salary: this.salary, date: this.date});
  }

  deleteUser(index : number)
  {
    this.users.splice(index, 1);
  }

  
}
