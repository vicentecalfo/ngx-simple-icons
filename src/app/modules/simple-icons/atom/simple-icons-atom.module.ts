import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsAtomComponent } from './simple-icons-atom.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsAtomComponent ],
    exports:      [ SimpleIconsAtomComponent ],
    bootstrap:    []
})
export class SimpleIconsAtomModule {}
