import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { usesProfileMe } from "../../hooks/useProfileMe.jsx";
import { useGetNotificationCount } from "../../hooks/useGetNotificationCount";
import ContextInfo from "../../contexts/InfoContext";
import * as  Router  from "react-router-dom";


describe('Sidebar', () => {
  it('renders logo and name', async () => {
    render(<ContextInfo><Router.BrowserRouter><Sidebar /></Router.BrowserRouter></ContextInfo>);
    
    const name = await screen.findByText(/کاتیوشا/i);
    expect(name).toBeInTheDocument();
    const logo = await screen.findByAltText(/logo/i);
    expect(logo).toBeInTheDocument();

  });
  it('renders name of icons', async () => {
    render(<ContextInfo><Router.BrowserRouter><Sidebar /></Router.BrowserRouter></ContextInfo>);
    const home= await screen.findByText(/خانه/i);
    expect(home).toBeInTheDocument();
    const profile= await screen.findByText(/پروفایل/i);
    const search= await screen.findByText(/جست جو/i);
    const chat= await screen.findByText(/چتیوشا/i);
    expect(profile).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(chat).toBeInTheDocument(); 
    
  });

  
  
});
