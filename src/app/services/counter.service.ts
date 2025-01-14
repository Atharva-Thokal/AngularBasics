import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
  private count = 0;

  getCounter(){
    return this.count;
  }
 
  increaseCounter(){
    this.count = this.count + 1; 
  }
}
