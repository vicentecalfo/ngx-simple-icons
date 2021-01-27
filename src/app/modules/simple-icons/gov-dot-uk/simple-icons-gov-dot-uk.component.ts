import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'simple-icons-gov-dot-uk',
    template: `<svg class="simple-icons {{ className }}" [style.width]="size" [style.height]="size" [style.fill]="color" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GOV.UK icon</title><path d="M2.4 13.031c.261-.64-.04-1.374-.682-1.638-.631-.262-1.362.049-1.623.688-.266.637.038 1.363.668 1.623.632.267 1.368-.037 1.623-.673m.858-3.244c.256-.636-.045-1.37-.691-1.639-.631-.258-1.367.053-1.639.687-.27.638.03 1.369.662 1.629.646.266 1.367-.039 1.639-.677m1.218-1.095c.645.264 1.367-.041 1.637-.675.256-.639-.045-1.375-.676-1.639-.632-.26-1.368.049-1.639.686-.271.638.046 1.367.678 1.626m3.156 1.053c.646.256 1.368-.045 1.64-.676.255-.646-.046-1.383-.691-1.639-.634-.271-1.37.046-1.626.676-.27.632.045 1.368.677 1.625M21.6 13.006c.271.631.993.933 1.639.661.632-.27.933-.992.661-1.639-.271-.646-1.008-.947-1.639-.676-.646.256-.945.992-.676 1.639m.752-2.57c.631-.257.931-.993.676-1.64-.271-.632-1.008-.946-1.639-.677-.646.271-.947.992-.676 1.639.256.632.993.933 1.624.678m-2.78-1.729c.631-.26.932-.992.672-1.631-.27-.646-1.001-.947-1.639-.686-.632.271-.937.992-.67 1.639.27.631 1.007.932 1.638.676m-3.412.858c.631-.271.932-1.007.677-1.639-.271-.646-.993-.947-1.64-.691-.631.271-.932 1.008-.661 1.639.271.632.993.932 1.64.662M9.425 4.935l.093 2.399 1.752-.923c.035.039.079.078.12.107-.181.718-.621 1.914-.896 2.575-.335.812.051 1.744.862 2.078.812.331 1.747-.06 2.083-.872.241-.57.121-1.188-.24-1.623-.391-.678-.781-1.533-.992-2.195.061-.045.105-.105.15-.15l1.895.977.09-2.39-1.969.632c-.016-.031-.031-.061-.045-.075l.766-2.181-2.33-.074.707 2.148c-.061.031-.105.076-.15.137l-1.896-.57zm11.896 9.109c.16.883.188 1.284-.015 1.859-.285-.286-.54-.807-.749-1.594l-.872 2.79c.52-.346.915-.565 1.364-.571-.815 1.713-1.819 2.146-2.461 2.021-.787-.158-1.15-.867-1.012-1.466.175-.842 1.052-1.052 1.448-.067.792-1.566-.52-2.078-1.368-1.624 1.313-1.28 1.468-2.426.426-3.836-1.464 1.106-1.49 2.21-.851 3.772-.842-.985-2.18-.466-1.713 1.113.627-.949 1.432-.346 1.298.565-.109.796-1.163 1.413-2.461 1.292-1.864-.165-1.954-1.457-1.983-2.525.451-.074 1.277.361 1.983 1.354l.286-2.962c-.767.782-1.474.946-2.24.962.271-.781 1.459-2.09 1.459-2.09l-3.729-.045s1.188 1.323 1.443 2.119c-.768-.014-1.459-.164-2.225-.961l.255 2.961c.706-.991 1.534-1.412 1.984-1.338-.045 1.053-.15 2.346-2.015 2.511-1.293.105-2.345-.526-2.449-1.323-.121-.901.691-1.503 1.307-.541.481-1.578-.856-2.104-1.699-1.127.662-1.564.647-2.676-.811-3.789-1.053 1.398-.902 2.541.405 3.85-.842-.467-2.165.029-1.383 1.607.405-.992 1.278-.766 1.458.076.12.601-.24 1.308-1.021 1.457-.646.121-1.639-.315-2.451-2.044.451.016.842.241 1.354.587l-.859-2.783c-.209.781-.48 1.295-.766 1.578-.186-.57-.166-.977.014-1.859l-1.803.613c.922 1.264 1.857 3.021 2.59 6.104 2.275-.376 6.157-.603 8.509-.603 2.345.015 6.229.285 8.494.691.767-3.081 1.713-4.825 2.646-6.073l-1.773-.646-.014-.015z"/></svg>`,
    styles: []
})
export class SimpleIconsGovDotUkComponent implements OnInit {
    @Input() size: string = '100%';
    @Input() color: string = '#005EA5';
    @Input() className: string = 'simple-icons-gov-dot-uk'
    constructor() {}
    ngOnInit(): void {}
}
