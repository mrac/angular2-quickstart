import {Component, bootstrap, FORM_DIRECTIVES} from "angular2/angular2";
import {MyInput} from "./my-input";


@Component({
    selector: "my-app",
    directives: [MyInput, FORM_DIRECTIVES],
    template: `<div>MY APP</div>
               <my-input></my-input>

               <h1>{{text}}</h1>
               <input type="text" [ng-model]="text" (ng-model-change)="text = $event" />
               `
})
class MyApp {}

bootstrap(MyApp);


