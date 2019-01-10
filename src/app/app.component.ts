import { Component } from '@angular/core';
import { DatasetApiInterface, Timeseries } from '@helgoland/core';
import { forkJoin } from 'rxjs';

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

  public categoryAutocomplete: string;
  public featureAutocomplete: string;
  public offeringAutocomplete: string;
  public phenomenonAutocomplete: string;
  public procedureAutocomplete: string;

  public resultCount: number;
  public showMap = true;

  constructor(
    private api: DatasetApiInterface,
    public facetSearch: FacetSearchService
  ) {

    forkJoin([
      this.api.getTimeseries('https://fluggs.wupperverband.de/sos2/api/v1/', { expanded: true }),
      // this.api.getTimeseries('http://sensorweb.demo.52north.org/sensorwebtestbed/api/v1/', { expanded: true }),
      // this.api.getTimeseries('http://sensorweb.demo.52north.org/sensorwebclient-webapp-stable/api/v1/', { expanded: true }),
      // this.api.getTimeseries('http://geo.irceline.be/sos/api/v1/', { expanded: true }),
      // this.api.getTimeseries('http://monalisasos.eurac.edu/sos/api/v1/', { expanded: true }),
    ]).subscribe(res => {
      const complete = [];
      res.forEach(e => complete.push(...e));
      this.facetSearch.setTimeseries(complete);
    });

    this.facetSearch.onResultsChanged.subscribe(ts => this.resultCount = ts.length);
  }

  public onSelectedTs(ts: Timeseries) {
    alert(`Clicked: ${ts.label}`);
  }

  public toggleResultView() {
    this.showMap = !this.showMap;
  }

}
