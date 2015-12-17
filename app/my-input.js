System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyInput;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyInput = (function () {
                function MyInput() {
                    this.myType = "text";
                    this.myValue = "initial value";
                }
                MyInput.prototype.onClick = function (myInput) {
                    myInput.value = "";
                    console.log("CLICK!");
                };
                MyInput = __decorate([
                    core_1.Component({
                        selector: "my-input",
                        template: "<input #my_input [type]=\"myType\" [value]=\"myValue\" />\n               <button (click)=\"onClick(my_input)\">X</button>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyInput);
                return MyInput;
            })();
            exports_1("MyInput", MyInput);
        }
    }
});
//# sourceMappingURL=my-input.js.map