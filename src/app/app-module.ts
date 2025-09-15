import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contacto } from './contacto/contacto';
import { Conocenos } from './conocenos/conocenos';
import { About } from './about/about';

@NgModule({
  declarations: [App, Contacto, Conocenos, About],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App]
})

export class AppModule {}