import { Component } from "@angular/core";

@Component({
    selector: "about",
    templateUrl: "./about.component.html"
})
export class About {
    avatarNumber: number = Math.floor(Math.random()*2);
}