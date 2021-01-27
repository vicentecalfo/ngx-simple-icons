import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-ibm',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img"><title>IBM icon</title><path d="M0 16.144h4.667v.668H0zM0 14.862h4.667v.67H0zM1.33 13.583h2.003v.671H1.33zM1.33 12.305h2.003v.67H1.33zM1.33 11.025h2.003v.671H1.33zM1.33 9.744h2.003v.671H1.33zM0 8.466h4.667v.67H0zM0 7.187h4.667v.67H0zM5.332 15.532h7.177c.12-.206.212-.433.267-.67H5.333v.67zM11.95 12.305H6.667v.67h5.843a2.67 2.67 0 00-.558-.67zM6.666 11.025v.671h5.285c.223-.188.41-.414.559-.671H6.666zM12.509 8.466H5.332v.67h7.443a2.891 2.891 0 00-.266-.67zM10.303 7.187H5.332v.67h6.685a2.522 2.522 0 00-1.714-.67zM6.666 9.744h2v.671h-2zM10.667 10.415h2.092c.059-.214.09-.44.09-.671h-2.182v.671zM6.666 13.583h1.999v.671h-2zM10.667 13.583v.671h2.182c0-.23-.031-.457-.09-.671h-2.092zM5.332 16.807l4.97.007c.667 0 1.268-.257 1.717-.67H5.332v.663zM13.334 16.144h3.332v.668h-3.332zM13.334 14.862h3.332v.67h-3.332zM14.665 13.583h2v.671h-2zM14.665 12.305h2v.67h-2zM17.594 8.466h-4.26v.67h4.49zM17.152 7.187h-3.818v.669h4.048zM20.665 16.144H24v.668h-3.335zM20.665 14.862H24v.67h-3.335zM20.665 13.583h2v.671h-2zM20.665 12.305h2v.67h-2zM20.665 11.696h2v-.671h-3.811l-.188.542-.188-.542H14.665v.671h2v-.616l.213.616h3.575l.212-.616zM22.666 9.744h-3.37l-.23.671h3.6zM20.183 7.187l-.231.669H24v-.669zM18.666 16.807l.23-.663h-.461zM18.224 15.532h.884l.238-.67h-1.357zM17.775 14.254h1.782l.235-.671h-2.253zM17.327 12.975h2.679l.229-.67h-3.138zM14.665 10.415h3.602l-.231-.671h-3.371zM19.51 9.136H24v-.67h-4.262z"/></svg>`,
    styles: []
})
export class SimpleIconsIbmComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#054ADA';
    @Input() className: string = 'simple-icons-ibm'
    constructor() {}
    ngOnInit(): void {}
}
