import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  name : string = 'Sergey';
  data: string;
  list = ['test','this','var','components'];
  showBlok = true;
  ShowHide: boolean = true;
  text: string = "Hellow world";
  name2: boolean = true;
  constructor() {
    setInterval(()=>{
      this.data = new Date().toLocaleTimeString();
    }, 1000)
   }

  eventFun(event){
    console.log(event);
  }
  ShowHideFun(){
    this.ShowHide = !this.ShowHide;
  }
  nameFunction(){
    this.name2 = !this.name2;
  }
  ngOnInit() {
  }

}
