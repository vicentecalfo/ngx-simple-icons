import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-zotero',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Zotero icon</title><path d="M6.266 16.933L2.238 18.76 2.206 5.189 11.913.788l.008 3.532H7.388l-1.13 1.33v3.63h5.66l-5.17 5.71-.48 1.29-.002.653zm6.512-1.963h.263l-.187-.085-.076.085zm-.682-10.65h4.762l1.13 1.33v3.52l-.05.05-4.961 5.529.486.221h3.395l1.13 1.31v.752l1.551.707 2.24 1.02.015-13.57L12.088.788l.008 3.532zm10.38.43l-.017 14.528L12.025 24 1.558 19.279 1.524 4.75 12 0l10.476 4.75zm-.506.383a.09.09 0 0 0-.052-.08L12.036.573c-.012-.006-.023.002-.036.002-.012 0-.024-.008-.036-.003l-9.881 4.48a.087.087 0 0 0-.051.08l.032 13.763c0 .03.015.058.04.074l.009.003.002.003 9.874 4.453c.012.005.024.008.036.008s.024-.003.036-.008l9.842-4.454.002-.003.009-.003a.089.089 0 0 0 .041-.074l.015-13.761zM17.988 19.91H6.258l.008-2.785-3.903 1.77 9.662 4.357 9.63-4.358-3.666-1.67v2.686zm-6.309-3.734h5.985l-.89-1.031h-4.167l-.928 1.031zM6.574 5.552h11.092l-.893-1.053H7.467l-.893 1.053zm11.234.167H6.432v3.389h6.505l-6.505 7.235v3.389h11.376v-3.389h-6.505l6.505-7.235V5.719zM6.883 15.108l-.297.814 5.976-6.647h-.395l-5.284 5.833z"/></svg>`,
    styles: []
})
export class SimpleIconsZoteroComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#CC2936';
    @Input() className: string = 'simple-icons-zotero'
    constructor() {}
    ngOnInit(): void {}
}
