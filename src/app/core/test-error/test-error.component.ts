import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss'],
})
export class TestErrorComponent implements OnInit {
  baseUrl = environment.apiUrl;
  validationErrors: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}

  //not found error
  get404Error() {
    this._http.get(this.baseUrl + 'products/85').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //servererror
  get500Error() {
    this._http.get(this.baseUrl + 'buggy/servererror').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //badrequest
  get400Error() {
    this._http.get(this.baseUrl + 'buggy/badrequest').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //validation passing string instead of number
  get400ValidationError() {
    this._http.get(this.baseUrl + 'products/fortythree').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.validationErrors = error.errors;
      }
    );
  }
}
