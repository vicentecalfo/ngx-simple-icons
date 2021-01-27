import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsWebglComponent } from './simple-icons-webgl.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsWebglComponent ],
    exports:      [ SimpleIconsWebglComponent ],
    bootstrap:    []
})
export class SimpleIconsWebglModule {}
