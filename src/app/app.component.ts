import { Component,OnInit } from '@angular/core';
import{EmpServiceService} from './emp-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(private empService:EmpServiceService){}
  ngOnInit(){
    this.empService.getEmp().subscribe(res=>{
      console.log(res);
    }),err=>{
      console.log(err);
    }
  }
  title = 'http';
}
