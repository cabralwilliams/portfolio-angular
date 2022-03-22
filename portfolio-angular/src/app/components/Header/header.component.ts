import { Component } from "@angular/core";

@Component({
    selector: "ang-header",
    templateUrl: "./header.html"
})
export class AngHeader {
    selectedLink: string = "#about";
    siteLinks = [
        {
            name: "About Me",
            href: "#about",
            isActive: true
        },
        {
            name: "Portfolio",
            href: "#portfolio",
            isActive: false
        },
        {
            name: "Contact",
            href: "#contact",
            isActive: false
        },
        {
            name: "Resume",
            href: "#resume",
            isActive: false
        }
    ];
}