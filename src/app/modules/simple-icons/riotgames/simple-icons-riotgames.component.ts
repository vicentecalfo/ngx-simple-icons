import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-riotgames',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Riot Games icon</title><path d="M12.534 21.77l-1.09-2.81 10.52.54-.451 4.5zM15.06 0L.307 6.969 2.59 17.471H5.6l-.52-7.512.461-.144 1.81 7.656h3.126l-.116-9.15.462-.144 1.582 9.294h3.31l.78-11.053.462-.144.82 11.197h4.376l1.54-15.37Z"/></svg>`,
    styles: []
})
export class SimpleIconsRiotgamesComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#D32936';
    @Input() className: string = 'simple-icons-riotgames'
    constructor() {}
    ngOnInit(): void {}
}