export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  mainmaterial: string;
  os: string;
  varastossa: boolean;
  quantity?: number; // Add this line
}

export const products = [
  {
    id: 1,
    name: 'Samsung Flip 7',
    price: 49.95,
    description: '"Flippiseiska" suurella näytöllä, 5G nettinopeus ja tehokas akku. ',
    images: ['/assets/kuvat/pieni-samsung.png'],
    mainmaterial: "titanium",
    os: "Android 4x",
    varastossa: true
  },
  {
    id: 2,
    name: 'iPhone X',
    price: 129.99,
    description: 'iPhone X huippupuhelin. Omenaperheen uusin kärkituote.',
    images: ['/assets/kuvat/pieni-iphone-x.png'],
    mainmaterial: "aluminium",
    os: "iOS 15x",
    varastossa: true
  },
  {
    id: 3,
    name: 'iPhone 7',
    price: 89.99,
    description: 'Pieni iPhone 7 luotettava peruspuhelin, jossa toimii kaikki.',
    images: ['/assets/kuvat/pieni-iphone-7.png'],
    mainmaterial: "aluminium",
    os: "iOS 15x",
    varastossa: false
  },
  {
    id: 4,
    name: 'Bat Phone',
    price: 99.99,
    description: 'Description for the new bat phone. Iso näyttö ja tehokas akku.',
    images: ['/assets/kuvat/pieni-iphone-7.png'],
    mainmaterial: "glass",
    os: "OS version Unknown",
    varastossa: true
  }
];

