import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-sonarsource',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>SonarSource icon</title><path d="M15.71.4l-.467.737c3.476 2.14 6.284 5.28 7.955 8.89L24 9.694c-1.671-3.81-4.68-7.086-8.29-9.292zM8.49.87l-.333 1.069c6.952 2.006 12.434 7.62 14.039 14.44l1.069-.268C21.527 8.958 15.778 2.942 8.49.87zM0 2.607v1.338c10.964 0 19.922 8.824 19.922 19.654h1.337C21.26 12.034 11.7 2.607 0 2.607z"/></svg>`,
    styles: []
})
export class SimpleIconsSonarsourceComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#CB3032';
    @Input() className: string = 'simple-icons-sonarsource'
    constructor() {}
    ngOnInit(): void {}
}
