//in this component code related to network req or api call to outside server is written
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  
//to make api call we need http dependancy in constructor
  // http:HttpClient
  //if you add private or public no need of above and below line 
  constructor(private http:HttpClient) { 
    // this.http = http;
  }

  // //other way of using injectable when you dont have access of class
  // private http = inject(HttpClient);

  getJokes(){
    return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
  }

}