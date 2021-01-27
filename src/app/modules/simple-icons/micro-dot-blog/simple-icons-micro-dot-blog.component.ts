import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-micro-dot-blog',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Micro.blog icon</title><path d="M12 0C5.4 0 0 4.9 0 10.95 0 17 5.4 21.9 12 21.9c1.4 0 2.85-.25 4.2-.7.15-.05.35 0 .45.1 1 1.35 2.55 2.3 4.25 2.7l.25-.1v-.3a4.65 4.65 0 01.2-5.9C22.9 15.85 24 13.5 24 10.95 24 4.9 18.55 0 12 0zm-.05 5.2c.15 0 .3.1.35.25L13.55 9l3.85.1c.15 0 .3.1.35.2.05.15 0 .3-.15.4L14.55 12l1.1 3.6c.05.15 0 .3-.15.4h-.4l-3.15-2.15L8.8 16h-.4c-.15-.1-.2-.25-.15-.4l1.1-3.6L6.3 9.7c-.15-.1-.2-.25-.15-.4.05-.1.2-.2.35-.2l3.85-.1 1.25-3.55c.05-.15.2-.25.35-.25z"/></svg>`,
    styles: []
})
export class SimpleIconsMicroDotBlogComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FF8800';
    @Input() className: string = 'simple-icons-micro-dot-blog'
    constructor() {}
    ngOnInit(): void {}
}