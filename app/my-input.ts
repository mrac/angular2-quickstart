import {Component, Output, EventEmitter} from "angular2/core";

@Component({
    selector: "my-input",
    template: `<input #my_input [type]="myType" [value]="myValue" />
               <button (click)="onClick(my_input)">X</button>`
})
export class MyInput {
    myType;
    myValue;

    constructor() {
        this.myType = "text";
        this.myValue = "initial value";
    }

    onClick(myInput) {
        myInput.value = "";
        console.log("CLICK!");
    }
}

