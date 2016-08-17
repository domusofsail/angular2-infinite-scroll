import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Scroller } from './scroller';
export declare class InfiniteScroll implements OnDestroy, OnInit {
    private element;
    scroller: Scroller;
    _distanceDown: number;
    _distanceUp: number;
    _throttle: number;
    scrollWindow: boolean;
    _immediate: boolean;
    _horizontal: boolean;
    _alwaysCallback: boolean;
    scrolled: any;
    scrolledUp: any;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onScrollDown(data?: {}): void;
    onScrollUp(data?: {}): void;
    handleScroll(event: any): void;
}
