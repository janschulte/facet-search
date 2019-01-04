import { Component, Input, OnInit } from '@angular/core';

import { FacetParameter, FacetSearch, ParameterFacetSort, ParameterFacetType } from '../facet-search';

@Component({
  selector: 'app-parameter-facet',
  templateUrl: './parameter-facet.component.html',
  styleUrls: ['./parameter-facet.component.scss']
})
export class ParameterFacetComponent implements OnInit {

  @Input()
  public facetSearchService: FacetSearch;

  @Input()
  public type: ParameterFacetType;

  @Input()
  public sort: ParameterFacetSort = ParameterFacetSort.descCount;

  public parameterList: FacetParameter[];

  constructor() { }

  ngOnInit() {
    if (!this.facetSearchService) {
      console.error('ParameterFacetComponent needs a facet search service');
    }
    if (!this.type) {
      console.error('ParameterFacetComponent needs a type');
    }
    this.facetSearchService.onResultsChanged.subscribe(() => this.fetchFacetParameter());
  }

  public toggleFacet(parameter: FacetParameter) {
    parameter.selected = !parameter.selected;
    this.facetSearchService.selectParameter(this.type, parameter);
  }

  private fetchFacetParameter() {
    this.parameterList = this.facetSearchService.getParameterList(this.type, this.sort);
  }

}
