import { PipeTransform, Pipe } from '@angular/core';
import { IMedication } from './medication';

@Pipe({
    name: "orderBy"
})

export class MedicationOrderPipe implements PipeTransform{

    transform(value: IMedication[], args: string): IMedication[]{
        console.log(args)
        value.sort((a: any, b: any) => {            
            if (a[args] < b[args]) {
                return -1;
            } else if (a[args] > b[args]) {
                return 1;
            } else {
                return 0;
            }
        });
        return value;
    }
}