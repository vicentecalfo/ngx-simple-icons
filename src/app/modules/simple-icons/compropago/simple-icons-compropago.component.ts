import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-compropago',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ComproPago icon</title><path d="M18.104 3.07a5.896 5.896 0 0 0-4.183 1.738l-9.247 9.247c-.587.587-.587 1.526 0 2.084.588.587 1.527.587 2.084 0l.089-.088.822-.822 6.956-6.957 1.35-1.35.089-.088a2.905 2.905 0 0 1 2.084-.852 2.905 2.905 0 0 1 2.935 2.936 2.91 2.91 0 0 1-.851 2.084l-8.894 8.923c1.145 1.145 2.994 1.145 4.168.03l6.751-6.752c2.32-2.348 2.319-6.076.03-8.395a5.896 5.896 0 0 0-4.183-1.739zm-7.489.142a3.017 3.017 0 0 0-2.095.833l-6.78 6.78a5.9 5.9 0 0 0 0 8.366 5.9 5.9 0 0 0 8.365 0l9.246-9.246c.587-.587.587-1.526 0-2.084-.587-.587-1.526-.587-2.084 0l-.088.088-.822.822-6.986 6.957-1.438 1.438a2.905 2.905 0 0 1-2.084.851 2.905 2.905 0 0 1-2.936-2.935c0-.793.294-1.526.852-2.084l8.923-8.924a2.939 2.939 0 0 0-2.073-.862z"/></svg>`,
    styles: []
})
export class SimpleIconsCompropagoComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#00AAEF';
    @Input() className: string = 'simple-icons-compropago'
    constructor() {}
    ngOnInit(): void {}
}
