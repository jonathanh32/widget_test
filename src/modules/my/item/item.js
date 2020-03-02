import { LightningElement, api } from 'lwc';
const AVAILABLE_ICONS = ['article', 'guide', 'pdf'];
const LOCAL_STORAGE_KEY = 'widget_visited';

export default class Item extends LightningElement {
    @api uid;
    @api text;
    @api type;
    @api url;
    visited = [];

    // Get visit data from local storage
    connectedCallback() {
        var visitedString = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (visitedString !== null) {
            this.visited = visitedString.split(',');
        }
    }

    // Title element CSS class depends on item type
    get titleClass() {
        var iconName = this.type.toLowerCase();

        if (AVAILABLE_ICONS.indexOf(iconName) >= 0) {
            return 'title title-' + iconName;
        }

        return 'title title-' + iconName;
    }

    // Open link, record action in localstorage
    handleLinkClick(e) {
        var itemId = e.target.dataset.id;

        // Update local storage
        if (this.visited.indexOf(itemId) === -1) {
            this.visited.push(itemId);
            localStorage.setItem(LOCAL_STORAGE_KEY, this.visited.join(','));
        }

        return true;
    }
}
