import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { showData } from './data';

jest.mock("./api/fetchShow");

test("renders with data", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  render(<App />);
  const fetchingDataMessage = screen.getByText(/fetching data/i);
  expect(fetchingDataMessage).not.toBeNull();
  expect(fetchingDataMessage).toBeInTheDocument();
})

test("renders the sections displayed from api call", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  render(<App />);
  screen.debug();
  await waitFor(() => {
    expect(screen.getByText(/a love letter/i)).toBeInTheDocument();
  })
})

test("renders the season list when dropdown is clicked", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/a love letter/i)).toBeInTheDocument();
  });
  userEvent.click(screen.getByText(/select a season/i));
})

test("renders the episodes when season is clicked", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText(/a love letter/i)).toBeInTheDocument();
  });
  screen.debug();
  userEvent.click(screen.getByText(/select a season/i));
  userEvent.click(screen.getByText(/season 1/i));
  await waitFor(() => {
    expect(screen.getByText(/chapter one: the vanishing of will byers/i)).toBeInTheDocument();
  })
})

