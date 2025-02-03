import { render, screen, waitFor } from '@testing-library/react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { store } from '../state'; // Adjust the import based on your path
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ClassesPage from '../pages/ClasesPage'; // Example of your component

// Mock the `getClasses` method with Vitest
vi.mock('../services/classes', () => ({
  classesService_dev: {
    getClasses: vi.fn().mockResolvedValue([
      {
        id: "class-001",
        name: "Mathematics 101",
        createdAt: "2024-01-01T08:00:00Z",
        updatedAt: "2024-01-05T10:00:00Z",
      },
      {
        id: "class-002",
        name: "Physics 201",
        createdAt: "2024-02-01T09:00:00Z",
        updatedAt: "2024-02-10T12:00:00Z",
      },
    ]),
  },
}));

describe('ClassesPage', () => {
  test('renders the classes page correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>
            <ClassesPage />
          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => screen.getByText('Mathematics 101'));
    expect(screen.getByText('Mathematics 101')).toBeInTheDocument();
  });
});
