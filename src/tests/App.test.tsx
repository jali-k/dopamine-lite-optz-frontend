import { render, screen } from '@testing-library/react';
import App from '../App';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../state/slices/userSlice';
import { vi } from 'vitest';

// Mock react-intersection-observer to prevent errors
vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: vi.fn(), inView: true }),
}));

// 🛠 Create a test-specific Redux store with an unauthenticated user
const mockStore = configureStore({
  reducer: { user: userReducer },
  preloadedState: {
    user: { isAuthenticated: false, isLoading: false, username: '', userId: '', email: '', loginId: '' }, // ✅ Mock as unauthenticated
  },
});

test('redirects to login when unauthenticated', async () => {
  render(
    <Provider store={mockStore}>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </Provider>
  );

  screen.debug();

  expect(await screen.findByRole('heading', { name: /dopamine lite/i })).toBeInTheDocument();
});