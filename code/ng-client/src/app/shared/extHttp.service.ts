import {Injectable} from '@angular/core';
import {ResponseHandler} from '../auth';
import {Http, Headers, RequestOptions, RequestOptionsArgs, RequestMethod, Request} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ExtHttp {
  private HEADER_PREFIX: string = 'Bearer ';
  private urlRoot: string;
  process: Subject<any> = new Subject<any>();
  constructor(private _http: Http,
              private serverHandler: ResponseHandler) {
    this.urlRoot = 'https://production.com';

    let host = window.location.hostname;

    if (host === 'localhost') {
      this.urlRoot = 'http://localhost:4000';
    }

  }

  private _generateToken(): string {
    // This is just a hack until later labs :-)
    return 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI4ekV0ZkJTdkVYbjlSUDVzIiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWl4dGFwZS5jb20iLCJhZG1pbiI6dHJ1ZSwiZmlyc3ROYW1lIjoiQWRtaW4iLCJsYXN0TmFtZSI6IlVzZXIifQ.c3ZZHZT4GVhZT9ZVvVqzJYePNLpYn5CVVUKpS3dHJ1g';
  }

  private _createAuthHeaders(): Headers {
    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    headers.set('Authorization', this._generateToken());

    return headers;
  }

  public get(url: string, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Get, url, null, options);
  }

  public post(url: string, body: any, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Post, url, JSON.stringify(body), options);
  }

  public put(url: string, body: any, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Put, url, JSON.stringify(body), options);
  }

  public delete(url: string, options?: RequestOptionsArgs) {
    return this._request(RequestMethod.Delete, url, null, options);
  }

  private _request(method: RequestMethod, relativeUrl: string, body?: string, options?: RequestOptionsArgs): Observable<any> {
    let url = this.urlRoot + relativeUrl;
    let requestOptions = new RequestOptions(Object.assign({
      method: method,
      url: url,
      body: body,
      headers: this._createAuthHeaders()
    }, options));
    return Observable.create((observer) => {
      this._http.request(new Request(requestOptions))
        .subscribe(
          (res) => {
            observer.next(res);
            observer.complete();
          },
          (err) => {
            switch (err.status) {
              case 401:
                this.serverHandler.handle401();
                observer.complete();
                break;
              case 403:
                this.serverHandler.handle403();
                observer.complete();
                break;
              case 500:
                this.serverHandler.handle500();
                observer.complete();
                break;
              default:
                observer.error(err);
                break;
            }
          });
    });
  }
}
