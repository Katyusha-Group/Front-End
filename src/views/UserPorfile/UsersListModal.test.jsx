import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import UsersListModal from './UsersListModal';
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders main page correctly', () => {
  it('should render the UsersListModal component without crashing', () => {
    render(<ContextInfo><Router.BrowserRouter><UsersListModal /></Router.BrowserRouter></ContextInfo>);
  });
});