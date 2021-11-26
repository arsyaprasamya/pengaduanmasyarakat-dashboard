import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Super Admin',
    'Pelapor',
    'Lembaga',
    'Divisi Lembaga',
    'Sub-divisi Lembaga',
    'Bagian Lembaga',
    'User Lembaga'
  ])
}));

export default users;
