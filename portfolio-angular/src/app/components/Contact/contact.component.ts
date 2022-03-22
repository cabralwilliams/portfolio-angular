import { Component } from "@angular/core";

@Component({
    selector: "contact",
    templateUrl: "./contact.component.html"
})
export class Contact {
    validateInfo(event) {
        if(event.target.getAttribute('name') === 'email') {
            if(!/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(event.target.value.trim())) {
                document.querySelector('#errorMessage').textContent = 'Invalid email address - please try again.';
            } else {
                document.querySelector('#errorMessage').textContent = '';
            }
        } else if(event.target.getAttribute('name') === 'contact-name' || event.target.getAttribute('name') === 'message') {
            if(!event.target.value.trim()) {
                document.querySelector('#errorMessage').textContent = 'Neither the name nor the message can be empty.';
            } else {
                document.querySelector('#errorMessage').textContent = '';
            }
        } else {
            document.querySelector('#errorMessage').textContent = '';
        }
    }
}