import { Component } from '@angular/core';
import { TypedModelComponent } from '../base/TypedModelComponent';
import { AbstractSweRange } from '../../../model/swe/AbstractSweRange';

@Component({
    selector: 'swe-abstract-range',
    template: require('./AbstractSweRangeComponent.html')
})
export class AbstractSweRangeComponent extends TypedModelComponent<AbstractSweRange> {
    protected createModel(): AbstractSweRange {
        return undefined;
    }
}
