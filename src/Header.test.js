import {render, screen} from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
    render(<Header/>);
    const header = screen.getByText(/Header/i);
    expect(header).toBeInTheDocument();
});
