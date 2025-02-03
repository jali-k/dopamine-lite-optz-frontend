import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { theme } from '../themes/amplifytheme';
import HomePage from '../pages/HomePage';
import { vi } from 'vitest';

const mockStore = configureStore([]);


vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: vi.fn(), inView: true }),
}));


describe('HomePage Component', () => {
  it('renders the homepage correctly for unauthenticated users', () => {
    const store = mockStore({
      user: { isAuthenticated: false },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>

              <HomePage />

          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Discover the Wonder of Biology/i)).toBeInTheDocument();
    expect(screen.getByText(/Interactive lessons and resources/i)).toBeInTheDocument();
  });

  it('redirects authenticated users to dashboard', async () => {
    const store = mockStore({
      user: { isAuthenticated: true },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={
              <ChakraProvider value={defaultSystem}>

                  <HomePage />

              </ChakraProvider>
            } />
            <Route path="/dashboard" element={<div data-testid="dashboard">Dashboard Mock</div>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.queryByText(/Discover the Wonder of Biology/i)).not.toBeInTheDocument();
      expect(screen.getByTestId('dashboard')).toBeInTheDocument();
    });
  });

  it('renders key sections for unauthenticated users', async () => {
    const store = mockStore({
      user: { isAuthenticated: false },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>
            <ThemeProvider theme={theme}>
              <HomePage />
            </ThemeProvider>
          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

    expect(await screen.findByText(/Comprehensive Learning Experience/i)).toBeInTheDocument();
    expect(await screen.findByText(/Explore our wide range of biology topics/i)).toBeInTheDocument();
  });
});