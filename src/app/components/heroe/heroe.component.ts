import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = null;

  constructor(private _activateRoute: ActivatedRoute,
              private _heroeSevice: HeroesService,
              private _router : Router) {
    this._activateRoute.params.subscribe(params => {
      this.heroe = this._heroeSevice.getHeroeById(params['id']);
    });
  }

  ngOnInit(): void {
    if(this.heroe === null)
      this._router.navigate(['error/404']);
  }

}
