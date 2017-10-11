import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {

  images = [{
    url: "http://s7d2.scene7.com/is/image/SamsungUS/qled_294x294",
    name: "QLED TVs"
  },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/suhd-tv",
      name: "4K SUHD TVs"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/uhd-tv",
      name: "4K UHD TVs"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/full-hd-tv",
      name: "Full HD TVs"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/HD-TV",
      name: "HD TVs"
    }];

  constructor() { }

  ngOnInit() {
  }

}
