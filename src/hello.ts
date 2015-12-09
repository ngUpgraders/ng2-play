import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Tabs} from "./Tabs";
import {Tab} from "./Tab";

@Component({
    selector: 'hello-app',
    directives: [Tabs, Tab],
    template: `
            <div tabs>
                <div tab></div>
            </div>
    `
})
export class HelloApp {}

bootstrap(HelloApp);