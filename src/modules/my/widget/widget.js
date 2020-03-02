import { LightningElement, api } from 'lwc';
const API_URL = '/api/data.json';

export default class Widget extends LightningElement {
    @api active = false;
    loaded = false;
    data = {
        title: '',
        label: '',
        content: []
    };
    error;

    // Fire API request - widget will only show when loaded
    connectedCallback() {
        fetch(API_URL)
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.data = json;
                this.loaded = true;
            })
            .catch(error => {
                this.error = error;
            });
    }

    // Title depends on expanded state
    get ctaTitle() {
        return this.active ? this.data.title : this.data.label;
    }

    // Call to action link class should be active if expanded
    get ctaClass() {
        return this.active ? 'active' : null;
    }

    // Return tips array from API
    get tips() {
        return this.data.content.map((val, idx, arr) => {
            val.showUrl = idx === 0;
            val.showSeperator = idx !== 0 && idx < arr.length - 1;
            return val;
        });
    }

    // Return description from API
    get description() {
        return this.data.content;
    }

    // Toggle widget on call to action button press
    handleCtaClick() {
        this.active = !this.active;
    }
}
