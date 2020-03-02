import { LightningElement, api } from 'lwc';
const AVAILABLE_ICONS = ['code', 'expand', 'mail', 'plus', 'share', 'trend'];

export default class Item extends LightningElement {
    @api text;
    @api type;
    @api url;

    // Title element CSS class depends on item type
    get titleClass() {
        var iconName = this.type.toLowerCase();

        if (AVAILABLE_ICONS.indexOf(iconName) > 0) {
            return 'title title-' + iconName;
        }

        return 'title title-mail';
    }
}
