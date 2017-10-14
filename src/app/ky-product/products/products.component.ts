import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  images = [{
    url: "http://s7d2.scene7.com/is/image/SamsungUS/Galaxy_S8_294x294-1",
    name: "Phones"
  },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/qled_294x294",
      name: "Tvs"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/refrigerator21",
      name: "Refrigerators"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/washers",
      name: "Washers"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/tablets",
      name: "Tablets"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/chrome-devices",
      name: "Chrome Devise"
    }];
  
  constructor() { }

  ngOnInit() {
  }

}
