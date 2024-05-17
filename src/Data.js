import cate_image_one from '../src/Asset/Images/1_1.jpg';
import cate_image_two from '../src/Asset/Images/av-2.jpg';
import cate_image_three from '../src/Asset/Images/av-3.jpg';
import cate_image_four from '../src/Asset/Images/av-4.jpg';
import cate_image_five from '../src/Asset/Images/av-5.jpg';
import cate_image_six from '../src/Asset/Images/av-6.jpg';
import cate_image_seven from '../src/Asset/Images/av-7.jpg';
import cate_image_eight from '../src/Asset/Images/av-8.jpg';
import img_avtar_one from '../src/Asset/Images/avtar-1.jpg';
import img_avtar_two from '../src/Asset/Images/2.jpg';
import img_avtar_three from '../src/Asset/Images/avtar-3.jpg';
import img_avtar_four from '../src/Asset/Images/avtar-4.jpg';
import img_avtar_five from '../src/Asset/Images/avtar-5.jpg';
import img_avtar_six from '../src/Asset/Images/avtar-6.jpg';
import img_avtar_seven from '../src/Asset/Images/avtar-7.jpg';
import img_avtar_eight from '../src/Asset/Images/avtar-3.jpg';

import { RxLockOpen2 } from 'react-icons/rx';
import {
  FaCheck,
  FaHamburger,
  FaRegClock,
  FaDollyFlatbed,
} from 'react-icons/fa';
import { IoLockClosedOutline } from 'react-icons/io5';
import { LiaCocktailSolid } from 'react-icons/lia';
import { CiDumbbell } from 'react-icons/ci';
import { BsCartCheck } from 'react-icons/bs';

export const collectionData = [
  {
    id: 1,
    kind: 'restaurant',
    linkImg: cate_image_one,
    store: 'Open Now',
    openicon: <RxLockOpen2 />,
    open_color: '#5ECFB1',
    rating: '4.8',
    review: '12 Review',
    textyellow: '#FACC39',
    textgrey: '#FACC39',
    textgrey_two: '#FACC39',
    profileimg: img_avtar_one,
    title: 'Luxary Resaturant',
    righticon: <FaCheck />,
    righticon_bg: '#5ECFB1',
    address: ' 27th Brooklyn New York, USA',
    text: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
    category: 'Restaurants',
    rest_icon: <FaHamburger />,
    rest_bg_color: '#F75C96',
    Price: '$$',
  },
  {
    id: 2,
    kind: 'event',
    linkImg: cate_image_two,
    store: '27 May 2019',
    openicon: <FaRegClock />,
    open_color: '#4DB7FE',
    rating: '4.2',
    review: '6 Review',
    textyellow: '#FACC39',
    textgrey_two: '#FACC39',
    textgrey: '#b2b0ab',
    profileimg: img_avtar_two,
    title: 'Rocko Band in Marquee Club',
    righticon: '',
    righticon_bg: '#fff',
    address: ' 75 Prince St,  NY, USA',
    text: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
    category: 'Events',
    rest_icon: <LiaCocktailSolid />,
    rest_bg_color: '#BE31E3',
    Price: '$$',
  },
  {
    id: 3,
    kind: 'fitness',
    linkImg: cate_image_three,
    store: 'Close Now',
    openicon: <IoLockClosedOutline />,
    open_color: '#F75C96',
    rating: '3.8',
    review: '4 Review',
    textyellow: '#FACC39',
    textgrey_two: '#b2b0ab',
    textgrey: '#b2b0ab',
    profileimg: img_avtar_three,
    title: 'Premium Fitness Gym',
    righticon: <FaCheck />,
    righticon_bg: '#5ECFB1',
    address: ' W 85th St, New York,  USA',
    text: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
    category: 'Fitness / Gym',
    rest_icon: <CiDumbbell />,
    rest_bg_color: '#4C97FD',
    Price: '$$',
  },
  {
    id: 4,
    kind: 'hotel',
    linkImg: cate_image_four,
    store: 'Open Now',
    openicon: <RxLockOpen2 />,
    open_color: '#5ECFB1',
    rating: '5.0',
    review: '5 Review',
    textyellow: '#FACC39',
    textgrey: '#FACC39',
    textgrey_two: '#FACC39',
    profileimg: img_avtar_four,
    title: 'MontePlaza Hotel',
    righticon: <FaCheck />,
    righticon_bg: '#5ECFB1',
    address: ' 70 Bright St New York, USA',
    text: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
    category: 'Restaurants',
    rest_icon: <FaDollyFlatbed />,
    rest_bg_color: '#F8BD38',
    Price: '$$',
  },
  {
    id: 5,
    kind: 'restaurant',
    linkImg: cate_image_five,
    store: 'Close Now',
    openicon: <IoLockClosedOutline />,
    open_color: '#F75C96',
    rating: '4.1',
    review: '26 Review',
    textyellow: '#FACC39',
    textgrey: '#b2b0ab',
    textgrey_two: '#FACC39',
    profileimg: img_avtar_five,
    title: 'Iconic Cafe in Manhattan',
    righticon: <FaCheck />,
    righticon_bg: '#5ECFB1',
    address: ' 40 Journal Square Plaza, NJ,  USA',
    text: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
    category: 'Restaurants',
    rest_icon: <FaHamburger />,
    rest_bg_color: '#F75C96',
    Price: '$$',
  },
  {
    id: 6,
    kind: 'hotel',
    linkImg: cate_image_six,
    store: 'Open Now',
    openicon: <RxLockOpen2 />,
    open_color: '#5ECFB1',
    rating: '4.8',
    review: '12 Review',
    textyellow: '#FACC39',
    textgrey: '#FACC39',
    textgrey_two: '#FACC39',
    profileimg: img_avtar_six,
    title: 'Handmade Shop',
    righticon: '',
    righticon_bg: '#fff',
    address: ' 34-42 Montgomery St , NY, USA',
    text: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
    category: 'Shopping',
    rest_icon: <BsCartCheck />,
    rest_bg_color: '#5ECFB1',
    Price: '$$',
  },
  {
    id: 7,
    kind: 'fitness',
    linkImg: cate_image_seven,
    store: 'Close Now',
    openicon: <IoLockClosedOutline />,
    open_color: '#F75C96',
    rating: '4.1',
    review: '56 Review',
    textyellow: '#FACC39',
    textgrey: '#FACC39',
    textgrey_two: '#FACC39',
    profileimg: img_avtar_seven,
    title: 'BodyStrong Gym',
    righticon: <FaCheck />,
    righticon_bg: '#5ECFB1',
    address: ' W 85th St, New York,  USA',
    text: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
    category: 'Fitness / Gym',
    rest_icon: <CiDumbbell />,
    rest_bg_color: '#4C97FD',
    Price: '$$',
  },
  {
    id: 8,
    kind: 'hotel',
    linkImg: cate_image_eight,
    store: 'Open Now',
    openicon: <RxLockOpen2 />,
    open_color: '#5ECFB1',
    rating: '4.8',
    review: '12 Review',
    textyellow: '#FACC39',
    textgrey: '#FACC39',
    textgrey_two: '#FACC39',
    profileimg: img_avtar_eight,
    title: 'Family Store',
    righticon: '',
    righticon_bg: '#fff',
    address: ' 34-42 Montgomery St , NY, USA',
    text: 'Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.',
    category: 'Shopping',
    rest_icon: <BsCartCheck />,
    rest_bg_color: '#5ECFB1',
    Price: '$$',
  },
];
