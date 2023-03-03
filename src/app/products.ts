export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | any;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Flip 7',
    price: 799,
    description: '"Flippiseiska" suurella näytöllä, 5G nettinopeus ja tehokas akku. ',
    image: '/assets/kuvat/pieni-samsung.png'

  },
  {
    id: 2,
    name: 'iPhone X',
    price: 999,
    description: 'iPhone X huippupuhelin. Omenaperheen uusin kärkituote.',
    image: '/assets/kuvat/pieni-iphone-x.png'
  },
  {
    id: 3,
    name: 'iPhone 7',
    price: 799,
    description: 'Pieni iPhone 7 luotettava peruspuhelin, jossa toimii kaikki.',
    image: '/assets/kuvat/pieni-iphone-7.png'

  },
  
];

