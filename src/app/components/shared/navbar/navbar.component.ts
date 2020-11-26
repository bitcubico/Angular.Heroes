import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  title = "SPA";
  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  searchHeroes(keyWord: string)
  {
    this._router.navigate(['/search', keyWord]);
  }
}