import {Directive, Optional, Host} from 'angular2/angular2';
import {Tabs} from './tabs';

@Directive({
    selector: '[tab]'
})
export class Tab {
    constructor(@Optional() tabs: Tabs) {
        console.log('Tabs:', tabs && tabs.name || "It Failed.");
    }
}