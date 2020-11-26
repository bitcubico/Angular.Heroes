import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
