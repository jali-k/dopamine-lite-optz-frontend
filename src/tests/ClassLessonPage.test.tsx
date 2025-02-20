import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import LessonsPage from '../pages/ClassLessonsPage';
import { lessonsService_dev } from '../services/lessons';

const mockStore = configureStore([]);
const store = mockStore({});

const mockLessonsData = [
  { 
    id: '1', 
    title: 'Lesson 1', 
    description: 'Description for lesson 1', 
    createdAt: '2025-02-01', 
    handler: 'John Doe', 
    lesson: '1',  // Convert to string
    classId: 'class1', 
    date: '2025-02-01', 
    tutor: 'John Doe', 
    updatedAt: '2025-02-01' 
  },
  { 
    id: '2', 
    title: 'Lesson 2', 
    description: 'Description for lesson 2', 
    createdAt: '2025-02-02', 
    handler: 'Jane Doe', 
    lesson: '2',  // Convert to string
    classId: 'class2', 
    date: '2025-02-02', 
    tutor: 'Jane Doe', 
    updatedAt: '2025-02-02' 
  },
];



lessonsService_dev.getLessonsByClassId = () => Promise.resolve(mockLessonsData);

describe('LessonsPage Component', () => {
  it('renders the lesson title correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChakraProvider value={defaultSystem}>
            <LessonsPage />
          </ChakraProvider>
        </MemoryRouter>
      </Provider>
    );

    // Ensure the title is correctly displayed
    expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument();
  });
  
  
});
