import { AccessGroup } from '../types/access-group.types';
import { api } from './api';

const dummyAccessGroups: AccessGroup[] = [
  {
    accessGroupId: 'group-001',
    name: '2026 Revision',
    accessList: []
  },
  {
    accessGroupId: 'group-002',
    name: 'Teachers',
    accessList: ['jalikuma86@gmail.com', 'test@gmail.com']
  }
];

const email = "test@email.com"

export const accessGroupService = {
  getGroups: () => api.request<AccessGroup[]>(`/access-groups?email=${encodeURIComponent(email)}`),

  getGroupById: (id: string) => api.request<AccessGroup>(`/access-groups/${id}?email=${encodeURIComponent(email)}`),

  createGroup: (data: Omit<AccessGroup, 'id'>) =>
    api.request<AccessGroup>(`/access-groups?email=${encodeURIComponent(email)}`, {
      method: 'POST',
      body: JSON.stringify(data)
    }),

  updateGroup: (id: string, data: Partial<AccessGroup>) =>
    api.request<AccessGroup>(`/access-groups/${id}?email=${encodeURIComponent(email)}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),

  deleteGroup: (id: string) =>
    api.request(`/access-groups/${id}?email=${encodeURIComponent(email)}`, { method: 'DELETE' })
};

export const accessGroupService_dev = {
  getGroups: () => Promise.resolve(dummyAccessGroups),

  getGroupById: (id: string) => {
    const group = dummyAccessGroups.find(g => g.accessGroupId === id);
    return group ? Promise.resolve(group) : Promise.reject(new Error('Group not found'));
  },

  createGroup: (data: Omit<AccessGroup, 'id'>) => {
    const newGroup = {
      ...data,
      id: `group-${dummyAccessGroups.length + 1}`
    };
    dummyAccessGroups.push(newGroup);
    return Promise.resolve(newGroup);
  },

  updateGroup: (id: string, data: Partial<AccessGroup>) => {
    const group = dummyAccessGroups.find(g => g.accessGroupId === id);
    if (group) {
      Object.assign(group, data);
      return Promise.resolve(group);
    }
    return Promise.reject(new Error('Group not found'));
  },

  deleteGroup: (id: string) => {
    const index = dummyAccessGroups.findIndex(g => g.accessGroupId === id);
    if (index !== -1) {
      dummyAccessGroups.splice(index, 1);
      return Promise.resolve();
    }
    return Promise.reject(new Error('Group not found'));
  }
};