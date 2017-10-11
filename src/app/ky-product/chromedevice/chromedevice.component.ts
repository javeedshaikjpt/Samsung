import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chromedevice',
  templateUrl: './chromedevice.component.html',
  styleUrls: ['./chromedevice.component.css']
})
export class ChromedeviceComponent implements OnInit {

  images = [{
    url: "http://s7d2.scene7.com/is/image/SamsungUS/chromebox",
    name: "Chrome Box"
  },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/chromebook",
      name: "ChromeBook"
    }];


  constructor() { }

  ngOnInit() {
  }

}
