import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import LessonPage from '../pages/LessionPage';

const mockStore = configureStore([]);
const store = mockStore({});

describe('LessonPage Component', () => {
  it('renders the lesson title correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>
            <LessonPage />
          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

    // Ensure the title is correctly displayed
    expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument();
  });



  it('renders lesson metadata correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>
            <LessonPage />
          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

    // Check for metadata fields
    expect(await screen.findByText(/last updated/i)).toBeInTheDocument();
    expect(await screen.findByText(/about this lesson/i)).toBeInTheDocument();
  });
});
