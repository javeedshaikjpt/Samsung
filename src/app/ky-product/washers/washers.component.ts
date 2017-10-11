import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washers',
  templateUrl: './washers.component.html',
  styleUrls: ['./washers.component.css']
})
export class WashersComponent implements OnInit {

  images = [{
    url: "http://s7d2.scene7.com/is/image/SamsungUS/2-in-1-washers",
    name: "2-in-1"
  },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/front-load",
      name: "Front Load"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/top-load",
      name: "Top Load"
    }];


  constructor() { }

  ngOnInit() {
  }

}
