import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsStreamlitComponent } from './simple-icons-streamlit.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsStreamlitComponent ],
    exports:      [ SimpleIconsStreamlitComponent ],
    bootstrap:    []
})
export class SimpleIconsStreamlitModule {}
