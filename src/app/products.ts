export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | any;
  varasto: number;
  myymala1: string;
  myymala2: string;
  myymala3: string
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Puhelin suurella naytolla, 5G nettinopeus ja tehokas akku. ',
    image: "https://image.shutterstock.com/image-illustration/pixel-art-smartphone-260nw-272003366.jpg",
    varasto: 15,
    myymala1: 'Helsinki',
    myymala2: 'Turku',
    myymala3: 'Tampere'
    
  },
  {
    id: 2,
    name: 'Mini BMX',
    price: 10,
    description: 'Pieni BMX fillari temppuiluun, saatavilla monia eri vareja.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24PjjZ3V22LIXhxATSIOqPbgF_Py-_t6F0hWBRzVnAhcM2E6cwe1JSyEoGzOqdnJQT18&usqp=CAU",
    varasto: 6,
    myymala1: 'Turku',
    myymala2: 'Espoo',
    myymala3: 'Vantaa'
  },
  {
    id: 3,
    name: 'Nintendo Switch',
    price: 299,
    description: 'Nintendon pelikonsoli katevassa koossa, paljon peleja saatavilla',
    image: '/assets/kuvat/nintendo.jpg',
    varasto: 3,
    myymala1: 'Kuopio',
    myymala2: 'Iisalmi',
    myymala3: '--'
  },
    {
    id: 4,
    name: 'Playstation 5',
    price: 1,
    description: 'Pleikku 5 ja kaksi ohjainta, mukaan tulee GTA5 peli',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFllv8HfHGgeFXbpAVHkKjUzXrRJiJyuTnNw&usqp=CAU",
    varasto: 19,
    myymala1: 'Sipoo',
    myymala2: 'Rovaniemi',
    myymala3: 'Mikkeli'
  },
      {
    id: 5,
    name: 'Lamborghini Gallardo',
    price: 250000,
    description: 'Arvokas menopeli. Sopii nopeaan ajoon maantiella ja kilparadoilla.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiYVrV-hfm5kllvrENgx-k9tTOC-kLdK0x2vJ1VEIadgeBM9sJZqH7B3be-eLgf_CrRFU&usqp=CAU",
    varasto: 2,
    myymala1: 'Porvoo',
    myymala2: 'Pori',
    myymala3: 'Kotka'
  },
  
    {
    id: 6,
    name: 'Tabletti',
    price: 499,
    description: '10" tablettitietokone, joka kulkee helposti mukanasi.',
    image: '/assets/kuvat/phone-pic.jpg',
    varasto: 5,
    myymala1: 'Iisalmi',
    myymala2: '--',
    myymala3: '--'
  }
  
];

