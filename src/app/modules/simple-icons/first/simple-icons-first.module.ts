import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsFirstComponent } from './simple-icons-first.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsFirstComponent ],
    exports:      [ SimpleIconsFirstComponent ],
    bootstrap:    []
})
export class SimpleIconsFirstModule {}
