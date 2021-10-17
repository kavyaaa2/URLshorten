import { Component, OnInit } from '@angular/core';
import { urlData } from '../modal';
import { UrlshortenService } from '../urlshorten.service';

@Component({
  selector: 'app-show-all-url',
  templateUrl: './show-all-url.component.html',
  styleUrls: ['./show-all-url.component.css']
})
export class ShowAllUrlComponent implements OnInit {

  urlList:Array<urlData>=[];
  temp1={
    "longurl":"",
    "shorturl":"",
    "code":"",
    "clicks":0
  }

  constructor(private urlService:UrlshortenService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.urlService.getAll().subscribe((data)=>{
      this.urlList=data;
      console.log(this.urlList);
    })
  }

  changeCount(id:number|undefined){
    this.urlService.getAll().subscribe((data)=>{
      data.forEach((temp)=>{
        if(temp.id===id)
        {
          this.temp1={
            "longurl":temp.longurl,
            "shorturl":temp.shorturl,
            "code":temp.code,
            "clicks":temp.clicks + 1
          }
          console.log(this.temp1.clicks);
          this.urlService.update(this.temp1,id).subscribe((data)=>{
            this.ngOnInit();
            console.log(data);
          });
        }
      })
    })
  }
}
