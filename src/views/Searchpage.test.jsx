import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import Searchpage from './Searchpage.jsx';
import * as Router from "react-router-dom";
import ContextInfo from '../contexts/InfoContext.jsx';
describe('Renders main page correctly', () => {
  it('should render the UserPage component without crashing', () => {
    render(<ContextInfo><Router.BrowserRouter><Searchpage /></Router.BrowserRouter></ContextInfo>);
  });
});
