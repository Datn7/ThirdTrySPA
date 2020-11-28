import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  fromRepoProducts: any;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.getTestProductsFromRepo();
  }
  //repositoridan camogeba
  getTestProductsFromRepo() {
    return this._http
      .get('http://localhost:5000/api/rproducts')
      .subscribe((res) => {
        this.fromRepoProducts = res;
      });
  }
}
