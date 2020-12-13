import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobile={
    model:'iphone',
    company:'Apple',

    configuration:{
      cpu:'A14',
      gpu:'4 core',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
