import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import UserPage from './404.jsx';
import * as Router from "react-router-dom";
import ContextInfo from '../contexts/InfoContext.jsx';

describe('Renders main page correctly', () => {
    it('Should render the page correctly', async () => {
        render(<ContextInfo><Router.BrowserRouter><UserPage /></Router.BrowserRouter></ContextInfo>);
    });
});