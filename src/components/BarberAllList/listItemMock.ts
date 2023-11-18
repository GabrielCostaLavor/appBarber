import logoExample from '../../assets/logoExample.png'
import background from '../../assets/backgroundOne.png';
import cabelo from '../../assets/cabelo.png'
import barba from '../../assets/barba.png'
import manicure from '../../assets/manicure.png'
import pedicure from '../../assets/pedicure.png'
import sobrancelha from '../../assets/sobrancelha.png'


export const data = [
  { 
    id: 1,
    key: '1', 
    title: 'Item 1', 
    image: logoExample, 
    stars: 5, 
    favorite: true, 
    banner: background, 
    professionals: ["Gabriel", "Wesley", 'Edilberto', "Ismael"], 
    paymentMethods: ['Cartão de Credito', 'Cartão de debito', 'Pix', 'Dinheiro'],
    socialMedia: {
      isWhatssap: true,
      isInstagram: true
    } ,
    address: {
      street: "Rua Boanerges jacó",
      streetNumber: 777,
      city: 'Barreira',
      uf: 'CE'
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    service: [
      {
        id: 1,
        name: "Corte Degradê Mid-fade",
        value: '35',
        category: "Cabelo",
        image: cabelo
      },
      {
        id: 2,
        name: "Corte Degradê High-fade",
        value: '35',
        category: "Cabelo",
        image: cabelo
      },
      {
        id: 3,
        name: "Corte Degradê Low-fade",
        value: '35',
        category: "Cabelo",
        image: cabelo
      },
      {
        id: 4,
        name: "Barba",
        value: '15',
        category: "Barba",
        image: barba
      },
      {
        id: 5,
        name: "Barba Degradê",
        value: '15',
        category: "Barba",
        image: barba
      }
    ]
  },
  { 
    id: 2,
    key: '2', 
    title: 'Item 2', 
    image: logoExample, 
    stars: 4, 
    favorite: false,
    banner: background, 
    professionals: ["Gabriel", "Wesley", 'Edilberto', "Ismael"], 
    paymentMethods: ['Cartão de Credito', 'Cartão de debito', 'Pix', 'Dinheiro'],
    socialMedia: {
      isWhatssap: true,
      isInstagram: true
    } ,
    address: {
      street: "Rua Boanerges jacó",
      streetNumber: 777,
      city: 'Barreira',
      uf: 'CE'
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    service: [
      {
        id: 1,
        name: "Corte Degradê Mid-fade",
        value: '35',
        category: "Cabelo",
        image: cabelo
      },
      {
        id: 2,
        name: "Corte Degradê High-fade",
        value: '35',
        category: "Cabelo",
        image: cabelo
      },
      {
        id: 3,
        name: "Corte Degradê Low-fade",
        value: '35',
        category: "Cabelo",
        image: cabelo
      },
      {
        id: 4,
        name: "Barba",
        value: '15',
        category: "Barba",
        image: barba
      },
      {
        id: 5,
        name: "Barba Degradê",
        value: '15',
        category: "Barba",
        image: barba
      }
    ]
  },
  { 
    id: 3,
    key: '3', 
    title: 'Item 3', 
    image: logoExample, 
    stars: 3, 
    favorite: false,
    banner: background, 
    professionals: ["Gabriel", "Wesley", 'Edilberto', "Ismael"], 
    paymentMethods: ['Cartão de Credito', 'Cartão de debito', 'Pix', 'Dinheiro'],
    socialMedia: {
      isWhatssap: true,
      isInstagram: true
    },
    address: {
      street: "Rua Boanerges jacó",
      streetNumber: 777,
      city: 'Barreira',
      uf: 'CE'
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    service: [
      {
        id: 1,
        name: "Corte Degradê Mid-fade",
        value: '35',
        category: "Cabelo",
        image: cabelo
      },
      {
        id: 2,
        name: "Corte Degradê High-fade",
        value: '35',
        category: "Cabelo",
        image: cabelo
      },
      {
        id: 3,
        name: "Corte Degradê Low-fade",
        value: '35',
        category: "Cabelo",
        image: cabelo
      },
      {
        id: 4,
        name: "Barba",
        value: '15',
        category: "Barba",
        image: barba
      },
      {
        id: 5,
        name: "Barba Degradê",
        value: '15',
        category: "Barba",
        image: barba
      }
    ]
  },
];