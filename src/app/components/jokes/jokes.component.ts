import { Component } from '@angular/core';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {
  jokes = "loading"
  constructor(private jokesService:JokesService){
   
    
  }
  ngOnInit(){
    this.getAnother();
  }

  getAnother(){
      this.jokesService.getJokes().subscribe((data:any) => {
      this.jokes = data.value;
    })
  }
}
