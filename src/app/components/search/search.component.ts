import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = null;
  keyWord: string = '';

  constructor(private _heroeService: HeroesService,
              private _activedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    this._activedRoute.params.subscribe(params => {
      this.keyWord = params['keyWord'];

      if(this.keyWord.trim().length === 0)
      {
        this._router.navigate(['/heroes']);
        return;
      }

      this.heroes = this._heroeService.searchByKeyWord(this.keyWord);
      //console.log(this.heroes);
    });
  }

}
