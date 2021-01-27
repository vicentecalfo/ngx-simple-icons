import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-spinnaker',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spinnaker icon</title><path d="M21.343 0C17.785 8.741 11.317 21.987.815 23.882c10.806 1.064 19.481-5.327 21.646-8.066C24.627 13.076 21.343 0 21.343 0zM.815 23.882L.8 23.88v.004l.015-.003zM17.182 5.8C15.409 10.988 10.477 18.547 5.4 20.39c.885.033 1.74-.019 2.561-.132 3.989-3.221 7.14-8.037 9.577-12.771-.193-.981-.356-1.687-.356-1.687z"/></svg>`,
    styles: []
})
export class SimpleIconsSpinnakerComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#139BB4';
    @Input() className: string = 'simple-icons-spinnaker'
    constructor() {}
    ngOnInit(): void {}
}