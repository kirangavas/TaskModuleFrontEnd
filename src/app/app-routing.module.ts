import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskAddComponent } from './components/task-add/task-add.component';

const routes: Routes = [{
  path:'',component:TaskListComponent
},
{
  path:'AddTask',component:TaskAddComponent
},
{
  path:'tasks',component:TaskListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
