import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-jira',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Jira icon</title><path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"/></svg>`,
    styles: []
})
export class SimpleIconsJiraComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0052CC';
    @Input() className: string = 'simple-icons-jira'
    constructor() {}
    ngOnInit(): void {}
}