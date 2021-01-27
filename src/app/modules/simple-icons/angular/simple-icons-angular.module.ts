import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsAngularComponent } from './simple-icons-angular.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsAngularComponent ],
    exports:      [ SimpleIconsAngularComponent ],
    bootstrap:    []
})
export class SimpleIconsAngularModule {}
