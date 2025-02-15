import { Class, CreateClassDto, UpdateClassEmailsDto } from '../types/class.types';
import { api } from './api';

export const dummyClasses: Class[] = [
  {
    classId: "class-001",
    name: "Mathematics 101",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-01-05T10:00:00Z",
  },
  {
    classId: "class-002",
    name: "Physics 201",
    createdAt: "2024-02-01T09:00:00Z",
    updatedAt: "2024-02-10T12:00:00Z",
  },
];

const email = "test@email.com"

export const classesService = {
  getClasses: () => {
    console.log('getClasses');
    const data = api.request<Class[]>('/classes').then((data) => {
      return data;
    });
    return data;
  },

  getClassById: (id: string) => {
    return api.request<Class>(`/classes/${id}`);
  },

  createClass: (data: CreateClassDto) => {
    return api.request<Class>(`/classes?email=${encodeURIComponent(email)}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateClass: (id: string, data: Partial<CreateClassDto>) => {
    console.log('updateClass');
    console.log(data);
    return api.request<Class>(`/classes/${id}?email=${encodeURIComponent(email)}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  updateClassEmails: (data: UpdateClassEmailsDto) => {
    return api.request<Class>(`/classes/${data.classId}/emails`, {
      method: 'PUT',
      body: JSON.stringify({ emails: data.emails }),
    });
  },

  deleteClass: (classId: string) => {
    console.log('deleteClass');
    console.log(classId);
    return api.request(`/classes/${classId}?email=${encodeURIComponent(email)}`, {
      method: 'DELETE',
    });
  },
};

export const classesService_dev = {
  getClasses: () => {
    return Promise.resolve(dummyClasses);
  },

  getClassById: (id: string) => {
    const foundClass = dummyClasses.find((c) => c.classId === id);
    if (foundClass) {
      return Promise.resolve(foundClass);
    }
    return Promise.reject(new Error("Class not found"));
  },

  // createClass: (data: CreateClassDto) => {
  //   const newClass: Class = {
  //     ...data,
  //     id: `class-${dummyClasses.length + 1}`,
  //     createdAt: new Date().toISOString(),
  //     updatedAt: new Date().toISOString(),
  //     emails: data.emails || [],
  //   };
  //   dummyClasses.push(newClass);
  //   return Promise.resolve(newClass);
  // },

  // updateClassEmails: (data: UpdateClassEmailsDto) => {
  //   const foundClass = dummyClasses.find((c) => c.id === data.classId);
  //   if (foundClass) {
  //     foundClass.emails = data.emails;
  //     foundClass.updatedAt = new Date().toISOString();
  //     return Promise.resolve(foundClass);
  //   }
  //   return Promise.reject(new Error("Class not found"));
  // },

  deleteClass: (id: string) => {
    const index = dummyClasses.findIndex((c) => c.classId === id);
    if (index !== -1) {
      dummyClasses.splice(index, 1);
      return Promise.resolve();
    }
    return Promise.reject(new Error("Class not found"));
  },
};

