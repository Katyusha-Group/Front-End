import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import ModalProfileHeader from './ModalProfileHeader'
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders main page correctly', () => {
  it('should render the ModalProfileHeader component without crashing', () => {
    render(<ContextInfo><Router.BrowserRouter><ModalProfileHeader /></Router.BrowserRouter></ContextInfo>);
  });
});