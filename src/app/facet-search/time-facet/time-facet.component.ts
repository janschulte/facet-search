import { Component, Input, OnInit } from '@angular/core';
import { Timespan } from '@helgoland/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { FacetSearch } from '../facet-search';

@Component({
  selector: 'app-time-facet',
  templateUrl: './time-facet.component.html',
  styleUrls: ['./time-facet.component.scss']
})
export class TimeFacetComponent implements OnInit {

  @Input()
  public facetSearchService: FacetSearch;

  public from: NgbDateStruct;
  public to: NgbDateStruct;

  public selectedTimespan: Timespan;

  constructor(
    private calendar: NgbCalendar
  ) { }

  ngOnInit() {
    if (!this.facetSearchService) {
      console.error('TimeFacetComponent needs a facet search service');
    }
    this.facetSearchService.onResultsChanged.subscribe(() => this.fetchTime());
  }

  private fetchTime() {
    if (!this.selectedTimespan) {
      const timespan = this.facetSearchService.getTimespan();
      const from = new Date(timespan.from);
      this.from = {
        day: from.getDate(),
        month: from.getMonth() + 1,
        year: from.getFullYear()
      };
      const to = new Date(timespan.to);
      this.to = {
        day: to.getDate(),
        month: to.getMonth() + 1,
        year: to.getFullYear()
      };
    }
  }

  public clearTimespan() {
    this.selectedTimespan = null;
    this.facetSearchService.setTimespan(this.selectedTimespan);
  }

  public selectFromToday() {
    this.from = this.calendar.getToday();
    this.onChange();
  }

  public selectToToday() {
    this.to = this.calendar.getToday();
    this.onChange();
  }

  public onChange() {
    const from = new Date(this.from.year, this.from.month - 1, this.from.day);
    const to = new Date(this.to.year, this.to.month - 1, this.to.day);
    this.selectedTimespan = { from: from.getTime(), to: to.getTime() };
    this.facetSearchService.setTimespan(this.selectedTimespan);
  }

}
