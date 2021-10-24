import Hero, { Button } from '../view/Hero/Hero';
import ReactDom from 'react-dom';

import { cleanup, render } from '@testing-library/react'

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div)
})

// it('renders button correctly', () => {
//     const { getByTestId } = render(<Button label="about me" />);
//     console.log(getByTestId("button"));
//     expect(getByTestId("button")).toHaveTextContent("about me");
// })

// it('matches snapshot', () => {
//     const tree = renderer.create(<Button></Button>).toJ
// })