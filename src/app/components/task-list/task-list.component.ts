import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/taskservice.service';
import { Task } from '../../models/task';
import { Router } from '@angular/router';
import { TaskUserDetails } from '../../models/taskuserdetails';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  taskuserdetails:TaskUserDetails[]=[];
  
  /*tasks: Task[] =  [
    {
      taskid: 1,
      taskname: 'Complete Angular Tutorial',
      taskdescription: 'Finish the Angular tutorial on creating CRUD operations.',
      assignto: 123
    },
    {
      taskid: 2,
      taskname: 'Update Documentation',
      taskdescription: 'Review and update project documentation.',
      assignto: 456
    },
    {
      taskid: 3,
      taskname: 'Bug Fixing',
      taskdescription: 'Address reported bugs and issues in the application.',
      assignto: 789
    },
  ];
  */

  
  constructor(private taskService: TaskService,private route:Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }
  
  addnewtask():void{
    this.route.navigate(['AddTask'])
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.taskuserdetails = data;
      console.log(this.taskuserdetails);
    });
  }
  

}
