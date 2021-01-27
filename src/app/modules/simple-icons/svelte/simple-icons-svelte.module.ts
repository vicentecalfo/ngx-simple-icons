import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleIconsSvelteComponent } from './simple-icons-svelte.component';
 @NgModule({
    imports:      [ BrowserModule ],
    providers:    [],
    declarations: [ SimpleIconsSvelteComponent ],
    exports:      [ SimpleIconsSvelteComponent ],
    bootstrap:    []
})
export class SimpleIconsSvelteModule {}
