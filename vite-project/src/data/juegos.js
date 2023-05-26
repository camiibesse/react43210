const products = [
    {
        id: 1,
        title: "Fifa 2023",
        category: "PS4",
        img: "/src/assets/Fifa 2023.jpg",
        price: 28999,
        stock: 6,
    },
    {
        id: 2,
        title: "Call of Duty: Infinity Warfare",
        category: "PS4",
        img: "/src/assets/codwarfare.jpg ",
        price: 17359,
        stock: 4,
    },
    {
        id: 3,
        title: "God of War",
        category: "PS4",
        img: "/src/assets/God of War.jpg",
        price: 9999,
        stock: 3,
    },
    {
        id: 4,
        title: "GTA V",
        category: "PS4",
        img: "/src/assets/GTA V.jpg",
        price: 13699,
        stock: 8
    },
    {
        id: 5,
        title: "Hogwarts Legacy",
        category: "PS4",
        img: "/src/assets/hogwarts legacy.jpg",
        price: 30500,
        stock: 9,
    },
    {
        id: 6,
        title: "Mafia",
        category: "PS4",
        img: "/src/assets/Mafia.jpg",
        price: 9599,
        stock: 5,
    },
    {
        id: 7,
        title: "Power Rangers",
        category: "PS4",
        img: "/src/assets/powerrangers.jpg",
        price: 12399,
        stock: 4,
    },
    {
        id: 8,
        title: "Resident Evil 3",
        category: "PS4",
        img: "/src/assets/Resident Evil 3.jpeg",
        price: 12599,
        stock: 6,
    },
    {
        id: 9,
        title: "Resident Evil 7",
        category: "PS4",
        img: "/src/assets/Resident Evil 7.jpeg",
        price: 15999,
        stock: 8,
    },
    {
        id: 10,
        title: "Resident Evil 4",
        category: "PS4",
        img: "/src/assets/resident-evil-4-remake.jpg",
        price: 18600,
        stock: 5,
    },
    {
        id: 11,
        title: "Spiderman",
        category: "PS4",
        img: "/src/assets/Sipderman.jpg",
        price: 20999,
        stock: 7,
    },
    {
        id: 12,
        title: "The Last of Us II",
        category: "PS4",
        img: "/src/assets/The last of us.jpg",
        price: 19839,
        stock: 6,
    },
    {
        id: 13,
        title: "Tomb Raider",
        category: "PS4",
        img: "/src/assets/Tomb Raider.jpg",
        price: 5999,
        stock: 4,
    },
    {
        id: 14,
        title: "Uncharted 4",
        category: "PS4",
        img: "/src/assets/Uncharted 4.jpg",
        price: 8599,
        stock: 5,
    },
    {
        id: 15,
        title: "Uncharted: The Lost Legacy",
        category: "PS4",
        img: "/src/assets/Uncharted The lost Legacy.jpeg",
        price: 13599,
        stock: 6,
    },
    {
        id: 16,
        title: "Returnal",
        category: "PS5",
        img: "/src/assets/Returnal.jpg",
        price: 9999,
        stock: 5,
    },
    {
        id: 17,
        title: "Fifa 23",
        category: "PS5",
        img: "/src/assets/fifa2023ps5.jpg",
        price: 28520,
        stock: 11,
    },
    {
        id: 18,
        title: "Ghost",
        category: "PS5",
        img: "/src/assets/ghost.jpg",
        price: 22999,
        stock: 6,
    },
    {
        id: 19,
        title: "Gran Turismo",
        category: "PS5",
        img: "/src/assets/gt.jpg",
        price: 7439,
        stock: 6,
    },
    {
        id: 20,
        title: "Sony Dualshock 4 Blue",
        category: "accesorios",
        img: "/src/assets/jostyck1.jpg",
        price: 27900,
        stock: 6,
    },
    {
        id: 21,
        title: "Base Cargadora Doble 2 Joystick P/ps5",
        category: "accesorios",
        img: "/src/assets/cargador.jpg",
        price: 7030,
        stock: 6,
    },
    {
        id: 22,
        title: "Auriculares Gaming c/ Microfono",
        category: "accesorios",
        img: "/src/assets/auricular.jpg",
        price: 3699,
        stock: 6,
    },


]

const DELAY = 500;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, DELAY)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id))
    }, DELAY)
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === category))
    }, DELAY)
  })
}