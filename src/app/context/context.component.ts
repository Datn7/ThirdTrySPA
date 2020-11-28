import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss'],
})
export class ContextComponent implements OnInit {
  testProducts: any;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.getTestProducts();
  }
  //pirdapir contextidan camogeba infosi
  getTestProducts() {
    return this._http
      .get('http://localhost:5000/api/dproducts')
      .subscribe((res) => {
        this.testProducts = res;
      });
  }
}
