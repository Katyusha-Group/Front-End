import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import UserPage from './404.jsx';
import * as Router from "react-router-dom";

describe('Renders main page correctly', () => {
    it('Should render the page correctly', async () => {
        render(<Router.BrowserRouter><UserPage /></Router.BrowserRouter>);
        const h1 = await screen.queryByText('Vite + React');
        expect(h1).not.toBeNull();
    });
});