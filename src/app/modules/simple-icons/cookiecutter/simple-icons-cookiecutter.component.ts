import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-cookiecutter',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Cookiecutter icon</title><path d="M12.806 0a12 12 0 0 0-4.512.885A12 12 0 0 0 .858 12.978a12 12 0 0 0 9.303 10.724 12 12 0 0 0 13.021-5.656L12.817 12l9.244-7.65A12 12 0 0 0 12.806 0zM9.218 2.143c.34-.003.701.123 1.193.378.847.437 1.013 1.027.36 1.277-.487.187-2.457.177-2.932-.015-.526-.212-.38-.781.32-1.24.402-.263.72-.396 1.059-.4zm4.077 4.052a1.292 1.292 0 0 1 .022 0 1.292 1.292 0 0 1 1.292 1.291 1.292 1.292 0 0 1-1.292 1.292 1.292 1.292 0 0 1-1.292-1.292 1.292 1.292 0 0 1 1.27-1.291zm-6.259 3.8c1.033 0 1.788.434 1.788 1.028 0 .694-1.961 2.384-2.766 2.384-.365 0-.727-.166-.804-.368-.078-.203.117-.97.434-1.706.505-1.176.67-1.338 1.348-1.338zm8.637 9.187c.372 0 1.362 2.316 1.186 2.775-.201.524-1.046.467-1.564-.105-.676-.747-.404-2.67.378-2.67z"/></svg>`,
    styles: []
})
export class SimpleIconsCookiecutterComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#D4AA00';
    @Input() className: string = 'simple-icons-cookiecutter'
    constructor() {}
    ngOnInit(): void {}
}
