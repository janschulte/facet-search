import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatasetApiInterface, DatasetImplApiInterface, HelgolandCoreModule } from '@helgoland/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { ParameterFacetComponent } from './facet-search/parameter-facet/parameter-facet.component';
import { ResultListComponent } from './facet-search/result-list/result-list.component';
import { ResultMapComponent } from './facet-search/result-map/result-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ParameterFacetComponent,
    ResultListComponent,
    ResultMapComponent,
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
