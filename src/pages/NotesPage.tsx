// src/pages/NotesPage.tsx
import {
  VStack,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Icon,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { FaFilePdf } from 'react-icons/fa';

export default function NotesPage() {
  const pdfNotes = [
    {
      title: 'Cell Structure Notes',
      fileName: 'cell_structure.pdf',
      size: '2.4 MB',
      uploadDate: '2024-03-15'
    },
    {
      title: 'DNA Replication Guide',
      fileName: 'dna_replication.pdf',
      size: '1.8 MB',
      uploadDate: '2024-03-16'
    },
    {
      title: 'Photosynthesis Overview',
      fileName: 'photosynthesis.pdf',
      size: '3.1 MB',
      uploadDate: '2024-03-17'
    }
  ];

  return (
    <Text fontSize="xl" color="gray.600"> Notes</Text>
  );
}