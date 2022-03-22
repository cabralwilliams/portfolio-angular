import { Component } from "@angular/core";
const bgColor = "#191e19";

@Component({
    selector: "reloaded",
    templateUrl: './reloaded.component.html'
})
export class Reloaded {
    bgColor = "#191e19";
    lineColor = "#46d22d";
    lineWidth = 0.5;
    opacity = 0.7;
    
    createDisplayBools() {
        let output = [];
        for(let i = 0; i < 36; i++) {
            let nextOb = { bools: [], translateX: 20, translateY: 10 };
            for(let j = 0; j < 22; j++) {
                nextOb.bools.push(Math.random() < 0.65);
            }
            if(i > 29) {
                nextOb.translateX = 120;
            } else if(i > 23) {
                nextOb.translateX = 100;
            } else if(i > 17) {
                nextOb.translateX = 80;
            } else if(i > 11) {
                nextOb.translateX = 60;
            } else if(i > 5) {
                nextOb.translateX = 40;
            }
            if(i%6 === 5) {
                nextOb.translateY = 60;
            } else if(i%6 === 4) {
                nextOb.translateY = 50;
            } else if(i%6 === 3) {
                nextOb.translateY = 40;
            } else if(i%6 === 2) {
                nextOb.translateY = 30;
            } else if(i%6 === 1) {
                nextOb.translateY = 20;
            }
            output.push(nextOb);
        }
        return output;
    }

    greenCodeData = this.createDisplayBools();
}