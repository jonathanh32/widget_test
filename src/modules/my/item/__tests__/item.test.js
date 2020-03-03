import { createElement } from 'lwc';
import MyItem from 'my/item';

describe('my-widget', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('contains a link.', () => {
        const element = createElement('my-item', {
            is: MyItem
        });

        document.body.appendChild(element);

        expect(element.shadowRoot.querySelectorAll('a')).toHaveLength(1);
    });
});
