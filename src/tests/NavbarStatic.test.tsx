import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { theme } from '../themes/amplifytheme';
import NavbarStatic from '../components/NavbarStatic';

const mockStore = configureStore([]);

describe('NavbarStatic Component', () => {
  it('renders the navbar correctly', () => {
    const store = mockStore({
      user: { isAuthenticated: false },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>
            <ThemeProvider theme={theme}>
              <NavbarStatic />
            </ThemeProvider>
          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

    // Check for the logo text
    expect(screen.getByText(/Dopamine Lite/i)).toBeInTheDocument();

    // Check if the buttons are present
    expect(screen.getByRole('button', { name: /classes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /profile/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign out/i })).toBeInTheDocument();
  });

  it('renders the logo image', () => {
    const store = mockStore({
      user: { isAuthenticated: false },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>
            <ThemeProvider theme={theme}>
              <NavbarStatic />
            </ThemeProvider>
          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

    // Check if the logo image is rendered
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});
