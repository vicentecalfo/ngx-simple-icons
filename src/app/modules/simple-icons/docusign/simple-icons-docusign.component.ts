import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-docusign',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>DocuSign icon</title><path d="M9.517 3.31h4.966v6.621h3.31L12 16.552 6.207 9.931h3.31V3.31zM0 19.034h24v1.655H0v-1.655z"/></svg>`,
    styles: []
})
export class SimpleIconsDocusignComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#FFCC22';
    @Input() className: string = 'simple-icons-docusign'
    constructor() {}
    ngOnInit(): void {}
}
