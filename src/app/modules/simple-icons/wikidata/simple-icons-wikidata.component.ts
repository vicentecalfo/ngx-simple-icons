import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-wikidata',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Wikidata icon</title><path d="M0 4.583v14.833h.865V4.583zm1.788 0v14.833h2.653V4.583zm3.518 0v14.832H7.96V4.583zm3.547 0v14.834h.866V4.583zm1.789 0v14.833h.865V4.583zm1.759 0v14.834h2.653V4.583zm3.518 0v14.834h.923V4.583zm1.788 0v14.833h2.653V4.583zm3.64 0v14.834h.865V4.583zm1.788 0v14.834H24V4.583Z"/></svg>`,
    styles: []
})
export class SimpleIconsWikidataComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#006699';
    @Input() className: string = 'simple-icons-wikidata'
    constructor() {}
    ngOnInit(): void {}
}
