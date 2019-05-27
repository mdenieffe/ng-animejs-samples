import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  images: any[] = [
      'assets/images/image-1.jpeg',
      'assets/images/image-2.jpeg',
      'assets/images/image-3.jpeg',
      'assets/images/image-4.jpeg'
    ];

  constructor() {
  }

  ngOnInit() {

  }
}
