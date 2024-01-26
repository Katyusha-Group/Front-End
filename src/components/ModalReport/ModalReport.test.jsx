import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import ModalReport from './ModalReport'
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders main page correctly', () => {
  it('should render the ModalReport component without crashing', () => {
    render(<ContextInfo><Router.BrowserRouter><ModalReport /></Router.BrowserRouter></ContextInfo>);
  });
});