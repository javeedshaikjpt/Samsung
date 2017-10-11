import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {

  images = [{
    url: "http://s7d2.scene7.com/is/image/SamsungUS/Galaxy-Tabs_294x294",
    name: "Galaxy Tabs"
  },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/Galaxy-Note-Tabs_294x294",
      name: "Galaxy Note Tabs"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/galaxy-tab-pro-s",
      name: "Galaxy TabPro S"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/galaxy_book_294x294-3",
      name: "Galaxy Book"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/Galaxy-Views_294x294",
      name: "Galaxy View"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/Tablet-PCs_294x294",
      name: "All Other Tablets"
    }];

  constructor() { }

  ngOnInit() {
  }

}
