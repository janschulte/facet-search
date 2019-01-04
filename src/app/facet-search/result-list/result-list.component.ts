import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output()
  public selected: EventEmitter<Timeseries> = new EventEmitter();

  public timeseries: Timeseries[];

  constructor() { }

  ngOnInit() {
    if (!this.facetSearchService) {
      console.error('ResultListComponent needs a facet search service');
    }
    this.facetSearchService.onResultsChanged.subscribe(ts => this.timeseries = ts);
    this.timeseries = this.facetSearchService.getFilteredResults();
  }

  public timeseriesSelected(ts: Timeseries) {
    this.selected.emit(ts);
  }

}
