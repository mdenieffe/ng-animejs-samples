import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import anime from 'animejs';

@Component({
    selector: 'app-image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.css'],
})
export class ImageViewerComponent implements OnInit, AfterViewInit {
    @Input() images: any[];

    @ViewChild('imagesContainer') imagesContainer: ElementRef<any>;

    constructor() {}

    ngOnInit() {}

    ngAfterViewInit(): void {

      anime({
        targets: 'img',
        opacity: 1,
        easing: 'linear',
        duration: 2000
      });
    }

    onSelect(imageIndex: number) {
      console.log(`here: ${JSON.stringify(imageIndex)}`);
      anime({
        targets: `img.thumbnail-${imageIndex}`,
        scale: 1.2,
        rotateX: '10',
        duration: 600
      });
    }
}
