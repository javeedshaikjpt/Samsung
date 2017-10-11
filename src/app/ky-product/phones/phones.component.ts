import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  images = [{
    url: "http://s7d2.scene7.com/is/image/SamsungUS/Galaxy_S8_294x294-2",
    name: "Galaxy S"
  },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/note8",
      name: "Galaxy Note"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/other-android-phones",
      name: "All other phones"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/Other_Android_Phones",
      name: "Other Android Phones"
    }];

  constructor() { }

  ngOnInit() {
  }

}
