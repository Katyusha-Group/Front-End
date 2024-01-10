import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Admin_Searchbar from "./Admin_Searchbar";
import { useAllProfiles } from '../../hooks/useSearchprofile';
import { useSearchTweet } from '../../hooks/useSearchTweet';
import { test, it } from 'vitest';

// vi.mocked(useAllProfiles);
// vi.mocked(useSearchTweet);

test("Admin_Searchbar component", () => {
  // it("renders search field and search box", () => {
  //   render(<Admin_Searchbar IsUser={false} />);

  //   const searchField = screen.getByRole('textbox');
  //   expect(searchField).toBeInTheDocument();

  //   const searchBox = screen.getByTestId('search-box');
  //   expect(searchBox).toBeInTheDocument();
  // });

  // it("handles search query changes", async () => {
  //   render(<Admin_Searchbar IsUser={false} />);

  //   const searchField = screen.getByRole('textbox');
  //   const searchBox = screen.getByTestId('search-box');

  //   fireEvent.change(searchField, { target: { value: 'test query' } });

  //   // Assert that mock hooks are called with the correct query
  //   expect(useAllProfiles).toHaveBeenCalledWith('test query');
  //   expect(useSearchTweet).toHaveBeenCalledWith('test query');

  //   // Assert that loading indicators or results are displayed based on hook responses
  //   // ... (implement assertions based on your mock hook behavior)
  // });

  // // Add more tests for other scenarios, as discussed in previous responses
});