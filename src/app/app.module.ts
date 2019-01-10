import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatasetApiInterface, DatasetImplApiInterface, HelgolandCoreModule } from '@helgoland/core';
import { HelgolandMapModule } from '@helgoland/map';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { ParameterFacetComponent } from './facet-search/parameter-facet/parameter-facet.component';
import { ResultListComponent } from './facet-search/result-list/result-list.component';
import { ResultMapComponent } from './facet-search/result-map/result-map.component';
import { TimeFacetComponent } from './facet-search/time-facet/time-facet.component';
import { MatchFacetParameterLabelPipe } from './match-facet-parameter-label.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParameterFacetComponent,
    ResultListComponent,
    ResultMapComponent,
    TimeFacetComponent,
    MatchFacetParameterLabelPipe,
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
    NgbDatepickerModule,
    FormsModule,
    HelgolandCoreModule,
    HelgolandMapModule
  ],
  providers: [
    { useClass: DatasetImplApiInterface, provide: DatasetApiInterface }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
