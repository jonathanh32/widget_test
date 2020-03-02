import { LightningElement, api } from 'lwc';
const EXAMPLE_DATA = require('./data.json');

export default class Widget extends LightningElement {
    @api active = false;
    data = EXAMPLE_DATA;

    get ctaTitle() {
        return this.active ? 'Congrats on your launch!' : 'Launch tips';
    }

    get ctaClass() {
        return this.active ? 'active' : null;
    }

    get tips() {
        return EXAMPLE_DATA.content;
    }

    // Toggle widget on call to action button press
    handleCtaClick() {
        this.active = !this.active;
    }
}
