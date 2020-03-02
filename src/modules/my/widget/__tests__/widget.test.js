import { createElement } from 'lwc';
import MyWidget from 'my/widget';

describe('my-widget', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('is collapsed by default.', () => {
        const element = createElement('my-widget', {
            is: MyWidget
        });
        document.body.appendChild(element);

        expect(
            element.shadowRoot.querySelectorAll('div')
        ).toHaveLength(0);
    });

});
