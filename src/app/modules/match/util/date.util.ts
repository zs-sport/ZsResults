import { Injectable } from '@angular/core';

@Injectable()
export class DateUtil {

    constructor(){}

    getToday(): Date {
        let date = new Date();

        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        return date;
    }

    getTomorrow(): Date {
        let date = this.getToday();

        date.setDate(date.getDate() + 1);

        return date;
    }

    getPreviousDay(baseDate: Date): Date {
        let date = new Date(baseDate.getTime());

        date.setDate(baseDate.getDate() - 1);

        return date;
    }

    getNextDay(baseDate: Date): Date {
        let date = new Date(baseDate.getTime());

        date.setDate(baseDate.getDate() + 1);

        return date;
    }
  
}
