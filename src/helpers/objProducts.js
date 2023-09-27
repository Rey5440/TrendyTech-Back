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
    color: "Negro",
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
    color: "Negro",
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
    color: "Negro",
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
    color: "Phantom Negro",
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
    color: "Negro",
    type: "Monitor",
  },
  {
    name: "GoPro Hero 10 Negro Action Camera",
    price: 34999,
    description:
      "4K action camera with advanced stabilization for epic footage.",
    stock: 22,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067105/imagenes/uvacjv99l1ztgr7xcbrk.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695067106/imagenes/khfdzq3laiucavukbyom.png",
    ],
    brand: "GoPro",
    color: "Negro",
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
    color: "Negro",
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
    description: "Yama Negro RGB Español",
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
    description: "Yama Negro RGB Español",
    stock: 35,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695069106/imagenes/svappqgg2xwmb0sqjsqh.jpg",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695069106/imagenes/mfh1bst68dtbezornvwf.jpg",
    ],
    brand: "Logitech",
    color: "Slate Blue",
    type: "Keyboard",
  },
  {
    name: "Mouse inalámbrico Logitech M280 negro",
    price: 13399,
    description: "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.",
    stock: 9,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695823364/imagenes/ilyhbqwv1pkcxowdu6uh.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695823364/imagenes/obae91q2dqkouflczg3v.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695823364/imagenes/x7kehvuvwsaydsqjeyha.webp'
    ],
    brand: "Logitech",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse gamer Logitech G Series G502 Hero negro",
    price: 42899,
    description: 'Adaptado a tus movimientos. Su diseño eficaz hace de este mouse un elemento cómodo, con una gran experiencia de uso para aquellas personas que buscan seguridad en cada click. La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.',
    stock: 22,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695825104/imagenes/chkibdpxttwnwvyet9pj.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695825104/imagenes/jq7x2z7oysdbfzerjhe5.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695825104/imagenes/w6f58vnkaiikjwu170lw.webp'
    ],
    brand: "Logitech",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse y Pad 2 en 1 Gamer Redragon M601WL-BA Negro/Rojo",
    price: 15799,
    description: 'Con más de 20 años de experiencia en fabricación de productos, Redragon innova día a día en diseño y calidad. Su objetivo es producir equipamiento de alta gama para jugadores, con excelentes prestaciones y a un precio accesible. Los mouses Redragon son adecuados para todas las ocasiones, ya sea para entretenerse en el hogar o usarlo en el trabajo. Experimentá el diseño cómodo y elegante de este dispositivo.',
    stock: 31,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695826149/imagenes/oytycrr2s40hdagxojvh.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695826149/imagenes/rzcaoiiyyje1db2x3t6e.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695826149/imagenes/pcomdkjt2picz7avfcd9.webp'
    ],
    brand: "Redragon",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse gamer inalámbrico recargable Razer Viper Ultimate with charging dock black",
    price: 99550,
    description: 'Desde 2005 Razer es la marca líder de estilo de vida para jugadores. Ha diseñado y construido el ecosistema de hardware, software y servicios más grande del mundo. La ubicación de cada botón y curva de los mouses Razer se crearon para adaptarse perfectamente a tu mano. Gracias a estos dispositivos, conseguirás una experiencia de juego cómoda y placentera.',
    stock: 15,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695827472/imagenes/taztw8y1elcas8ogpoc2.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695827472/imagenes/vzvva0sc8a1eete0ng3l.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695827472/imagenes/udgsna13k5tnrsutjule.webp'
    ],
    brand: "Razer",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse gamer inalámbrico recargable Razer Basilisk Ultimate negro",
    price: 118694,
    description: 'La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.',
    stock: 30,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695828215/imagenes/toay1rwsltmpa4lqkvzc.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695828215/imagenes/ef2gisv3ge94sziwegmt.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695828215/imagenes/v1lfa11l7tzpzunaiigl.webp'
    ],
    brand: "Razer",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Hp Z5000 Inalambrico negro",
    price: 62499,
    description: 'Este es solo el pago del CARGO DE SERVICIO relacionado con el pedido de la computadora portátil. Pago por recargo de envío de actualización de computadora portátil. NO enviaremos este mouse usado ya que es solo una forma de pago. Si lo compró por error, envíe la cancelación del pedido de inmediato. Gracias',
    stock: 28,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695829082/imagenes/cbptldackmx1d6x4w3ov.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695829082/imagenes/hybs3t8ssgflp0k6xtnq.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695829082/imagenes/phnujbraxnb2kghfde0b.webp'
    ],
    brand: "Hp",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Usb Gamer 4000 Dpi Hp G200",
    price: 43087,
    description: 'Adaptado a tus movimientos. El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.',
    stock: 20,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695829420/imagenes/fm1nhy3k7jjwi3j6afty.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695829420/imagenes/ykb6fo9s5t2nlqigi7rj.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695829420/imagenes/oqobak5b0g7afqpdt76x.webp'
    ],
    brand: "Hp",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Usb Gamer 6200 Dpi Hp G360",
    price: 32114,
    description: 'La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales. Rapidez y confiabilidad de los botones. Con sus 6 botones podrás tener mayor control e independencia para ejecutar.',
    stock: 41,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695830044/imagenes/cyxjqnwsxawil9u5jq5z.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695830044/imagenes/unf3dcxriuiraxz4fhph.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695830043/imagenes/l0dbfiasl3smypsmxr83.webp'
    ],
    brand: "Hp",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Gamer Trust Heron Rgb Gxt-170 Sensor Óptico",
    price: 74730,
    description: 'Height of main product (in mm) 128 mm, Formfactor standard, Width of main product (in mm) 74 mm, Depth of main product (in mm) 41 mm, Total weight 135 g, Ergonomic design no',
    stock: 40,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695830858/imagenes/hllnquuzzos0ojtiir2n.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695830858/imagenes/fgwqrh0f3syjosdgcmf3.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695830858/imagenes/bx5lmejpjapapyafrnw8.webp'
    ],
    brand: "Trust",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Gamer Ergonomico Trust Celox Gxt 165 Rgb 10000dpi",
    price: 61440,
    description: 'Height of main product (in mm) 128 mm, Formfactor standard, Width of main product (in mm) 74 mm, Depth of main product (in mm) 41 mm, Total weight 135 g, Ergonomic design no',
    stock: 12,
    images: [
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695831273/imagenes/e26vgvnquvpnlampw89j.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695831273/imagenes/ifjygnadmzax361pjpmn.webp',
      'https://res.cloudinary.com/dntrwijx5/image/upload/v1695831273/imagenes/z8xijiqftffl9pkbtvmt.webp'
    ],
    brand: "Trust",
    color: "Negro",
    type: "Mouse",
  },

];

module.exports = objProducts;
