import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const lembagas = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  status: sample(['active', 'banned']),
  role: sample([
    'Lembaga',
    'Divisi Lembaga',
    'Sub-divisi Lembaga',
    'Bagian Lembaga',
    'User Lembaga'
  ])
}));

export default lembagas;
