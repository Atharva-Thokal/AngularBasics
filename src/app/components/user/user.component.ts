import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  
  // name:string = 'atharva';
  // stock:number = 23;
  // isBtnDisabled = false;
  // inVal = 'text'

  // employ=[
  //   {name:"Atharva", age:23, isSingle:true},
  //   {name:"Jhon", age:13, isSingle:true},
  //   {name:"Thokal", age:32, isSingle:false}
  // ]

  // onChange(e:Event){
  //   var value = (e.target as HTMLInputElement).value;
  //   this.inVal = value;
    
  // }


  @Input({alias:"username"}) name="";
  @Input({transform:numberAttribute}) salary!:number;
  @Input({transform:booleanAttribute}) isSingle!:boolean;

  // when we send data from child to parent we send it like a event as parent listens that event
  @Output() myEvent = new EventEmitter<{name:string, newSalary:number}>();

  sendData(){
    this.myEvent.emit({name:this.name, newSalary:10000});
  }

  phoneNumber = 1234567890;
}
