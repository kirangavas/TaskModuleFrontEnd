import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { TaskUserDetails } from '../models/taskuserdetails';
import { UserDetails } from '../models/userdetails';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7104'; // Replace with your backend API endpoint

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskUserDetails[]> {
    return this.http.get<TaskUserDetails[]>(`${this.apiUrl}/api/TaskModule/Get`);
  }

  addTask(taskmodel: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/api/TaskModule/Post/AddTask`, taskmodel);
  }

  getUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(`${this.apiUrl}/api/Users`);
  }


  // Implement update and delete methods as needed
}
