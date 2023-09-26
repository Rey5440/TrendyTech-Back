const objProducts = [
  {
    name: "HyperX Alloy FPS Pro Mechanical np",
    price: 9999,
    description:
      "Mechanical gaming keyboard with customizable RGB backlighting.",
    stock: 50,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066225/imagenes/ixengybv2q6di5ihscxh.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066225/imagenes/jaocb5h49q9soqzcailb.png",
    ],
    brand: "HyperX",
    color: "Black",
    type: "Keyboard",
  },
  {
    name: "Logitech G Pro Wireless Gaming Mouse",
    price: 5999,
    description:
      "High-performance wireless mouse with 16000 DPI optical sensor.",
    stock: 30,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066346/imagenes/pb1rczap0vpcpaxqwsce.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066345/imagenes/s0t7vwkiusfd7b50g9tm.png",
    ],
    brand: "Logitech",
    color: "Red",
    type: "Mouse",
  },
  {
    name: "Razer Kraken X Gaming Headset",
    price: 12999,
    description:
      "7.1 surround sound gaming headset for an immersive gaming experience.",
    stock: 20,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066444/imagenes/zb6oe5wbdrh5nclyoz51.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066452/imagenes/pguug4rdl983wmcutbxk.png",
    ],
    brand: "Razer",
    color: "Black",
    type: "Headphones",
  },
  {
    name: "Logitech G Pro X Mechanical Gaming Keyboard",
    price: 14999,
    description:
      "Mechanical gaming keyboard with customizable switches for pro-level performance.",
    stock: 15,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066575/imagenes/r6znzoprio86bhp6kxmi.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066600/imagenes/whpwcedojlwqpuxzcecw.png",
    ],
    brand: "Logitech",
    color: "Black",
    type: "Keyboard",
  },
  {
    name: "Samsung Galaxy S21 Ultra 5G Smartphone",
    price: 109999,
    description: "Flagship smartphone with a 108MP camera and 5G connectivity.",
    stock: 30,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066720/imagenes/xrhr32ui9rnkhqcd1hr3.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066720/imagenes/sbuerx5i27nszzky6ujm.png",
    ],
    brand: "Samsung",
    color: "Phantom Black",
    type: "Smartphone",
  },
  {
    name: "Sony PlayStation 5 Gaming Console",
    price: 49999,
    description:
      "Next-gen gaming console with ray tracing and fast SSD storage.",
    stock: 10,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066826/imagenes/evvpzr8brwkavvx5qtsl.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066826/imagenes/dbgepz9eqoernyntb1ik.png",
    ],
    brand: "Sony",
    color: "White",
    type: "Gaming Console",
  },
  {
    name: "Apple MacBook Air (M2 Chip) Laptop",
    price: 139999,
    description:
      "Ultra-thin laptop with Apple's M2 chip for exceptional performance.",
    stock: 25,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066922/imagenes/noei79q1dmjvb7tgl2qf.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066922/imagenes/w9wrnrf83jguknaafffg.png",
    ],
    brand: "Apple",
    color: "Space Gray",
    type: "Laptop",
  },
  {
    name: "Bose QuietComfort 35 II Wireless Headphones",
    price: 24999,
    description:
      "Noise-canceling wireless headphones for an immersive audio experience.",
    stock: 12,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066983/imagenes/clvsuecpkeedqyeeu635.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066983/imagenes/ihhky5uziopq58ah9ttt.png",
    ],
    brand: "Bose",
    color: "Silver",
    type: "Headphones",
  },
  {
    name: "Dell Ultrasharp U2719D 27-Inch Monitor",
    price: 39999,
    description:
      "High-resolution 27-inch monitor for professional-grade visual clarity.",
    stock: 18,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067046/imagenes/kealmiqjdc0stidzlo8j.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067046/imagenes/grijovysmhv1rx3sbhhq.png",
    ],
    brand: "Dell",
    color: "Black",
    type: "Monitor",
  },
  {
    name: "GoPro Hero 10 Black Action Camera",
    price: 34999,
    description:
      "4K action camera with advanced stabilization for epic footage.",
    stock: 22,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067105/imagenes/uvacjv99l1ztgr7xcbrk.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067106/imagenes/khfdzq3laiucavukbyom.png",
    ],
    brand: "GoPro",
    color: "Black",
    type: "Camera",
  },
  {
    name: "Canon EOS 90D DSLR Camera",
    price: 99999,
    description:
      "High-quality DSLR camera with 32.5MP sensor and 4K video recording.",
    stock: 8,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067151/imagenes/zplx3vqvdob0x9etqskx.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067151/imagenes/ug0yj9uqlfbfqmmielxn.png",
    ],
    brand: "Canon",
    color: "Black",
    type: "Camera",
  },
  {
    name: "Fitbit Charge 5 Fitness Tracker",
    price: 12999,
    description:
      "Advanced fitness tracker with heart rate monitoring and built-in GPS.",
    stock: 35,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067243/imagenes/mm4hxc2wcsjizq0fhk6m.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067243/imagenes/e0ggannhfmpxriyeplyg.png",
    ],
    brand: "Fitbit",
    color: "Slate Blue",
    type: "Fitness Tracker",
  },
  {
    name: "Logitech mx",
    price: 50999,
    description:
      "Logitech MX Keys Mini Teclado Inalámbrico Minimalista, Compacto, Bluetooth, Retroiluminado, USB-C.",
    stock: 35,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695068039/imagenes/ccmpfq4m2aao5bihcsci.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695068039/imagenes/mo9fvgxzsgu23x1ev1ee.png",
    ],
    brand: "Logitech",
    color: "Slate Blue",
    type: "Keyboard",
  },
  {
    name: "Red Dragon k550",
    price: 30999,
    description: "Yama Black RGB Español",
    stock: 35,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695068317/imagenes/eyytjhx8mcdasoqv31md.jpg",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695068317/imagenes/uovthsqbmaawpljdjbbj.jpg",
    ],
    brand: "Red Dragon",
    color: "Slate Blue",
    type: "Keyboard",
  },
  {
    name: "Logitech 50",
    price: 30999,
    description: "Yama Black RGB Español",
    stock: 35,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695069106/imagenes/svappqgg2xwmb0sqjsqh.jpg",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695069106/imagenes/mfh1bst68dtbezornvwf.jpg",
    ],
    brand: "Logitech",
    color: "Slate Blue",
    type: "Keyboard",
  },
];

module.exports = objProducts;
