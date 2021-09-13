import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getListImages() {
    const params = { userId: 1 };
    const url = `feeds/getFeeds`;
    return this.http.post(url, { params });
  }
}
