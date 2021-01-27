import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsAbstractComponent } from './simple-icons-abstract.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsAbstractComponent ],
    exports:      [ SimpleIconsAbstractComponent ],
    bootstrap:    []
})
export class SimpleIconsAbstractModule {}
