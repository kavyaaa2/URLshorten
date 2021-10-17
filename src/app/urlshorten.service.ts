import { Injectable } from '@angular/core';
import { urlData } from './modal';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UrlshortenService {
  urldata:Array<urlData>=[];

  constructor(private http:HttpClient) { }

  saveUrl(data:urlData){
    return this.http.post(`https://615eb8523d1491001755aab7.mockapi.io/shorturl`,data);
  }

  getAll(){
    return this.http.get<Array<urlData>>(`https://615eb8523d1491001755aab7.mockapi.io/shorturl`);
  }

  update(data:urlData,id:number|undefined){
    return this.http.put(`https://615eb8523d1491001755aab7.mockapi.io/shorturl/${id}`,data);
  }
}
