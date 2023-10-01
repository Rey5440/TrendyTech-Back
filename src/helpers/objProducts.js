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
    type: "Teclado",
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
    color: "Rojo",
    type: "Mouse",
  },
  {
    name: "Auriculares Razer Kraken X Gaming",
    price: 12999,
    description:
      "7.1 surround sound gaming auriculares for an immersive gaming experience.",
    stock: 20,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066444/imagenes/zb6oe5wbdrh5nclyoz51.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066452/imagenes/pguug4rdl983wmcutbxk.png",
    ],
    brand: "Razer",
    color: "Negro",
    type: "Auriculares",
  },
  {
    name: "Teclado Logitech G Pro X Mechanical Gaming ",
    price: 14999,
    description:
      "Mechanical gaming teclado with customizable switches for pro-level performance.",
    stock: 15,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066575/imagenes/r6znzoprio86bhp6kxmi.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066600/imagenes/whpwcedojlwqpuxzcecw.png",
    ],
    brand: "Logitech",
    color: "Negro",
    type: "Teclado",
  },
  {
    name: "Smartphone Samsung Galaxy S21 Ultra 5G",
    price: 109999,
    description: "Flagship smartphone with a 108MP camera and 5G connectivity.",
    stock: 30,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066720/imagenes/xrhr32ui9rnkhqcd1hr3.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066720/imagenes/sbuerx5i27nszzky6ujm.png",
    ],
    brand: "Samsung",
    color: "Negro",
    type: "Smartphone",
  },
  {
    name: "Consola Sony PlayStation 5",
    price: 49999,
    description:
      "Next-gen gaming console with ray tracing and fast SSD storage.",
    stock: 10,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066826/imagenes/evvpzr8brwkavvx5qtsl.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066826/imagenes/dbgepz9eqoernyntb1ik.png",
    ],
    brand: "Sony",
    color: "Blanco",
    type: "Consolas",
  },
  {
    name: "Notebook Apple MacBook Air (M2 Chip)",
    price: 139999,
    description:
      "Ultra-thin notebook with Apple's M2 chip for exceptional performance.",
    stock: 25,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066922/imagenes/noei79q1dmjvb7tgl2qf.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066922/imagenes/w9wrnrf83jguknaafffg.png",
    ],
    brand: "Apple",
    color: "Gris",
    type: "Notebook",
  },
  {
    name: "Auriculares Bose QuietComfort 35 II Wireless",
    price: 24999,
    description:
      "Noise-canceling wireless headphones for an immersive audio experience.",
    stock: 12,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066983/imagenes/clvsuecpkeedqyeeu635.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695066983/imagenes/ihhky5uziopq58ah9ttt.png",
    ],
    brand: "Bose",
    color: "Plata",
    type: "Auriculares",
  },
  {
    name: "Monitor Dell Ultrasharp U2719D 27-Inch",
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
    name: "Camara GoPro Hero 10 Black Action",
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
    type: "Camara",
  },
  {
    name: "Camara Canon EOS 90D DSLR",
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
    type: "Camara",
  },
  {
    name: "Fitness Tracker Fitbit Charge 5",
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
    type: "Teclado",
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
    brand: "Redragon",
    color: "Slate Blue",
    type: "Teclado",
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
    type: "Teclado",
  },
  {
    name: "Auriculares inalámbricos Sony WH-1000XM4",
    price: 54999,
    description:
      "Hechos para una vida activa, los auriculares WH-CH510 cuentan con un diseño liviano y son inalámbricos. Con hasta 35 horas de duración de la batería, podrás escuchar música durante todo el día.",
    stock: 12,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695823035/imagenes/sguwqpn5y093xeremqy8.png",
    ],
    brand: "Sony",
    color: "Negro",
    type: "Auriculares",
  },
  {
    name: "Auriculares inalámbricos con noise cancelling Sony WH-1000XM4",
    price: 329999,
    description:
      "Los intuitivos e inteligentes auriculares WH-1000XM4 te ofrecen nuevas mejoras en la tecnología de noise cancelling avanzada, una calidad de sonido excepcional y funciones de escucha inteligente que se ajustan al entorno y lo que estés haciendo.",
    stock: 57,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695823309/imagenes/dx9onjggwqh52stpk9fw.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695823310/imagenes/wt1wxtbzwmyo9rvvxaha.png",
    ],
    brand: "Sony",
    color: "Azul",
    type: "Auriculares",
  },
  {
    name: "Auriculares inalámbricos con noise cancelling Sony WF-C700N",
    price: 109999,
    description:
      "Los audífonos con Noise Cancelling WF-C700N ofrecen sonido cristalino, comodidad y una batería de larga duración para el uso diario. Controla el sonido ambiente con 20 niveles o permite que el control de sonido adaptativo lo haga automáticamente. Ahora es más fácil que nunca sumergirte en la música.",
    stock: 199,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695823884/imagenes/ajxbylnxigdmjvf0ztj7.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695823884/imagenes/pvz3n0bm6czk3qwlshvo.png",
    ],
    brand: "Sony",
    color: "Negro",
    type: "Auriculares",
  },
  {
    name: "Auriculares inalámbricos con noise cancelling Sony WF-C700N",
    price: 109999,
    description:
      "Los audífonos con Noise Cancelling WF-C700N ofrecen sonido cristalino, comodidad y una batería de larga duración para el uso diario. Controla el sonido ambiente con 20 niveles o permite que el control de sonido adaptativo lo haga automáticamente. Ahora es más fácil que nunca sumergirte en la música.",
    stock: 304,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695824225/imagenes/eukpfyu9dphxafzrj9ai.png",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695824225/imagenes/nan0pfcaodgtmvdlz9x8.webp",
    ],
    brand: "Sony",
    color: "Verde",
    type: "Auriculares",
  },
  {
    name: "Consola Standard God of War Ragnarok Sony PlayStation®5",
    price: 729999,
    description:
      "Una velocidad de fotogramas alta y fluida de hasta 120 fps para los juegos compatibles, con soporte para salida de 120 Hz en pantallas 4K, disfrutá de gráficos 4K nítidos. Los detalles intrincados cobran vida con tu televisor 4K y juegos de PS5 compatibles y embarcate en un épico y cordial viaje mientras Kratos y Atreus luchan por aferrarse y soltar Atreus busca comprender mejor las pistas dejadas por su madre y reconstruir su papel profetizado en la guerra que se avecina.",
    stock: 133,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695824496/imagenes/aahm28wbllebdjqrh2nv.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695824496/imagenes/ocx77mflgmdixl6ry2bz.webp",
    ],
    brand: "Sony",
    color: "Blanco",
    type: "Consolas",
  },
  {
    name: "Auriculares gamer inalámbricos Logitech G Series G435",
    price: 68712,
    description:
      "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G435 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    stock: 28,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695825315/imagenes/i7ckxwpyaqogasycx78s.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695825315/imagenes/som0rqw9nrpjdmqz2fsm.webp",
    ],
    brand: "Logitech",
    color: "Negro",
    type: "Auriculares",
  },
  {
    name: "Auriculares gamer inalámbricos Logitech G Series G733",
    price: 70799,
    description:
      "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G435 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    stock: 28,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827129/imagenes/e3vc7woq9fvyfmmryjpo.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827129/imagenes/ihbz0xteudyzp7gglhmf.webp",
    ],
    brand: "Logitech",
    color: "Negro",
    type: "Auriculares",
  },
  {
    name: "Logitech G735 Aurora Collection",
    price: 257820,
    description:
      "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G435 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    stock: 78,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827323/imagenes/ptpq4ljn2bzoco2gzsya.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827323/imagenes/cvg7jjuou1uiqnjerh4g.webp",
    ],
    brand: "Logitech",
    color: "Blanco",
    type: "Auriculares",
  },
  {
    name: "Auriculares gamer inalámbricos HyperX Cloud Flight HX-HSCF",
    price: 84399,
    description:
      "Ideado para los gamers más exigentes, el HyperX Cloud Flight tiene todo lo que un jugador busca. Su conectividad inalámbrica permite moverte de un lugar a otro sin cables. A su vez, su batería de larga duración te dará horas interminables de sonidos envolventes en tus partidas. Sus orejeras son sinónimo de comodidad, ya que pueden rotar en un ángulo de 90 grados y reposar de forma suave en tu cuello. Y como si esto fuera poco, en estas vas a controlar los efectos de luz LED, silenciar o encender el micrófono con cancelación de ruido y regular el volumen.",
    stock: 100,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827519/imagenes/zegmskuazn1skluqtkf5.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827519/imagenes/edfei21mrhdo3yo66brr.webp",
    ],
    brand: "HyperX",
    color: "Negro",
    type: "Auriculares",
  },
  {
    name: "Auriculares gamer HyperX Cloud Core KHX-HSCC",
    price: 82099,
    description:
      "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Core no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    stock: 140,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827663/imagenes/ys2qu5udjyaorq52glqg.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827663/imagenes/cm7pyvzbulebtk4xuqxm.webp",
    ],
    brand: "HyperX",
    color: "Negro",
    type: "Auriculares",
  },
  {
    name: "Auriculares gamer HyperX Cloud Stinger HX-HSCS",
    price: 44299,
    description:
      "El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
    stock: 40,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827765/imagenes/vnwhs3f38psz2shhonx9.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827765/imagenes/f1ngvxo2tg3qbhazxgwy.webp",
    ],
    brand: "HyperX",
    color: "Negro",
    type: "Auriculares",
  },
  {
    name: "Teclado gamer Redragon Dyaus K509 QWERTY español latinoamérica",
    price: 18699,
    description:
      "Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece. Distinción a todo color. Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.",
    stock: 40,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828099/imagenes/pdduz9aws3dfdcqoaam1.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828099/imagenes/vpspm9iaojhrkxwoqhz5.webp",
    ],
    brand: "Redragon",
    color: "Negro",
    type: "Teclado",
  },
  {
    name: "Teclado gamer Redragon Kumara K552 QWERTY",
    price: 48444,
    description:
      "La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.",
    stock: 30,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828260/imagenes/er7el4nsolt7ycpjy4xv.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828261/imagenes/ayqweerpnkmlnvezl4jk.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828260/imagenes/lvsbrij8hjkq1qmeaj3h.webp",
    ],
    brand: "Redragon",
    color: "Negro",
    type: "Teclado",
  },
  {
    name: "Teclado Mecánico Redragon Fizz Pro K616 Rgb Wireless Dual Color",
    price: 45000,
    description:
      "Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.",
    stock: 67,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828438/imagenes/mmtagbmdauglzrqynwnb.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828439/imagenes/nhmukorqybxrueiwfneg.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828438/imagenes/v8u2y0nqb6pd7gdk1ujz.webp",
    ],
    brand: "Redragon",
    color: "Negro",
    type: "Teclado",
  },
  {
    name: "Notebook Hp Victus I5 512gb 8gb 15.6 Gtx1650",
    price: 899999,
    description:
      "La notebook HP Victus 15-FA0031DX es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.Su pantalla de 15.6 pulgadas y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.",
    stock: 12,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695829894/imagenes/ixz0fply7bvr2oxoszp4.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695829893/imagenes/ezxomwzwen6krj0co9l0.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695829893/imagenes/tymkcsfpnho2yukl13qs.webp",
    ],
    brand: "HP",
    color: "Gris",
    type: "Notebook",
  },
  {
    name: "Notebook HP 240 G7 14 pulgadas, Intel Celeron N4000 4GB de RAM 500GB HDD",
    price: 297000,
    description:
      "La notebook HP 240 G7 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina. Pantalla con gran impacto visual. Su pantalla LED de 14 pulgadas y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.",
    stock: 18,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830172/imagenes/tkdpamsfcmhkjlulhg1d.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830172/imagenes/nb77up2nspvjgx8sdayf.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830172/imagenes/jn7pdyopwci5eudytkdr.webp",
    ],
    brand: "HP",
    color: "Gris",
    type: "Notebook",
  },
  {
    name: "Notebook HP 15-dw1080la 15.6 pulgadas, Intel Celeron N4020 4GB de RAM 1TB HDD",
    price: 328999,
    description:
      "La notebook HP 15-dw1080la es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina. Su pantalla de 15.6 pulgadas y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.",
    stock: 148,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830172/imagenes/tkdpamsfcmhkjlulhg1d.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830172/imagenes/nb77up2nspvjgx8sdayf.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830172/imagenes/jn7pdyopwci5eudytkdr.webp",
    ],
    brand: "HP",
    color: "Negro",
    type: "Notebook",
  },
  {
    name: "Notebook Dell Vostro 3405 Ryzen 5 16gb 256ssd",
    price: 625799,
    description:
      "Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento. Pantalla con gran impacto visual, su pantalla LCD de 15.5 pulgadas y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.",
    stock: 34,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831420/imagenes/wzrdrdzcculjv5xdumg2.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831420/imagenes/dbpzu5mmbgvi7bcryqzo.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831420/imagenes/h8aq33l8hwk4pxu9oivz.webp",
    ],
    brand: "Dell",
    color: "Plata",
    type: "Notebook",
  },
  {
    name: "Notebook Dell Inspiron 15.6 I7 13va 32gb Ram 1tb Ssd",
    price: 1185300,
    description:
      "Dell Inspiron CON PROCESADOR I7 DE 13va GENERACIÓN para disfrutar de un rendimiento potente mientras recorre su lista de tareas pendientes. La computadora portátil está equipada con un procesador Intel Core i7 y 32 GB de memoria para brindar la velocidad y la potencia necesarias para manejar múltiples programas al mismo tiempo.",
    stock: 24,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831716/imagenes/w1l5xouvju33jz3rmqut.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831716/imagenes/evsefnlvg3ijqtkt3k1w.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831716/imagenes/xypxg83uq3i2zapy3zn7.webp",
    ],
    brand: "Dell",
    color: "Gris",
    type: "Notebook",
  },
  {
    name: "Notebook Samsung Galaxy Book3 15.6 Intel Core I3 6 Núcleos 8gb 256gb",
    price: 404999,
    description:
      "La notebook Samsung Premium Galaxy Book3 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes, ya sea en tu casa o en la oficina.",
    stock: 56,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831990/imagenes/d15kkgs7epjquysmhlct.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831990/imagenes/k5vasru5os2yczdxfleb.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831990/imagenes/mghyratzkcu8rprzrawt.webp",
    ],
    brand: "Samsung",
    color: "Blanco",
    type: "Notebook",
  },
  {
    name: "Notebook Samsung 11.6 Intel Celeron 4gb 32gb Uhd Graphics",
    price: 299999,
    description:
      "La notebook Samsung 11.6 Intel Celeron es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes, ya sea en tu casa o en la oficina.",
    stock: 6,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695832241/imagenes/xumdcj2idxakwbtbwre4.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695832241/imagenes/y8h4xyw9bswkeb0t41ac.webp",
    ],
    brand: "Samsung",
    color: "Gris",
    type: "Notebook",
  },
  {
    name: "Notebook Apple Macbook Air 13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM",
    price: 684999,
    description:
      "La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático. Todo en un diseño silencioso sin ventilador que te ofrece la mayor duración de batería en una MacBook Air: hasta 18 horas. (1) Portátil como siempre, más poderosa que nunca.",
    stock: 5,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695832418/imagenes/u3kjqrz8kmgfga1qawwl.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695832418/imagenes/krnldhkkur8k6inrptyg.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695832418/imagenes/tvt8w2ylerhezmm9qapx.webp",
    ],
    brand: "Apple",
    color: "Plata",
    type: "Notebook",
  },
  {
    name: "Notebook Apple MacBook Air A2179 gris espacial 13.3 pulgadas, Intel Core i3 1000NG4 8GB de RAM 256GB SSD, Intel Iris Plus Graphics",
    price: 842999,
    description:
      "La notebook Apple MacBook Air A2179 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.",
    stock: 17,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695832683/imagenes/hcxv99kzjpdiqx7f2eu6.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695832683/imagenes/u4n7vj1h14kla5hoepux.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695832683/imagenes/rmf8hxyhlgbydnnjlewq.webp",
    ],
    brand: "Apple",
    color: "Plata",
    type: "Notebook",
  },
  {
    name: "Mouse inalámbrico Logitech M280 negro",
    price: 13399,
    description:
      "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.",
    stock: 9,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695823364/imagenes/ilyhbqwv1pkcxowdu6uh.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695823364/imagenes/obae91q2dqkouflczg3v.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695823364/imagenes/x7kehvuvwsaydsqjeyha.webp",
    ],
    brand: "Logitech",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse gamer Logitech G Series G502 Hero negro",
    price: 42899,
    description:
      "Adaptado a tus movimientos. Su diseño eficaz hace de este mouse un elemento cómodo, con una gran experiencia de uso para aquellas personas que buscan seguridad en cada click. La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.",
    stock: 22,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695825104/imagenes/chkibdpxttwnwvyet9pj.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695825104/imagenes/jq7x2z7oysdbfzerjhe5.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695825104/imagenes/w6f58vnkaiikjwu170lw.webp",
    ],
    brand: "Logitech",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse y Pad 2 en 1 Gamer Redragon M601WL-BA Negro/Rojo",
    price: 15799,
    description:
      "Con más de 20 años de experiencia en fabricación de productos, Redragon innova día a día en diseño y calidad. Su objetivo es producir equipamiento de alta gama para jugadores, con excelentes prestaciones y a un precio accesible. Los mouses Redragon son adecuados para todas las ocasiones, ya sea para entretenerse en el hogar o usarlo en el trabajo. Experimentá el diseño cómodo y elegante de este dispositivo.",
    stock: 31,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695826149/imagenes/oytycrr2s40hdagxojvh.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695826149/imagenes/rzcaoiiyyje1db2x3t6e.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695826149/imagenes/pcomdkjt2picz7avfcd9.webp",
    ],
    brand: "Redragon",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse gamer inalámbrico recargable Razer Viper Ultimate with charging dock black",
    price: 99550,
    description:
      "Desde 2005 Razer es la marca líder de estilo de vida para jugadores. Ha diseñado y construido el ecosistema de hardware, software y servicios más grande del mundo. La ubicación de cada botón y curva de los mouses Razer se crearon para adaptarse perfectamente a tu mano. Gracias a estos dispositivos, conseguirás una experiencia de juego cómoda y placentera.",
    stock: 15,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827472/imagenes/taztw8y1elcas8ogpoc2.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827472/imagenes/vzvva0sc8a1eete0ng3l.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695827472/imagenes/udgsna13k5tnrsutjule.webp",
    ],
    brand: "Razer",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse gamer inalámbrico recargable Razer Basilisk Ultimate negro",
    price: 118694,
    description:
      "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.",
    stock: 30,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828215/imagenes/toay1rwsltmpa4lqkvzc.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828215/imagenes/ef2gisv3ge94sziwegmt.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695828215/imagenes/v1lfa11l7tzpzunaiigl.webp",
    ],
    brand: "Razer",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Hp Z5000 Inalambrico negro",
    price: 62499,
    description:
      "Este es solo el pago del CARGO DE SERVICIO relacionado con el pedido de la computadora portátil. Pago por recargo de envío de actualización de computadora portátil. NO enviaremos este mouse usado ya que es solo una forma de pago. Si lo compró por error, envíe la cancelación del pedido de inmediato. Gracias",
    stock: 28,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695829082/imagenes/cbptldackmx1d6x4w3ov.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695829082/imagenes/hybs3t8ssgflp0k6xtnq.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695829082/imagenes/phnujbraxnb2kghfde0b.webp",
    ],
    brand: "HP",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Usb Gamer 4000 Dpi Hp G200",
    price: 43087,
    description:
      "Adaptado a tus movimientos. El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.",
    stock: 20,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695829420/imagenes/fm1nhy3k7jjwi3j6afty.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695829420/imagenes/ykb6fo9s5t2nlqigi7rj.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695829420/imagenes/oqobak5b0g7afqpdt76x.webp",
    ],
    brand: "HP",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Usb Gamer 6200 Dpi Hp G360",
    price: 32114,
    description:
      "La funcionalidad al alcance de tu mano. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales. Rapidez y confiabilidad de los botones. Con sus 6 botones podrás tener mayor control e independencia para ejecutar.",
    stock: 41,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830044/imagenes/cyxjqnwsxawil9u5jq5z.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830044/imagenes/unf3dcxriuiraxz4fhph.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830043/imagenes/l0dbfiasl3smypsmxr83.webp",
    ],
    brand: "HP",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Gamer Trust Heron Rgb Gxt-170 Sensor Óptico",
    price: 74730,
    description:
      "Height of main product (in mm) 128 mm, Formfactor standard, Width of main product (in mm) 74 mm, Depth of main product (in mm) 41 mm, Total weight 135 g, Ergonomic design no",
    stock: 40,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830858/imagenes/hllnquuzzos0ojtiir2n.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830858/imagenes/fgwqrh0f3syjosdgcmf3.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695830858/imagenes/bx5lmejpjapapyafrnw8.webp",
    ],
    brand: "Trust",
    color: "Negro",
    type: "Mouse",
  },
  {
    name: "Mouse Gamer Ergonomico Trust Celox Gxt 165 Rgb 10000dpi",
    price: 61440,
    description:
      "Height of main product (in mm) 128 mm, Formfactor standard, Width of main product (in mm) 74 mm, Depth of main product (in mm) 41 mm, Total weight 135 g, Ergonomic design no",
    stock: 12,
    images: [
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831273/imagenes/e26vgvnquvpnlampw89j.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831273/imagenes/ifjygnadmzax361pjpmn.webp",
      "https://res.cloudinary.com/dntrwijx5/image/upload/v1695831273/imagenes/z8xijiqftffl9pkbtvmt.webp",
    ],
    brand: "Trust",
    color: "Negro",
    type: "Mouse",
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
];

module.exports = objProducts;
