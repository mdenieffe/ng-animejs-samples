import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import anime from 'animejs';
import { interval, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-message-rotator',
    templateUrl: './message-rotator.component.html',
    styleUrls: ['./message-rotator.component.css']
})
export class MessageRotatorComponent implements OnInit, AfterViewInit, OnDestroy {
    readonly initialIndex = 0;

    readonly messages = [
        'Java is to JavaScript what car is to Carpet. – Chris Heilmann',
        'Experience is the name everyone gives to their mistakes. - Oscar Wilde',
        'Dont believe everything you read on the internet. - Abraham Lincoln',
        'Code is like humor. When you have to explain it, it’s bad. - Cory House',
    ];

    @ViewChild('container') containerEl: ElementRef;

    private destroy$ = new Subject();

    constructor() {}

    ngOnInit() {}

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    ngAfterViewInit() {
        const container: HTMLElement = this.containerEl.nativeElement;

        const initialElement = this.createElement(
            this.initialIndex,
            container.offsetHeight,
            this.messages[0]
        );
        container.appendChild(initialElement);

        interval(3000)
            .pipe(
                takeUntil(this.destroy$),
                map(res => res + 1)
            )
            .subscribe(index => {
                const previousIndex = index - 1;
                const message = this.messages[index % this.messages.length];

                const element = this.createElement(
                    index,
                    container.offsetHeight,
                    message
                );

                this.setElementStyle(element);
                container.appendChild(element);

                anime({
                    targets: '.content-item',
                    background: this.getRandomColor(),
                    translateY: -container.offsetHeight,
                    easing: 'linear',
                    duration: 600,
                    complete: () => {
                        const currentElement: HTMLElement = this.getElement(
                            `.item-${index}`
                        );
                        this.setElementStyle(currentElement);

                        const previousElement = this.getElement(
                            `.item-${previousIndex}`
                        );
                        previousElement.remove();
                    },
                });
            });
    }

    private getElement(id: string): HTMLElement {
        return document.querySelector(id);
    }

    private createElement(
        index: number,
        elementHeight: number,
        message: string
    ) {
        const el = document.createElement('div');
        el.className =
            'text-center text-italic text-uppercase text-bold content-item item-' +
            index;
        el.style.cssText = `min-height: ${elementHeight}px !important; padding-top: 15px;`;
        el.innerText = message;

        return el;
    }

    private setElementStyle(element: HTMLElement) {
        element.style.cssText += 'transform: translateY(0);';
    }

    private getRandomColor() {
        const colors = [
            '#f45342',
            '#f4a341',
            '#fcf014',
            '#5cfc11',
            '#10eacd',
            '#0f9ce2',
            '#ff517c',
        ];
        const randomNumber = Math.random() * colors.length;
        const random = parseInt('' + randomNumber, 10);

        return colors[random];
    }
}
