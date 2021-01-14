import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { showData } from './data';

// Tests:
// 1. That the App loads
// 2. API call is successful
// 3. Dropdown can be clicked "Select a season"
// 4. Season 1 can be clicked
// 5. Season 2 can be clicked
// 5. Season 3 can be clicked
// 5. Season 4 can be clicked

jest.mock("./api/fetchShow");

test("renders with data", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  // const { rerender, getByText } = render(<App />);
  // screen.debug();
  // await act(async () => {
  //   await rerender(<App />);
  //   const dropDown = getByText(/select a season/i);
  //   userEvent.click(dropDown);
  //   screen.debug()
  // })
})

