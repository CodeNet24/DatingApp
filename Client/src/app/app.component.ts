import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DatingApp';
  users:any;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get('https://localhost:2025/api/users').subscribe({
      next: (x) =>{
       // console.log(x)
        this.users=x
      },
      error: error=> console.log(error),
      complete:()=>{
        this.users
        console.log('Reqeust has completed',this.users)}
    });

  }
}
