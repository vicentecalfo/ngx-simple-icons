import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-workplace',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Workplace icon</title><path d="M12.725 0C11.114 0 9.55.317 8.078.943a11.892 11.892 0 00-3.793 2.573A11.986 11.986 0 00.79 12a11.986 11.986 0 003.496 8.484 11.892 11.892 0 003.793 2.573c1.472.626 3.042.943 4.652.943.867 0 1.718-.094 2.565-.28v-2.534a9.524 9.524 0 01-2.565.353 9.406 9.406 0 01-6.71-2.795A9.502 9.502 0 013.24 12a9.5 9.5 0 012.778-6.744 9.398 9.398 0 016.707-2.795c4.439 0 8.037 3.618 8.037 8.082 0 1.647-.49 3.181-1.332 4.459l-2.09-5.166c-.306-.755-.67-1.895-2.059-1.895-1.387 0-1.75 1.14-2.054 1.895l-1.922 4.771-2.578-6.544h-2.71l3.213 7.95c.326.807.68 1.897 2.077 1.897 1.395 0 1.747-1.09 2.072-1.896l1.904-4.727 1.914 4.727c.387.973.797 1.894 2.07 1.894.903 0 1.475-.583 1.788-.959a10.54 10.54 0 002.156-6.406C23.21 4.72 18.516 0 12.725 0Z"/></svg>`,
    styles: []
})
export class SimpleIconsWorkplaceComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#20252D';
    @Input() className: string = 'simple-icons-workplace'
    constructor() {}
    ngOnInit(): void {}
}