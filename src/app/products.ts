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
  },
  {
    id: 5,
    name: 'Apple iPhone 7 Silver',
    price: 99.99,
    description: 'Hopeinen iPhone 7, jossa on 32 Gt tallennustilaa ja 12 Mpx kamera. Erinomainen valinta.',
    images: ['/assets/kuvat/Apple-iPhone-15.jpg'],
    mainmaterial: "aluminium",
    os: "iOS 15x",
    varastossa: true
  },
  {
    id: 6,
    name: 'Apple iPhone XS',
    price: 199.99,
    description: 'iPhone XS, jossa on 64 Gt tallennustilaa ja 12 Mpx kaksoiskamera. Erinomainen suorituskyky.',
    images: ['/assets/kuvat/pieni-iphone-7.png'],
    mainmaterial: "aluminium",
    os: "iOS 15x",
    varastossa: true
  },
  {
    id: 7,
    name: 'Generic Phone',
    price: 59.99,
    description: 'Edullinen peruspuhelin, jossa on 16 Gt tallennustilaa ja 8 Mpx kamera. Hyvä valinta peruskäyttöön.',
    images: ['/assets/kuvat/pieni-samsung.png'],
    mainmaterial: "plastic",
    os: "Android 10",
    varastossa: true
  },
  {
    id: 8,
    name: 'Apple iPhone 7 32GB',
    price: 79.99,
    description: 'iPhone 7, jossa on 32 Gt tallennustilaa ja 12 Mpx kamera. Luotettava ja kestävä puhelin.',
    images: ['/assets/kuvat/pieni-iphone-x.png'],
    mainmaterial: "aluminium",
    os: "iOS 15x",
    varastossa: false
  }
];