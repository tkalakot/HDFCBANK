import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  property:any={
    "id":101,
    "name":"ktr",
    "balance":10000
  }
  constructor() { }

  ngOnInit(): void {

  }

}
