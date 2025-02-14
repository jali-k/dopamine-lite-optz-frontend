import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { theme } from '../themes/amplifytheme';
import LoginPage from '../pages/LoginPage';

const mockStore = configureStore([]);

describe('LoginPage Component', () => {
  it('renders the login page correctly', () => {
    const store = mockStore({
      user: { isAuthenticated: false },
    });

    render(
        <MemoryRouter>
            <Provider store={store}>
                <ChakraProvider value={defaultSystem}>
                        <ThemeProvider theme={theme}>
                            <LoginPage />
                        </ThemeProvider>

                </ChakraProvider>
            </Provider>
        </MemoryRouter>
    );

    expect(screen.getByText(/Dopamine Lite/i)).toBeInTheDocument();
    expect(screen.getByText(/Your journey to mastering biology starts here/i)).toBeInTheDocument();
  });

  it('renders the Authenticator component', async () => {
    const store = mockStore({
      user: { isAuthenticated: false },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
        <Provider store={store}>
                <ChakraProvider value={defaultSystem}>
                        <ThemeProvider theme={theme}>
                            <LoginPage />
                        </ThemeProvider>
                </ChakraProvider>
            </Provider>
        </MemoryRouter>
      </Provider>
    );

    expect(await screen.findByRole('button', { name: /sign in with google/i })).toBeInTheDocument();
  });

  it('redirects authenticated users to home page', () => {
    const store = mockStore({
      user: { isAuthenticated: true },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
        <Provider store={store}>
                <ChakraProvider value={defaultSystem}>
                        <ThemeProvider theme={theme}>
                            <LoginPage />
                        </ThemeProvider>
                </ChakraProvider>
            </Provider>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByText(/Dopamine Lite/i)).not.toBeInTheDocument();
  });
});
