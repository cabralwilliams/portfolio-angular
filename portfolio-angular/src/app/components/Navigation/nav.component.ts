import { Component } from "@angular/core";

@Component({
    selector: "navigation",
    templateUrl: "./navigation.component.html"
})
export class NavComponent {
    selectedLink: string = "/about";
    siteLinks = [
        {
            name: "About Me",
            href: "/about",
            isActive: true
        },
        {
            name: "Portfolio",
            href: "/portfolio",
            isActive: false
        },
        {
            name: "Contact",
            href: "/contact",
            isActive: false
        },
        {
            name: "Resume",
            href: "/resume",
            isActive: false
        }
    ];

    onSelect(siteLink) {
        this.selectedLink = siteLink.href;
        for(let i = 0; i < this.siteLinks.length; i++) {
            if(this.siteLinks[i].href === this.selectedLink) {
                this.siteLinks[i].isActive = true;
            } else {
                this.siteLinks[i].isActive = false;
            }
        }
    }
}