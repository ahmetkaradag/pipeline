import {render, screen} from '@testing-library/react';
import Footer from './Footer';

test('renders learn react link', () => {
    render(<Footer/>);
    const header = screen.getByText(/Footer/i);
    expect(header).toBeInTheDocument();
});
