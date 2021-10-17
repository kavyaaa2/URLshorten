import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlshortenService } from '../urlshorten.service';
@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.css']
})
export class ShortenComponent implements OnInit {

  @Input() longUrl:string="";
  shortUrl:string="";
  code: string="";
  urldata ={
    "longurl":"",
    "shorturl":"",
    "code":"",
    "clicks":0
  };
  constructor(private urlService:UrlshortenService, private router:Router) { }

  ngOnInit(): void {
  }

  generateCode(){
    var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    var charactersLength=characters.length;
   
    for(var i=0;i<4;i++)
    {
      this.code += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    this.shortUrl="https://localhost:4200/"+this.code;
    this.urldata={
      "longurl":this.longUrl,
      "shorturl":this.shortUrl,
      "code":this.code,
      "clicks":0
    };
    console.log(this.urldata);
    this.urlService.saveUrl(this.urldata).subscribe(()=>{
    });
  }

}
