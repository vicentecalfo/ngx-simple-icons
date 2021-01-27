import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-netflix',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Netflix icon</title><path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/></svg>`,
    styles: []
})
export class SimpleIconsNetflixComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#E50914';
    @Input() className: string = 'simple-icons-netflix'
    constructor() {}
    ngOnInit(): void {}
}
