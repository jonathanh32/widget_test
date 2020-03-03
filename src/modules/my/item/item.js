import { LightningElement, api } from 'lwc';
const AVAILABLE_ICONS = ['article', 'guide', 'pdf'];
const LOCAL_STORAGE_KEY = 'widget_visited';

export default class Item extends LightningElement {
    @api uid = 1;
    @api text = 'Example';
    @api type = 'Article';
    @api url = 'https://example.com';
    @api showUrl = false;
    visited = false;

    // Determine if item is visited from localStorage
    connectedCallback() {
        var itemId = this.uid.toString();
        this.visited = this.visitedSites.indexOf(itemId) !== -1;
    }

    // Title element CSS class depends on item type and visit state
    get titleClass() {
        var iconName = this.type.toLowerCase();
        var className = 'title';

        if (AVAILABLE_ICONS.indexOf(iconName) >= 0) {
            className += ' title-' + iconName;
        }

        if (this.visited) {
            className += ' title-visited';
        }

        return className;
    }

    // Open link, record action in localstorage
    handleLinkClick() {
        var itemId = this.uid.toString();
        var arr = this.visitedSites.slice();

        this.visited = true;

        if (arr.indexOf(itemId) === -1) {
            arr.push(itemId);
            localStorage.setItem(LOCAL_STORAGE_KEY, arr.join(','));
        }

        return true;
    }

    // Retrieve visited sites from localStorage
    get visitedSites() {
        var data = null;

        // Gracefully break in the scenario localStorage is not available - e.g. tests
        if (typeof localStorage !== 'undefined') {
            data = localStorage.getItem(LOCAL_STORAGE_KEY);
        }

        return data === null ? [] : data.split(',');
    }
}
