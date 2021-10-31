import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = this.fb.group({
    bname:[''],
    aname:[''],
    category:[''],
    ypublic:['']
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

 

  ngOnInit(): void {
  }


  register(){


    var bname = this.registerForm.value.bname
      var aname = this.registerForm.value.aname
      var category = this.registerForm.value.category
      var ypublic = this.registerForm.value.ypublic
    
  
     this.ds.register(bname,aname,category,ypublic)
     .subscribe((result:any) => {
      if(result){
        alert(result.message)
        
      }
     
     },
     (result)=>{
       alert(result.error.message)
       this.router.navigateByUrl("")
     }
     )
  
      
   
    
    
  }

}
