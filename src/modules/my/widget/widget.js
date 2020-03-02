import { LightningElement, api } from 'lwc';

export default class Widget extends LightningElement {
    @api active = false;

    get ctaTitle() {
        return this.active ? 'Congrats on your launch!' : 'Launch tips';
    }

    get ctaClass() {
        return this.active ? 'active' : null;
    }

    // Toggle widget on call to action button press
    handleCtaClick() {
        this.active = !this.active;
    }
}