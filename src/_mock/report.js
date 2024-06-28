import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// import { axios } from '@axios';

// export const users = await axios.get('https://').then((response) => response.data);


export const report = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: '',
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['Member', 'Non-Member']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));
