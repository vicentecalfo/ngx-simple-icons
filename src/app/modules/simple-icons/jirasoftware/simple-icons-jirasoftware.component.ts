import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-jirasoftware',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Jira Software icon</title><path d="M12.004 0c-2.35 2.395-2.365 6.185.133 8.585l3.412 3.413-3.197 3.198a6.501 6.501 0 0 1 1.412 7.04l9.566-9.566a.95.95 0 0 0 0-1.344L12.004 0zm-1.748 1.74L.67 11.327a.95.95 0 0 0 0 1.344C4.45 16.44 8.22 20.244 12 24c2.295-2.298 2.395-6.096-.08-8.533l-3.47-3.469 3.2-3.2c-1.918-1.955-2.363-4.725-1.394-7.057z"/></svg>`,
    styles: []
})
export class SimpleIconsJirasoftwareComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0052CC';
    @Input() className: string = 'simple-icons-jirasoftware'
    constructor() {}
    ngOnInit(): void {}
}
