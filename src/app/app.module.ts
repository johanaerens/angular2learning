import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FirmsComponent} from "./firms/firms.component";
import {FirmsPipePipe} from './firms/firms-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirmsComponent,
    FirmsPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
