import faker from 'faker';

import imgSrcHouse1 from '../../../assets/house-1.jpeg';
import imgSrcHouse2 from '../../../assets/house-2.jpeg';
import imgSrcHouse3 from '../../../assets/house-3.jpeg';
import imgSrcHouse4 from '../../../assets/house-4.jpeg';
import imgSrcHouse5 from '../../../assets/house-5.jpeg';
import imgSrcHouse6 from '../../../assets/house-6.jpeg';

export const NAME_ICON_HEART_FULL = 'heart-full';
export const NAME_ICON_KEY = 'key';
export const NAME_ICON_MAP_PIN = 'map-pin';
export const NAME_ICON_PROFILE_MAIL = 'profile-male';
export const NAME_ICON_EXPAND = 'expand';

const TEXT_HOUSE_1 = 'Beautiful Family House';
const TEXT_HOUSE_2 = 'Modern Glass Villa';
const TEXT_HOUSE_3 = 'Cosy Country House';
const TEXT_HOUSE_4 = 'HOUSE';
const TEXT_HOUSE_5 = 'HOUSE';
const TEXT_HOUSE_6 = 'HOUSE';

faker.random.number();

export default [
  {
    text: TEXT_HOUSE_1,
    imgSrc: imgSrcHouse1,
    nameCountry: 'USA',
    numArea: faker.random.number({ min: 325, max: 1000 }),
    numDollar: faker.random.number({ min: 1, max: 10 }),
  },
  {
    text: TEXT_HOUSE_2,
    imgSrc: imgSrcHouse2,
    nameCountry: 'UK',
    numArea: faker.random.number({ min: 325, max: 1000 }),
    numDollar: faker.random.number({ min: 1, max: 10 }),
  },
  {
    text: TEXT_HOUSE_3,
    imgSrc: imgSrcHouse3,
    nameCountry: 'CANADA',
    numArea: faker.random.number({ min: 325, max: 1000 }),
    numDollar: faker.random.number({ min: 1, max: 10 }),
  },
  {
    text: TEXT_HOUSE_4,
    imgSrc: imgSrcHouse4,
    nameCountry: 'KOREA',
    numArea: faker.random.number({ min: 325, max: 1000 }),
    numDollar: faker.random.number({ min: 1, max: 10 }),
  },
  {
    text: TEXT_HOUSE_5,
    imgSrc: imgSrcHouse5,
    nameCountry: 'JAPAN',
    numArea: faker.random.number({ min: 325, max: 1000 }),
    numDollar: faker.random.number({ min: 1, max: 10 }),
  },
  {
    text: TEXT_HOUSE_6,
    imgSrc: imgSrcHouse6,
    nameCountry: 'CHINA',
    numArea: faker.random.number({ min: 325, max: 1000 }),
    numDollar: faker.random.number({ min: 1, max: 10 }),
  },
];
