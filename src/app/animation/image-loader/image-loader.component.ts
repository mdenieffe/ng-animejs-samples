import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    AfterViewInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, noop } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import anime from 'animejs';

@Component({
    selector: 'app-image-loader',
    templateUrl: './image-loader.component.html',
    styleUrls: ['./image-loader.component.css'],
})
export class ImageLoaderComponent implements OnInit, AfterViewInit {

    @Input() trigger$: Observable<any>;

    @ViewChild('imageContainer') imageContainer: ElementRef<any>;

    constructor(private http: HttpClient) {}

    ngOnInit() {}

    ngAfterViewInit(): void {

    }
}
