import { Component } from '@angular/core';
import { AbstractSWE } from '../../../model/swe/AbstractSWE';
import { TypedModelComponent } from '../base/TypedModelComponent';

@Component({
    selector: 'swe-abstract',
    template: require('./AbstractSWEComponent.html')
})
export class AbstractSWEComponent extends TypedModelComponent<AbstractSWE> {
    protected createModel(): AbstractSWE {
        return undefined;
    }
}
