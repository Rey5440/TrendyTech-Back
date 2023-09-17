const objProducts = [
  {
    name: "HyperX Alloy FPS Pro Mechanical Keyboard",
    price: 9999,
    description:
      "Mechanical gaming keyboard with customizable RGB backlighting.",
    stock: 50,
    images: [
      "https://drive.google.com/uc?id=1h_rrvW3_IXxxQ7KPan_y3Kf_FXtuRduW",
      "https://drive.google.com/uc?id=1yylwUxKb3wCJN0zhUwd6hMfJmAfVohhF",
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
      "https://drive.google.com/uc?id=1yclMDE2ZFXpU8FCl21uhhanLguu2ir1s",
      "https://drive.google.com/uc?id=1ol32RwZSoHVYO1QgkTpTMYE99FXbhUmT",
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
      "https://drive.google.com/uc?id=1Z01qBtlZHzrE-4IF0u2NvM5YMMz0aU6v",
      "https://drive.google.com/uc?id=1mLsfnn-O8Z3dXqn_JfSEGgFVujrQ-zDt",
    ],
    brand: "Razer",
    color: "Black",
    type: "Headset",
  },
  {
    name: "Logitech G Pro X Mechanical Gaming Keyboard",
    price: 14999,
    description:
      "Mechanical gaming keyboard with customizable switches for pro-level performance.",
    stock: 15,
    images: [
      "https://drive.google.com/uc?id=1JxFQtGANs5NvdU1pDU1kPnRYOA9GUGeH",
      "https://drive.google.com/uc?id=1ZKeyP0PHdY464a5iqCzx8moa9XEwScs5",
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
      "https://drive.google.com/uc?id=1kRVXAfjYK7j4fpyMayO31DCcdLcpno52",
      "https://drive.google.com/uc?id=10cjZS97zcPtMW4MHgxhwXjBqZFu_45pr",
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
      "https://drive.google.com/uc?id=1fRAV4T7QnPTB0W0-RPksKCaMmQw92rnn",
      "https://drive.google.com/uc?id=1tc9h8IUtGZ6wue2UVnk-9-kR53eUZope",
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
      "https://drive.google.com/uc?id=1A7sQ-9OPaFvPgehN3vEcN6WyZMk5_y4p",
      "https://drive.google.com/uc?id=1sGlmvHJRnEBb9bjKFfrQeRegNLlHkLxy",
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
      "https://drive.google.com/uc?id=1c62tai7LWLG1KiB4TyynQSG6M42eMsVM",
      "https://drive.google.com/uc?id=1qIsjZ1aYnGa-T_60Em4gjFlixGZe1E0G",
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
      "https://drive.google.com/uc?id=1hsTdQWHYWVIdrGmNwIIRzHw_t9n22FvL",
      "https://drive.google.com/uc?id=1sZIO2wKvJf63UhvvMvlDo75MXs83Pkvt",
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
      "https://drive.google.com/uc?id=1t7_fgzUatRIvu9yEOQaG6fPPNROo2F25",
      "https://drive.google.com/uc?id=1WJUvlahEoj2KOtaxBui7q1pipNP",
    ],
    brand: "GoPro",
    color: "Black",
    type: "Action Camera",
  },
  {
    name: "Canon EOS 90D DSLR Camera",
    price: 99999,
    description:
      "High-quality DSLR camera with 32.5MP sensor and 4K video recording.",
    stock: 8,
    images: [
      "https://drive.google.com/uc?id=18smd390uaAJB4hT3BmBG09-8dJVoG54w",
      "https://drive.google.com/uc?id=1lOV7YOwb18RFg8njXYcNbE7nOOENl1T6",
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
      "https://drive.google.com/uc?id=1BIFQW92k2TE8Em-SeMOHlyR9f4rzzoxa",
      "https://drive.google.com/uc?id=1N8jz2Zqfz-Ynb5mGytUa3aVOGCN4eenr",
    ],
    brand: "Fitbit",
    color: "Slate Blue",
    type: "Fitness Tracker",
  },
  {
    name: "HyperX Alloy FPS Pro Mechanical Keyboard",
    price: 9999,
    description:
      "Mechanical gaming keyboard with customizable RGB backlighting.",
    stock: 50,
    images: [
      "https://drive.google.com/uc?id=1h_rrvW3_IXxxQ7KPan_y3Kf_FXtuRduW",
      "https://drive.google.com/uc?id=1yylwUxKb3wCJN0zhUwd6hMfJmAfVohhF",
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
      "https://drive.google.com/uc?id=1yclMDE2ZFXpU8FCl21uhhanLguu2ir1s",
      "https://drive.google.com/uc?id=1ol32RwZSoHVYO1QgkTpTMYE99FXbhUmT",
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
      "https://drive.google.com/uc?id=1Z01qBtlZHzrE-4IF0u2NvM5YMMz0aU6v",
      "https://drive.google.com/uc?id=1mLsfnn-O8Z3dXqn_JfSEGgFVujrQ-zDt",
    ],
    brand: "Razer",
    color: "Black",
    type: "Headset",
  },
  {
    name: "Logitech G Pro X Mechanical Gaming Keyboard",
    price: 14999,
    description:
      "Mechanical gaming keyboard with customizable switches for pro-level performance.",
    stock: 15,
    images: [
      "https://drive.google.com/uc?id=1JxFQtGANs5NvdU1pDU1kPnRYOA9GUGeH",
      "https://drive.google.com/uc?id=1ZKeyP0PHdY464a5iqCzx8moa9XEwScs5",
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
      "https://drive.google.com/uc?id=1kRVXAfjYK7j4fpyMayO31DCcdLcpno52",
      "https://drive.google.com/uc?id=10cjZS97zcPtMW4MHgxhwXjBqZFu_45pr",
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
      "https://drive.google.com/uc?id=1fRAV4T7QnPTB0W0-RPksKCaMmQw92rnn",
      "https://drive.google.com/uc?id=1tc9h8IUtGZ6wue2UVnk-9-kR53eUZope",
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
      "https://drive.google.com/uc?id=1A7sQ-9OPaFvPgehN3vEcN6WyZMk5_y4p",
      "https://drive.google.com/uc?id=1sGlmvHJRnEBb9bjKFfrQeRegNLlHkLxy",
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
      "https://drive.google.com/uc?id=1c62tai7LWLG1KiB4TyynQSG6M42eMsVM",
      "https://drive.google.com/uc?id=1qIsjZ1aYnGa-T_60Em4gjFlixGZe1E0G",
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
      "https://drive.google.com/uc?id=1hsTdQWHYWVIdrGmNwIIRzHw_t9n22FvL",
      "https://drive.google.com/uc?id=1sZIO2wKvJf63UhvvMvlDo75MXs83Pkvt",
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
      "https://drive.google.com/uc?id=1t7_fgzUatRIvu9yEOQaG6fPPNROo2F25",
      "https://drive.google.com/uc?id=1WJUvlahEoj2KOtaxBui7q1pipNP",
    ],
    brand: "GoPro",
    color: "Black",
    type: "Action Camera",
  },
  {
    name: "Canon EOS 90D DSLR Camera",
    price: 99999,
    description:
      "High-quality DSLR camera with 32.5MP sensor and 4K video recording.",
    stock: 8,
    images: [
      "https://drive.google.com/uc?id=18smd390uaAJB4hT3BmBG09-8dJVoG54w",
      "https://drive.google.com/uc?id=1lOV7YOwb18RFg8njXYcNbE7nOOENl1T6",
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
      "https://drive.google.com/uc?id=1BIFQW92k2TE8Em-SeMOHlyR9f4rzzoxa",
      "https://drive.google.com/uc?id=1N8jz2Zqfz-Ynb5mGytUa3aVOGCN4eenr",
    ],
    brand: "Fitbit",
    color: "Slate Blue",
    type: "Fitness Tracker",
  },
  {
    name: "HyperX Alloy FPS Pro Mechanical Keyboard",
    price: 9999,
    description:
      "Mechanical gaming keyboard with customizable RGB backlighting.",
    stock: 50,
    images: [
      "https://drive.google.com/uc?id=1h_rrvW3_IXxxQ7KPan_y3Kf_FXtuRduW",
      "https://drive.google.com/uc?id=1yylwUxKb3wCJN0zhUwd6hMfJmAfVohhF",
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
      "https://drive.google.com/uc?id=1yclMDE2ZFXpU8FCl21uhhanLguu2ir1s",
      "https://drive.google.com/uc?id=1ol32RwZSoHVYO1QgkTpTMYE99FXbhUmT",
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
      "https://drive.google.com/uc?id=1Z01qBtlZHzrE-4IF0u2NvM5YMMz0aU6v",
      "https://drive.google.com/uc?id=1mLsfnn-O8Z3dXqn_JfSEGgFVujrQ-zDt",
    ],
    brand: "Razer",
    color: "Black",
    type: "Headset",
  },
  {
    name: "Logitech G Pro X Mechanical Gaming Keyboard",
    price: 14999,
    description:
      "Mechanical gaming keyboard with customizable switches for pro-level performance.",
    stock: 15,
    images: [
      "https://drive.google.com/uc?id=1JxFQtGANs5NvdU1pDU1kPnRYOA9GUGeH",
      "https://drive.google.com/uc?id=1ZKeyP0PHdY464a5iqCzx8moa9XEwScs5",
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
      "https://drive.google.com/uc?id=1kRVXAfjYK7j4fpyMayO31DCcdLcpno52",
      "https://drive.google.com/uc?id=10cjZS97zcPtMW4MHgxhwXjBqZFu_45pr",
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
      "https://drive.google.com/uc?id=1fRAV4T7QnPTB0W0-RPksKCaMmQw92rnn",
      "https://drive.google.com/uc?id=1tc9h8IUtGZ6wue2UVnk-9-kR53eUZope",
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
      "https://drive.google.com/uc?id=1A7sQ-9OPaFvPgehN3vEcN6WyZMk5_y4p",
      "https://drive.google.com/uc?id=1sGlmvHJRnEBb9bjKFfrQeRegNLlHkLxy",
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
      "https://drive.google.com/uc?id=1c62tai7LWLG1KiB4TyynQSG6M42eMsVM",
      "https://drive.google.com/uc?id=1qIsjZ1aYnGa-T_60Em4gjFlixGZe1E0G",
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
      "https://drive.google.com/uc?id=1hsTdQWHYWVIdrGmNwIIRzHw_t9n22FvL",
      "https://drive.google.com/uc?id=1sZIO2wKvJf63UhvvMvlDo75MXs83Pkvt",
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
      "https://drive.google.com/uc?id=1t7_fgzUatRIvu9yEOQaG6fPPNROo2F25",
      "https://drive.google.com/uc?id=1WJUvlahEoj2KOtaxBui7q1pipNP",
    ],
    brand: "GoPro",
    color: "Black",
    type: "Action Camera",
  },
  {
    name: "Canon EOS 90D DSLR Camera",
    price: 99999,
    description:
      "High-quality DSLR camera with 32.5MP sensor and 4K video recording.",
    stock: 8,
    images: [
      "https://drive.google.com/uc?id=18smd390uaAJB4hT3BmBG09-8dJVoG54w",
      "https://drive.google.com/uc?id=1lOV7YOwb18RFg8njXYcNbE7nOOENl1T6",
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
      "https://drive.google.com/uc?id=1BIFQW92k2TE8Em-SeMOHlyR9f4rzzoxa",
      "https://drive.google.com/uc?id=1N8jz2Zqfz-Ynb5mGytUa3aVOGCN4eenr",
    ],
    brand: "Fitbit",
    color: "Slate Blue",
    type: "Fitness Tracker",
  },
  {
    name: "HyperX Alloy FPS Pro Mechanical Keyboard",
    price: 9999,
    description:
      "Mechanical gaming keyboard with customizable RGB backlighting.",
    stock: 50,
    images: [
      "https://drive.google.com/uc?id=1h_rrvW3_IXxxQ7KPan_y3Kf_FXtuRduW",
      "https://drive.google.com/uc?id=1yylwUxKb3wCJN0zhUwd6hMfJmAfVohhF",
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
      "https://drive.google.com/uc?id=1yclMDE2ZFXpU8FCl21uhhanLguu2ir1s",
      "https://drive.google.com/uc?id=1ol32RwZSoHVYO1QgkTpTMYE99FXbhUmT",
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
      "https://drive.google.com/uc?id=1Z01qBtlZHzrE-4IF0u2NvM5YMMz0aU6v",
      "https://drive.google.com/uc?id=1mLsfnn-O8Z3dXqn_JfSEGgFVujrQ-zDt",
    ],
    brand: "Razer",
    color: "Black",
    type: "Headset",
  },
  {
    name: "Logitech G Pro X Mechanical Gaming Keyboard",
    price: 14999,
    description:
      "Mechanical gaming keyboard with customizable switches for pro-level performance.",
    stock: 15,
    images: [
      "https://drive.google.com/uc?id=1JxFQtGANs5NvdU1pDU1kPnRYOA9GUGeH",
      "https://drive.google.com/uc?id=1ZKeyP0PHdY464a5iqCzx8moa9XEwScs5",
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
      "https://drive.google.com/uc?id=1kRVXAfjYK7j4fpyMayO31DCcdLcpno52",
      "https://drive.google.com/uc?id=10cjZS97zcPtMW4MHgxhwXjBqZFu_45pr",
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
      "https://drive.google.com/uc?id=1fRAV4T7QnPTB0W0-RPksKCaMmQw92rnn",
      "https://drive.google.com/uc?id=1tc9h8IUtGZ6wue2UVnk-9-kR53eUZope",
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
      "https://drive.google.com/uc?id=1A7sQ-9OPaFvPgehN3vEcN6WyZMk5_y4p",
      "https://drive.google.com/uc?id=1sGlmvHJRnEBb9bjKFfrQeRegNLlHkLxy",
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
      "https://drive.google.com/uc?id=1c62tai7LWLG1KiB4TyynQSG6M42eMsVM",
      "https://drive.google.com/uc?id=1qIsjZ1aYnGa-T_60Em4gjFlixGZe1E0G",
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
      "https://drive.google.com/uc?id=1hsTdQWHYWVIdrGmNwIIRzHw_t9n22FvL",
      "https://drive.google.com/uc?id=1sZIO2wKvJf63UhvvMvlDo75MXs83Pkvt",
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
      "https://drive.google.com/uc?id=1t7_fgzUatRIvu9yEOQaG6fPPNROo2F25",
      "https://drive.google.com/uc?id=1WJUvlahEoj2KOtaxBui7q1pipNP",
    ],
    brand: "GoPro",
    color: "Black",
    type: "Action Camera",
  },
  {
    name: "Canon EOS 90D DSLR Camera",
    price: 99999,
    description:
      "High-quality DSLR camera with 32.5MP sensor and 4K video recording.",
    stock: 8,
    images: [
      "https://drive.google.com/uc?id=18smd390uaAJB4hT3BmBG09-8dJVoG54w",
      "https://drive.google.com/uc?id=1lOV7YOwb18RFg8njXYcNbE7nOOENl1T6",
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
      "https://drive.google.com/uc?id=1BIFQW92k2TE8Em-SeMOHlyR9f4rzzoxa",
      "https://drive.google.com/uc?id=1N8jz2Zqfz-Ynb5mGytUa3aVOGCN4eenr",
    ],
    brand: "Fitbit",
    color: "Slate Blue",
    type: "Fitness Tracker",
  },
];


module.exports = objProducts;
