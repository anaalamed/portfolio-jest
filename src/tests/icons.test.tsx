import Icons from '../view/Icons';
import ReactDom from 'react-dom'


describe('Icons component tests', () => {
    // ---------------------------- set up ------------------------------
    let container: HTMLDivElement

    // do before each test
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<Icons />, container);
    })

    // do after each test
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const links = container.querySelectorAll('a');
        expect(links).toHaveLength(3);
    })

})