import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options={
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  constructor(private http:HttpClient) { }

  register(bname:any,aname:any,category:any,ypublic:any){
    const data ={
    bname,
    aname,
    category,
    ypublic
    }
  
  
   return this.http.post("http://localhost:3000/register",data)
  }
}
