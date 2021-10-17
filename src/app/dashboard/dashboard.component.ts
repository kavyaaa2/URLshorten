import { Component, OnInit } from '@angular/core';
import { UrlshortenService } from '../urlshorten.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalLinks=0;
  totalClicks=0;

  constructor(private urlService:UrlshortenService) { }

  ngOnInit(): void {
    this.getTotal();
  }

  getTotal(){
    this.urlService.getAll().subscribe((data)=>{
      data.forEach((temp)=>{
        this.totalLinks +=1;
        this.totalClicks += temp.clicks;
      })
    })
  }

}
