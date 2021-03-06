import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { EditorComponent } from '../base/EditorComponent';
import { SimpleProcess } from '../../../model/sml/SimpleProcess';

@Component({
    selector: 'sml-simple-process',
    template: require('./SimpleProcessComponent.html'),
    styles: [require('../styles/editor-component.scss')]
})
export class SimpleProcessComponent extends EditorComponent<SimpleProcess> {
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
        super(componentFactoryResolver, viewContainerRef);
    }

    protected createModel(): SimpleProcess {
        return new SimpleProcess();
    }
}
