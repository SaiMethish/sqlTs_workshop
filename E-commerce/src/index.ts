import { Product } from "./model/Product";
import { deleteProduct, searchProduct, showproduct } from "./service/productService";

export const product_list:Product[]=[];

const product1 = new Product(
    "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    64,
    "USB 3.0 and USB 2.0 Compatibility. Fast data transfers. Improve PC Performance",
    "electronics"
  );
  product1.product_id=1;
  product_list.push(product1);
  
  const product2 = new Product(
    "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    109,
    "Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads.",
    "electronics"
  );
  product2.product_id=2;
  product_list.push(product2);
  const product3 = new Product(
    "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    109,
    "3D NAND flash are applied to deliver high transfer speeds. Remarkable transfer speeds that enable faster bootup and improved overall system performance.",
    "electronics"
  );
  product3.product_id=3;
  product_list.push(product3);
  const product4 = new Product(
    "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    114,
    "Expand your PS4 gaming experience, with fast and easy setup. Sleek design with high capacity.",
    "electronics"
  );
  product4.product_id=4;
  product_list.push(product4);
  const product5 = new Product(
    "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    599,
    "21.5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount.",
    "electronics"
  );
  product5.product_id=5;
  product_list.push(product5);
  const product6 = new Product(
    "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    999.99,
    "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side, Quantum Dot (QLED) & HDR support and 1ms response time.",
    "electronics"
  );
  product6.product_id=6;
  product_list.push(product6);
  const product7 = new Product(
    "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    99.99,
    "Meet Echo - Our flagship smart speaker that connects to Alexa to play music, set alarms and timers, control smart home devices, and more.",
    "electronics"
  );
  product7.product_id=7;
  product_list.push(product7);
  const product8 = new Product(
    "Apple iPhone 12 Pro, 128GB, Pacific Blue - Fully Unlocked (Renewed)",
    899.99,
    "The iPhone 12 Pro features a 6.1-inch Super Retina XDR display, A14 Bionic chip, and a Pro camera system with 12MP Ultra Wide, Wide, and Telephoto cameras.",
    "electronics"
  );
  product8.product_id=8;
  product_list.push(product8);
  const product9 = new Product(
    "Sony WH-1000XM4 Wireless Noise Cancelling Overhead Headphones",
    348,
    "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
    "electronics"
  );
  product9.product_id=9;
  product_list.push(product9);
  const product10 = new Product(
    "GoPro HERO9 Black - Waterproof Action Camera with Front LCD and Touch Rear Screens",
    399.99,
    "Shoot stunning video with up to 5K resolution, perfect for maintaining detail even when zooming in. Capture crisp, pro-quality photos with 20MP clarity.",
    "electronics"
  );
  product10.product_id=10;
  product_list.push(product10);
  const product11 = new Product(
    "Anker PowerCore 10000 Portable Charger, One of The Smallest and Lightest 10000mAh External Batteries",
    25.99,
    "High-Speed Charging, Ultra-Compact, PowerIQ and VoltageBoost Technology, compatible with iPhone, Samsung Galaxy, and more.",
    "electronics"
  );
  product11.product_id=11;
  product_list.push(product11);
  const product12 = new Product(
    "Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls",
    49.99,
    "Powerful and portable, the Roku Streaming Stick+ has a long-range wireless receiver for 4x the range and a voice remote with TV controls.",
    "electronics"
  );
  product12.product_id=12;
  product_list.push(product12);

  const id=3;
  showproduct(id);
  deleteProduct(id);
