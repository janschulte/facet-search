import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatasetApiInterface, DatasetImplApiInterface, HelgolandCoreModule } from '@helgoland/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    }),
    HelgolandCoreModule
  ],
  providers: [
    { useClass: DatasetImplApiInterface, provide: DatasetApiInterface }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
