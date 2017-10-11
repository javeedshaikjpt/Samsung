import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refrigerators',
  templateUrl: './refrigerators.component.html',
  styleUrls: ['./refrigerators.component.css']
})
export class RefrigeratorsComponent implements OnInit {
  images = [{
    url: "http://s7d2.scene7.com/is/image/SamsungUS/4-door-flex",
    name: "4-Door Flex"
  },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/french-door",
      name: "French Door"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/side-by-side",
      name: "Side-by-Side"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/bottom-mount",
      name: "Bottom Freezer"
    },
    {
      url: "http://s7d2.scene7.com/is/image/SamsungUS/top_freezer",
      name: "Top Freezer"
    }];
  constructor() { }

  ngOnInit() {
  }

}
