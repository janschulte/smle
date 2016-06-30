import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import {TimeInstant} from '../../../model/gml/TimeInstant';
import {Calendar} from 'primeng/components/calendar/calendar';

const DATE_TIME_SEPARATOR = ' ';

@Component({
    selector: 'gml-time-instant',
    template: require('./TimeInstantComponent.html'),
    directives: [Calendar]
})
export class TimeInstantComponent implements OnChanges {
    @Input()
    public model: TimeInstant;
    @Input()
    public minDateTime: TimeInstant;
    @Input()
    public maxDateTime: TimeInstant;

    @Output()
    public modelChange: EventEmitter<TimeInstant> = new EventEmitter<TimeInstant>();

    private dateTimeString: string;
    private dateFormat: string = 'dd.mm.yy';
    private timeFormat: string = 'HH:mm';
    private datepicker: any = $.datepicker;

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}): any {
        var modelChange = changes['model'];
        if (!modelChange) {
            return;
        }

        var dateTime = this.model;
        this.dateTimeString = this.getFormattedDate(dateTime) + DATE_TIME_SEPARATOR + this.getFormattedTime(dateTime);
    }

    private getTimeObject(dateTime: TimeInstant): any {
        return {
            hour: dateTime.getHours(),
            minute: dateTime.getMinutes()
        };
    }

    private getFormattedDate(dateTime: TimeInstant): string {
        return this.datepicker.formatDate(this.dateFormat, dateTime);
    }

    private getFormattedTime(dateTime: TimeInstant): string {
        var timeObject = this.getTimeObject(dateTime);
        return this.datepicker.formatTime(this.timeFormat, timeObject);
    }

    private getMinFormattedDate(): string {
        return this.minDateTime ? this.getFormattedDate(this.minDateTime) : null;
    }

    private getMinFormattedTime(): string {
        var minDate = this.minDateTime;
        var currentDate = this.model;

        if (!minDate) {
            return null;
        }

        return minDate.getFullYear() === currentDate.getFullYear()
        && minDate.getMonth() === currentDate.getMonth()
        && minDate.getDay() === currentDate.getDay()
            ? this.getFormattedTime(minDate)
            : this.getFormattedTime(new Date(0));
    }

    private getMaxFormattedDate(): string {
        return this.maxDateTime ? this.getFormattedDate(this.maxDateTime) : null;
    }

    private getMaxFormattedTime(): string {
        var maxDate = this.maxDateTime;
        var currentDate = this.model;

        if (!maxDate) {
            return null;
        }

        return maxDate.getFullYear() === currentDate.getFullYear()
        && maxDate.getMonth() === currentDate.getMonth()
        && maxDate.getDay() === currentDate.getDay()
            ? this.getFormattedTime(new Date(1970, 0, 1, 23, 59, 59))
            : this.getFormattedTime(maxDate);
    }

    private onStringDateChange(newDateTimeString: string): void {
        var newDateTimeArray = newDateTimeString.split(DATE_TIME_SEPARATOR);
        var newDateString = newDateTimeArray[0];
        var newTimeString = newDateTimeArray[1];

        var newDate = this.datepicker.parseDate(this.dateFormat, newDateString);
        var newTimeObject = this.datepicker.parseTime(this.timeFormat, newTimeString);

        newDate.setHours(newTimeObject.hour, newTimeObject.minute);

        this.dateTimeString = newDateTimeString;
        this.modelChange.emit(newDate);
    }
}
