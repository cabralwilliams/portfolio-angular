import { Component } from "@angular/core";

@Component({
    selector: "reloaded-footer",
    templateUrl: "./footer.component.html"
})
export class ReloadedFooter {
    bgColor = "#191e19";
    lineColor = "#46d22d";
    lineWidth = 0.5;
    opacity = 0.7;
    
    createDisplayBools() {
        let output = [];
        for(let i = 0; i < 6; i++) {
            let nextOb = { bools: [], translateX: 0, translateY: 0 };
            for(let j = 0; j < 22; j++) {
                nextOb.bools.push(Math.random() < 0.65);
            }
            if(i > 2) {
                nextOb.translateX = 10;
            } 
            if(i%3 === 1) {
                nextOb.translateY = 10;
            } else if(i%3 === 2) {
                nextOb.translateY = 20;
            } 
            output.push(nextOb);
        }
        return output;
    }

    greenCodeData = this.createDisplayBools();
    greenCodeData2 = this.createDisplayBools();
}