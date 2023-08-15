import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marks';
  // @ViewChild('myForm') myForm: NgForm;
  userData = {
    username: '',
    email: ''
};
list: any[] = [];

task: string = '';

errorMessage: string = '';



ngOnInit(): void {

  this.getAll();

}



isValid(): boolean {

  return this.task.length >= 4 && this.task.length <= 200 && /^[a-zA-Z0-9 ]*$/.test(this.task);

}



onChange(): void {

  this.errorMessage = this.isValid() ? '' : 'Please enter a valid task between 4 and 200 characters without special characters.';

}



addTask(): void {

  if (this.isValid()) {

    const newTask = {

      TaskName: this.task,

      IsComplete: false

    };



    this.list.push(newTask);

    this.task = '';

    this.errorMessage = '';

    this.saveTasks();

  } else {

    this.errorMessage = 'Please enter a valid task between 4 and 200 characters without special characters.';

  }

}



changeStatus(index: number, currentValue: boolean): void {

  if (index >= 0 && index < this.list.length) {

    this.list[index].IsComplete = !currentValue;

    this.saveTasks();

  }

}



deleteTask(index: number): void {

  if (index >= 0 && index < this.list.length) {

    this.list.splice(index, 1);

    this.saveTasks();

  }

}



deleteAllTasks(): void {

  this.list = [];

  this.saveTasks();

}



saveTasks(): void {

  localStorage.setItem('todo', JSON.stringify(this.list));

}



getAll(): void {

  const savedTasks = localStorage.getItem('todo');

  if (savedTasks) {

    this.list = JSON.parse(savedTasks);

  }

}

onSubmit() {
    // if (this.myForm.valid) {
        // Form is valid, process the data
        console.log(this.userData);
    }
}

