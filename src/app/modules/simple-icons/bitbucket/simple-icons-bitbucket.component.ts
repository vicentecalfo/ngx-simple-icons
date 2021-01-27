import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-bitbucket',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bitbucket icon</title><path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z"/></svg>`,
    styles: []
})
export class SimpleIconsBitbucketComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#0052CC';
    @Input() className: string = 'simple-icons-bitbucket'
    constructor() {}
    ngOnInit(): void {}
}
