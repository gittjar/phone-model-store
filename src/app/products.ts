export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  mainmaterial: string;
  os: string;
  varastossa: boolean;
  quantity?: number;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Flip 7',
    price: 49.95,
    description: 'Flip seven suurella näytöllä, 5G nettinopeus ja tehokas akku. Android 14 käyttöjärjestelmä.',
    images: ['/assets/kuvat/pieni-samsung.png'],
    mainmaterial: "titanium",
    os: "Android 14 (Oct. 2023)",
    varastossa: true
  },
  {
    id: 2,
    name: 'Apple iPhone X',
    price: 129.99,
    description: 'iPhone X huippupuhelin. 5G, 128 Gt tallennustilaa ja 36 Mpx kamera. Pitkä akunkesto.',
    images: ['/assets/kuvat/pieni-iphone-x.png'],
    mainmaterial: "aluminium",
    os: "iOS 15x",
    varastossa: true
  },
  {
    id: 3,
    name: 'Apple iPhone 7',
    price: 89.99,
    description: 'Pieni iPhone 7 luotettava peruspuhelin, jossa toimii kaikki. Hyvä valinta monenlaiseen käyttöön.',
    images: ['/assets/kuvat/pieni-iphone-7.png'],
    mainmaterial: "aluminium",
    os: "iOS 15x",
    varastossa: false
  },
  {
    id: 4,
    name: 'Apple iPhone 15',
    price: 799.99,
    description: '48 Mpx pääkamera Photonic-moottorilla, tehokkas A16 Bionic-prosessori ja 5G-datayhteys.',
    images: ['/assets/kuvat/Apple-iPhone-15.jpg'],
    mainmaterial: "aluminium",
    os: "iOS version Latest",
    varastossa: true
  }
];

