import { Component } from '@angular/core';
import { DatasetApiInterface, Timeseries } from '@helgoland/core';

import { ParameterFacetType } from './facet-search/facet-search';
import { FacetSearchService } from './facet-search/facet-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public timeseries: Timeseries[];

  public categoryType: ParameterFacetType = ParameterFacetType.category;
  public featureType: ParameterFacetType = ParameterFacetType.feature;
  public offeringType: ParameterFacetType = ParameterFacetType.offering;
  public phenomenonType: ParameterFacetType = ParameterFacetType.phenomenon;
  public procedureType: ParameterFacetType = ParameterFacetType.procedure;

  public resultCount: number;
  public showMap = true;

  constructor(
    private api: DatasetApiInterface,
    public facetSearch: FacetSearchService
  ) {
    const url = 'http://fluggs.wupperverband.de/sos2/api/v1/';
    this.api.getTimeseries(url, { expanded: true }).subscribe(res => this.facetSearch.setTimeseries(res));

    this.facetSearch.onResultsChanged.subscribe(ts => this.resultCount = ts.length);
  }

  public onSelectedTs(ts: Timeseries) {
    alert(`Clicked: ${ts.label}`);
  }

  public toggleResultView() {
    this.showMap = !this.showMap;
  }

}
