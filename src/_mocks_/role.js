import faker from 'faker';
import { sample } from 'lodash-es';
// utils
import { mockImgAvatar } from '../utils/mockImages';

const rolesArr = [
  'Super Admin',
  'Pelapor',
  'Lembaga',
  'Divisi Lembaga',
  'Sub-divisi Lembaga',
  'Bagian Lembaga',
  'User Lembaga'
];

const roles = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: rolesArr[index],
  status: sample(['active', 'banned'])
}));

export default roles;
