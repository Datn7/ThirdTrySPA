import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination.model';
import { IBrand } from '../shared/models/productBrands.model';
import { IType } from '../shared/models/productTypes.model';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shop.params';
import { IProduct } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private _http: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageindex', shopParams.pageSize.toString());

    return this._http
      .get<IPagination>(this.baseUrl + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
  }

  getProduct(id: number) {
    return this._http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  getBrands() {
    return this._http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this._http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
