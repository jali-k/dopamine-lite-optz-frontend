import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import NotesPage from '../pages/ClassNotesPage';

const mockStore = configureStore([]);
const store = mockStore({});

describe('NotesPage Component', () => {
  it('renders the notes title correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>
            <NotesPage />
          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

  
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent('Class Notes');
  });

  it('renders the notes list correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>
            <NotesPage />
          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => screen.getByText(/Cell Structure Notes/i));

    expect(screen.getByText('Cell Structure Notes')).toBeInTheDocument();
    expect(screen.getByText('Detailed guide on DNA replication process and key enzymes')).toBeInTheDocument();
  });




});
