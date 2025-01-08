import React, { useState } from 'react';
import { Box, Container, VStack, Heading, Button, Input, Textarea, Text, HStack } from "@chakra-ui/react";
import { useParams, useNavigate } from 'react-router-dom';
import { lessonsService_dev } from "@/services/lessons";
import { toaster } from "@/components/ui/toaster";

const colors = {
  primary: "#00712D",
  background: "#FFFBE6",
};

export default function AdminCreateLessonPage() {
  const { clsid } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    lesson: '',
    tutor: '',
    handler: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await lessonsService_dev.createLesson({ 
        ...formData, 
        classId: clsid!,
        date: new Date().toISOString()
      });
      toaster.create({ title: 'Lesson created successfully', type: 'success' });
      navigate(`/admin/classes/${clsid}/lessons`);
    } catch (error) {
      toaster.create({ title: 'Error creating lesson', type: 'error' });
    }
  };

  return (
    <Box bg={colors.background} minH="100vh" py={8}>
      <Container maxW="container.md">
        <VStack gap={8} align="stretch">
          <Heading color={colors.primary}>Create New Lesson</Heading>
          <form onSubmit={handleSubmit}>
            <VStack gap={4}>
              <Box w="full">
                <Text mb={2} color={colors.primary}>Belonging lesson</Text>
                <Input
                  color='black'
                  value={formData.lesson}
                  onChange={(e) => setFormData({...formData, lesson: e.target.value})}
                  required
                />
              </Box>
              <Box w="full">
                <Text color={colors.primary} mb={2}>Title</Text>
                <Input
                  color='black'
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </Box>
              <Box w="full">
                <Text color={colors.primary} mb={2}>Description</Text>
                <Textarea
                  color='black'
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
              </Box>
              <Box w="full">
                <Text color={colors.primary} mb={2}>Handler</Text>
                <Input
                  color='black'
                  value={formData.handler}
                  onChange={(e) => setFormData({...formData, handler: e.target.value})}
                  required
                />
              </Box>
              <Box w="full">
                <Text color={colors.primary} mb={2}>Tutor</Text>
                <Input
                  color='black'
                  value={formData.tutor}
                  onChange={(e) => setFormData({...formData, tutor: e.target.value})}
                  required
                />
              </Box>
              <HStack justify="flex-end" w="full">
                <Button onClick={() => navigate(-1)} mr={3}>Cancel</Button>
                <Button type="submit" bg={colors.primary} color="white">
                  Create Lesson
                </Button>
              </HStack>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
}