import { EventEmitter } from '@angular/core';
import { Timeseries } from '@helgoland/core';

export interface FacetSearch {
    onResultsChanged: EventEmitter<Timeseries[]>;
    getParameterList(type: ParameterFacetType, sort: ParameterFacetSort): FacetParameter[];
    selectParameter(type: ParameterFacetType, parameter: FacetParameter): any;
    setTimeseries(timeseries: Timeseries[]);
    getFilteredResults(): Timeseries[];
}

export enum ParameterFacetType {
    category = 'category',
    phenomenon = 'phenomenon',
    procedure = 'procedure',
    feature = 'feature',
    offering = 'offering'
}

export enum ParameterFacetSort {
    none = 'none',
    ascAlphabet = 'ascAlphabet',
    descAlphabet = 'descAlphabet',
    ascCount = 'ascCount',
    descCount = 'descCount',
}

export interface FacetParameter {
    label: string;
    count: number;
    selected: boolean;
}
