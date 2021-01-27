import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-myob',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MYOB icon</title><path d="M19.7695 7.0312c-.9023 0-1.0547.6094-1.0664.914v6.5977h.6328c.5157.0117.6328-.3164.6446-.5039v-.0234-.0234c.3984.4219.9492.6563 1.5703.6563 1.3476 0 2.4492-1.1719 2.4492-2.6953 0-1.547-1.1016-2.7188-2.4492-2.7188-.5977 0-1.125.2227-1.5117.6094V7.0313h-.2696zm.2696 4.9219c0-.8203.5859-1.4883 1.3125-1.4883.7382 0 1.3242.6445 1.3242 1.4883 0 .832-.586 1.4648-1.3242 1.4648-.7266 0-1.3125-.6562-1.3125-1.4648zm-6.961 0c0 1.5469 1.1602 2.707 2.5899 2.707 1.4414 0 2.6015-1.1601 2.6015-2.707 0-1.5586-1.1601-2.7422-2.6015-2.7422-1.4297 0-2.5899 1.1836-2.5899 2.7422zm1.3242 0c0-.8906.5743-1.5234 1.2657-1.5234.703 0 1.2773.6328 1.2773 1.5234 0 .8789-.5742 1.4883-1.2773 1.4883-.6914 0-1.2657-.6094-1.2657-1.4883zM3.961 9.949c-.3632-.457-.9375-.7382-1.6406-.7382C.9141 9.211 0 10.207 0 11.5312v3.0117h.4336c.293-.0234.8672-.164.8906-1.0312v-2.004c0-.5859.4102-.996.9961-.996.879 0 .961.7031.961.996v3.0352h.4335c.293-.0234.8672-.164.8907-1.0195v-2.0156c0-.586.4218-.9961.996-.9961.879 0 .9727.7031.9727.996v3.0352h.4336c.293-.0234.879-.164.8906-1.043v-1.9687c0-1.3594-.8437-2.3203-2.2968-2.3203-.668 0-1.2422.2813-1.6407.7383zm7.7461-.0233l-1.1133 3.0937-1.207-3.2109c-.1758-.5039-.6562-.4805-.6562-.4805H7.6992L9.75 14.379c0-.0117 0-.0117-.0117-.0117 0 0 .0117 0 .0117.0117s.0117.0234.0117.0234L9.75 14.379c.0703.1992.0469.3164-.0117.5156l-.0469.129c-.2344.5976-.5742.7617-1.289.7148v.0117l.4921 1.2187c.9258-.0234 1.6055-.328 2.0742-1.4765l2.461-6.164h-.9258c-.0469 0-.5742.0116-.7969.5976zm8.0625-2.8945c-.9023 0-1.0547.6093-1.0664.914v6.5977h.6328c.5157.0117.6328-.3164.6446-.504v-.0233-.0234c.3984.4218.9492.6562 1.5703.6562 1.3476 0 2.4492-1.1719 2.4492-2.6953 0-1.5469-1.1016-2.7188-2.4492-2.7188-.5977 0-1.125.2227-1.5117.6094V7.0313h-.2696zm.2696 4.9218c0-.8203.5859-1.4882 1.3125-1.4882.7382 0 1.3242.6445 1.3242 1.4882 0 .832-.586 1.4649-1.3242 1.4649-.7266 0-1.3125-.6563-1.3125-1.4649zm-6.961 0c0 1.547 1.1602 2.707 2.5899 2.707 1.4414 0 2.6015-1.16 2.6015-2.707 0-1.5586-1.1601-2.7421-2.6015-2.7421-1.4297 0-2.5899 1.1835-2.5899 2.7421zm1.3242 0c0-.8906.5743-1.5234 1.2657-1.5234.703 0 1.2773.6328 1.2773 1.5234 0 .879-.5742 1.4883-1.2773 1.4883-.6914 0-1.2657-.6094-1.2657-1.4883zM3.961 9.9492c-.3632-.457-.9375-.7382-1.6406-.7382C.9141 9.211 0 10.207 0 11.5313v3.0117h.4336c.293-.0234.8672-.164.8906-1.0313v-2.0039c0-.586.4102-.996.9961-.996.879 0 .961.703.961.996v3.0352h.4335c.293-.0234.8672-.164.8907-1.0195v-2.0157c0-.586.4218-.996.996-.996.879 0 .9727.703.9727.996v3.0352h.4336c.293-.0234.879-.164.8906-1.043v-1.9687c0-1.3594-.8437-2.3204-2.2968-2.3204-.668 0-1.2422.2813-1.6407.7383zm7.7461-.0234l-1.1133 3.0938-1.207-3.211c-.1758-.5039-.6562-.4804-.6562-.4804H7.6992L9.75 14.379c0-.0117 0-.0117-.0117-.0117 0 0 .0117 0 .0117.0117s.0117.0234.0117.0234L9.75 14.379c.0703.1992.0469.3164-.0117.5156l-.0469.1289c-.2344.5976-.5742.7617-1.289.7148v.0117l.4921 1.2188c.9258-.0234 1.6055-.3282 2.0742-1.4766l2.461-6.164h-.9258c-.0469 0-.5742.0117-.7969.5976z"/></svg>`,
    styles: []
})
export class SimpleIconsMyobComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#6100A5';
    @Input() className: string = 'simple-icons-myob'
    constructor() {}
    ngOnInit(): void {}
}
