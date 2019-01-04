import { Component, Input, OnInit } from '@angular/core';
import { Timeseries } from '@helgoland/core';

import { FacetSearch } from '../facet-search';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  @Input()
  public facetSearchService: FacetSearch;

  public results: Timeseries[];

  constructor() { }

  ngOnInit() {
    if (!this.facetSearchService) {
      console.error('ResultListComponent needs a facet search service');
    }
    this.facetSearchService.onResultsChanged.subscribe(ts => this.results = ts);
    this.results = this.facetSearchService.getFilteredResults();
  }

}
