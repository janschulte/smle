import {Component, ComponentResolver, ViewContainerRef} from '@angular/core';
import {OnlineResource} from '../../../../model/iso/gmd/OnlineResource';
import {CardComponent} from '../../basic/CardComponent';
import {EditorComponent} from '../../base/EditorComponent';

@Component({
    selector: 'iso-online-resource',
    template: require('./OnlineResourceComponent.html'),
    styles: [require('../../styles/editor-component.scss')],
    directives: [CardComponent]
})
export class OnlineResourceComponent extends EditorComponent<OnlineResource> {
    constructor(componentResolver: ComponentResolver, viewContainerRef: ViewContainerRef) {
        super(componentResolver, viewContainerRef);
    }

    protected createModel(): OnlineResource {
        return new OnlineResource();
    }
}
