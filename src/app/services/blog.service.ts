import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/// <reference path="../configs/commonConfigs.ts">
@Injectable()
export class BlogService {

  private header: Headers = new Headers();
  private serverUrl = 'http://localhost:3000/' + 'api/v1/';

  constructor(private http: Http) {
    this.header.append('Content-Type', 'application/json');
  }

  getAllPosts() {
    return this.http.get(this.prependEndpoint(), { headers: this.header })
      .map(res => res.json());
  }

  createPost(post_data) {

    return this.http.post(this.prependEndpoint('post'), post_data, { headers: this.header })
      .map(res => res.json());
  }


  prependEndpoint(endPoint: string = ''): string {
    if (endPoint.length <= 0) {
      return this.serverUrl;
    }

    return this.serverUrl + endPoint;
  }

}
