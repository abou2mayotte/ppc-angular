import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  display = {
    sci: false,
    sch: false,
    history: false,
    geography: false,
  }

  constructor() { }

  ngOnInit(): void {
  }
  toggle( value: string) {
    console.log('--->', value)
    this.display[value] = !this.display[value]
  }

}
