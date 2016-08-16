"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var scroller_1 = require('./scroller');
var InfiniteScroll = (function () {
    function InfiniteScroll(element) {
        this.element = element;
        this._distanceDown = 2;
        this._distanceUp = 1.5;
        this._throttle = 3;
        this.scrollWindow = true;
        this._immediate = false;
        this._horizontal = false;
        this._alwaysCallback = false;
        this.scrolled = new core_1.EventEmitter();
        this.scrolledUp = new core_1.EventEmitter();
    }
    InfiniteScroll.prototype.ngOnInit = function () {
        var containerElement = this.scrollWindow ? window : this.element;
        this.scroller = new scroller_1.Scroller(containerElement, setInterval, this.element, this.onScrollDown.bind(this), this.onScrollUp.bind(this), this._distanceDown, this._distanceUp, {}, this._throttle, this._immediate, this._horizontal, this._alwaysCallback);
    };
    InfiniteScroll.prototype.ngOnDestroy = function () {
        this.scroller.clean();
    };
    InfiniteScroll.prototype.onScrollDown = function (data) {
        if (data === void 0) { data = {}; }
        this.scrolled.next(data);
    };
    InfiniteScroll.prototype.onScrollUp = function (data) {
        if (data === void 0) { data = {}; }
        this.scrolledUp.next(data);
    };
    InfiniteScroll.prototype.handleScroll = function (event) {
        this.scroller.handler();
    };
    __decorate([
        core_1.Input('infiniteScrollDistance'), 
        __metadata('design:type', Number)
    ], InfiniteScroll.prototype, "_distanceDown", void 0);
    __decorate([
        core_1.Input('infiniteScrollUpDistance'), 
        __metadata('design:type', Number)
    ], InfiniteScroll.prototype, "_distanceUp", void 0);
    __decorate([
        core_1.Input('infiniteScrollThrottle'), 
        __metadata('design:type', Number)
    ], InfiniteScroll.prototype, "_throttle", void 0);
    __decorate([
        core_1.Input('scrollWindow'), 
        __metadata('design:type', Boolean)
    ], InfiniteScroll.prototype, "scrollWindow", void 0);
    __decorate([
        core_1.Input('immediateCheck'), 
        __metadata('design:type', Boolean)
    ], InfiniteScroll.prototype, "_immediate", void 0);
    __decorate([
        core_1.Input('horizontal'), 
        __metadata('design:type', Boolean)
    ], InfiniteScroll.prototype, "_horizontal", void 0);
    __decorate([
        core_1.Input('alwaysCallback'), 
        __metadata('design:type', Boolean)
    ], InfiniteScroll.prototype, "_alwaysCallback", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], InfiniteScroll.prototype, "scrolled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], InfiniteScroll.prototype, "scrolledUp", void 0);
    __decorate([
        core_1.HostListener('scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], InfiniteScroll.prototype, "handleScroll", null);
    InfiniteScroll = __decorate([
        core_1.Directive({
            selector: '[infinite-scroll]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], InfiniteScroll);
    return InfiniteScroll;
    var _a;
}());
exports.InfiniteScroll = InfiniteScroll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5maW5pdGUtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0csZUFBZSxDQUFDLENBQUE7QUFDcEgseUJBQXlCLFlBQVksQ0FBQyxDQUFBO0FBS3RDO0lBY0Usd0JBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFYTixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUN4QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUM1QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDaEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDekIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFFaEQsYUFBUSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUVBLENBQUM7SUFFM0MsaUNBQVEsR0FBUjtRQUNFLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDeEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxJQUFTO1FBQVQsb0JBQVMsR0FBVCxTQUFTO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsSUFBUztRQUFULG9CQUFTLEdBQVQsU0FBUztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBR0QscUNBQVksR0FBWixVQUFhLEtBQVU7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBcENEO1FBQUMsWUFBSyxDQUFDLHdCQUF3QixDQUFDOzt5REFBQTtJQUNoQztRQUFDLFlBQUssQ0FBQywwQkFBMEIsQ0FBQzs7dURBQUE7SUFDbEM7UUFBQyxZQUFLLENBQUMsd0JBQXdCLENBQUM7O3FEQUFBO0lBQ2hDO1FBQUMsWUFBSyxDQUFDLGNBQWMsQ0FBQzs7d0RBQUE7SUFDdEI7UUFBQyxZQUFLLENBQUMsZ0JBQWdCLENBQUM7O3NEQUFBO0lBQ3hCO1FBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7dURBQUE7SUFDcEI7UUFBQyxZQUFLLENBQUMsZ0JBQWdCLENBQUM7OzJEQUFBO0lBRXhCO1FBQUMsYUFBTSxFQUFFOztvREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOztzREFBQTtJQXdCVDtRQUFDLG1CQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7c0RBQUE7SUF2Q3JDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7U0FDOUIsQ0FBQzs7c0JBQUE7SUF5Q0YscUJBQUM7O0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSxzQkFBYyxpQkF3QzFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsZXIgfSBmcm9tICcuL3Njcm9sbGVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2luZmluaXRlLXNjcm9sbF0nXG59KVxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwdWJsaWMgc2Nyb2xsZXI6IFNjcm9sbGVyO1xuXG4gIEBJbnB1dCgnaW5maW5pdGVTY3JvbGxEaXN0YW5jZScpIF9kaXN0YW5jZURvd246IG51bWJlciA9IDI7XG4gIEBJbnB1dCgnaW5maW5pdGVTY3JvbGxVcERpc3RhbmNlJykgX2Rpc3RhbmNlVXA6IG51bWJlciA9IDEuNTtcbiAgQElucHV0KCdpbmZpbml0ZVNjcm9sbFRocm90dGxlJykgX3Rocm90dGxlOiBudW1iZXIgPSAzO1xuICBASW5wdXQoJ3Njcm9sbFdpbmRvdycpIHNjcm9sbFdpbmRvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnaW1tZWRpYXRlQ2hlY2snKSBfaW1tZWRpYXRlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnaG9yaXpvbnRhbCcpIF9ob3Jpem9udGFsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnYWx3YXlzQ2FsbGJhY2snKSBfYWx3YXlzQ2FsbGJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgc2Nyb2xsZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzY3JvbGxlZFVwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gdGhpcy5zY3JvbGxXaW5kb3cgPyB3aW5kb3cgOiB0aGlzLmVsZW1lbnQ7XG4gICAgdGhpcy5zY3JvbGxlciA9IG5ldyBTY3JvbGxlcihjb250YWluZXJFbGVtZW50LCBzZXRJbnRlcnZhbCwgdGhpcy5lbGVtZW50LFxuICAgICAgICB0aGlzLm9uU2Nyb2xsRG93bi5iaW5kKHRoaXMpLCB0aGlzLm9uU2Nyb2xsVXAuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5fZGlzdGFuY2VEb3duLCB0aGlzLl9kaXN0YW5jZVVwLCB7fSwgdGhpcy5fdGhyb3R0bGUsXG4gICAgICAgIHRoaXMuX2ltbWVkaWF0ZSwgdGhpcy5faG9yaXpvbnRhbCwgdGhpcy5fYWx3YXlzQ2FsbGJhY2spO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3kgKCkge1xuICAgIHRoaXMuc2Nyb2xsZXIuY2xlYW4oKTtcbiAgfVxuXG4gIG9uU2Nyb2xsRG93bihkYXRhID0ge30pIHtcbiAgICB0aGlzLnNjcm9sbGVkLm5leHQoZGF0YSk7XG4gIH1cblxuICBvblNjcm9sbFVwKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2Nyb2xsZWRVcC5uZXh0KGRhdGEpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlU2Nyb2xsKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNjcm9sbGVyLmhhbmRsZXIoKTtcbiAgfVxufVxuIl19