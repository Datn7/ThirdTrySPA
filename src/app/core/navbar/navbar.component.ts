import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  basket$: Observable<IBasket>;

  constructor(private _basketService: BasketService) {}

  ngOnInit(): void {
    this.basket$ = this._basketService.basket$;
  }
}
