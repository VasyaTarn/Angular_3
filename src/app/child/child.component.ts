import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() user : any;

  editStatus : boolean = false;

  isEdit()
  {
    this.editStatus = true;
  }

  saveUser()
  {
    this.editStatus = false;
  }

}
