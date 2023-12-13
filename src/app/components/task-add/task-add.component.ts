import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/taskservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from '../../models/userdetails';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit {newTask:FormGroup; 
emplist:UserDetails[]=[];

  constructor(private taskService:TaskService,private route:Router){
    this.newTask=new FormGroup({
      taskname:new FormControl('',[Validators.required]),
      taskdescription:new FormControl('',[Validators.required]),
      assignto:new FormControl('',[Validators.required])
    });
    this.loadEmployee();
  }
  ngOnInit(): void {
  }

  addTask():void{
    this.taskService.addTask(this.newTask.value).subscribe(()=>{
      this.taskService.getTasks().subscribe((data)=>{    
        this.route.navigate([''])
      })
    });
  }

  loadEmployee():void{
      this.taskService.getUsers().subscribe((data)=>{
        console.log('Raw data:', data);
        this.emplist=data;
        console.log('Parsed data:', this.emplist);

      });
  }
}

