import {Component} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {MyInput} from "./my-input";


@Component({
    selector: "my-app",
    directives: [MyInput, FORM_DIRECTIVES],
    template:   `
                <div>MY APP</div>
                <my-input></my-input>

                <h1>{{text}}</h1>
                <input type="text" [(ngModel)]="text" />
                `
})
export class MyApp {}


