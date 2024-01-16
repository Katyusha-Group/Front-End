import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders main page correctly', () => {
  it('should render the Timeline component without crashing', () => {
    render(<ContextInfo><Router.BrowserRouter><Timeline /></Router.BrowserRouter></ContextInfo>);
  });
});
