import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-theirishtimes',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>The Irish Times icon</title><path d="M9.636 4.093V8.33h.42c.18-1.156.614-2.047 1.3-2.67.487-.448 1.27-.672 2.35-.672h1.197V17.22c0 .79-.043 1.28-.127 1.465-.116.263-.272.45-.473.557-.277.165-.642.246-1.096.246h-.518v.417h8.26v-.417h-.517c-.443 0-.793-.077-1.049-.228-.256-.15-.428-.327-.516-.528-.088-.203-.131-.706-.131-1.512V4.988h1.197c.743 0 1.264.07 1.56.208.532.254.95.595 1.256 1.023.305.427.584 1.13.834 2.11H24V4.093zM7.74 19.488c-.438 0-.787-.076-1.044-.227-.259-.15-.43-.328-.519-.529-.088-.202-.132-.705-.132-1.512V6.778c0-.79.041-1.278.127-1.464.114-.264.272-.45.472-.559.277-.162.641-.244 1.096-.244h.519v-.418H0v.418h.521c.441 0 .79.076 1.05.227.258.15.43.329.515.53.085.2.129.705.129 1.51v10.444c0 .79-.044 1.279-.128 1.465-.109.263-.264.45-.463.557-.28.164-.647.245-1.103.245H0v.418h8.26v-.418h-.52Z"/></svg>`,
    styles: []
})
export class SimpleIconsTheirishtimesComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#000000';
    @Input() className: string = 'simple-icons-theirishtimes'
    constructor() {}
    ngOnInit(): void {}
}
