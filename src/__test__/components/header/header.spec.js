import React from 'react';
import { render } from '@testing-library/react';
import Header from "../../../components/header/Header";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

test('deve mostrar o cabeçalho', () => {
    const {getByRole} = render(<Header/>);
    const headerElement = getByRole('banner');
    expect(headerElement).toBeInTheDocument();
});