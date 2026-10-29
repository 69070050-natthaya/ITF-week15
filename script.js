// ===== ข้อมูลเมนูอาหาร (array of object) =====
const foods = [
  {
    name: "ข้าวมันไก่",
    description: "น้ำจิ้มเด็ด น้ำซุปใสๆ หอมนุ่ม เนื้อไก่เน้นๆ เสิร์ฟพร้อมข้าวมันร้อนๆ",
    price: "ราคา 50-65 บาท",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hainanese_chicken_rice.jpg/960px-Hainanese_chicken_rice.jpg",
  },
  {
    name: "ผัดกะเพราหมูสับไข่ดาว",
    description: "หมูสับผัดใบกะเพราหอมกรุ่น พร้อมไข่ดาวกรอบ ราดข้าวร้อนๆ สุดคลาสสิก",
    price: "ราคา 45-60 บาท",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ka-phrao_mu_%28basil_fried_minced_pork%29_with_rice_%26_egg%2C_Bangkok%2C_2017-11-07_%282%29.jpg/960px-Ka-phrao_mu_%28basil_fried_minced_pork%29_with_rice_%26_egg%2C_Bangkok%2C_2017-11-07_%282%29.jpg",
  },
  {
    name: "ส้มตำไทย",
    description: "มะละกอกรอบ ปรุงรสเปรี้ยวหวานเผ็ดแซ่บ ทานคู่กับไก่ย่างหรือข้าวเหนียวร้อนๆ",
    price: "ราคา 35-50 บาท",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/%E0%B8%95%E0%B8%B3%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%84%E0%B8%82%E0%B9%88%E0%B9%80%E0%B8%84%E0%B9%87%E0%B8%A1_%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B8%95%E0%B8%B3_%E0%B8%95%E0%B8%B3%E0%B8%96%E0%B8%B2%E0%B8%94_Tumtaad_%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88_01.jpg/960px-%E0%B8%95%E0%B8%B3%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%84%E0%B8%82%E0%B9%88%E0%B9%80%E0%B8%84%E0%B9%87%E0%B8%A1_%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B8%95%E0%B8%B3_%E0%B8%95%E0%B8%B3%E0%B8%96%E0%B8%B2%E0%B8%94_Tumtaad_%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88_01.jpg",
  },
  {
    name: "ก๋วยเตี๋ยวเรือ",
    description: "น้ำซุปเข้มข้นกลมกล่อม เส้นนุ่ม เนื้อเปื่อยเปื่อยนุ่มละลาย โรยด้วยถั่วงอกและผักชี",
    price: "ราคา 40-55 บาท",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Boat_noodles.jpg/960px-Boat_noodles.jpg",
  },
  {
    name: "ข้าวผัดกุ้ง",
    description: "ข้าวผัดร้อนๆ หอมกระเทียม กุ้งตัวโตเนื้อเด้ง ผัดรวมผักและไข่ โรยต้นหอม",
    price: "ราคา 60-80 บาท",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Khao_Phat_Kung.jpg/960px-Khao_Phat_Kung.jpg",
  },
];

// รูปสำรองหากรูปหลักโหลดไม่ได้
const FALLBACK_IMAGE =
  "https://placehold.co/600x400/eeeeee/999999?text=Food+Image";

// ===== อ้างอิง elements จากหน้าเว็บ =====
const foodCard = document.getElementById("foodCard");
const foodImage = document.getElementById("foodImage");
const foodName = document.getElementById("foodName");
const foodDesc = document.getElementById("foodDesc");
const foodPrice = document.getElementById("foodPrice");
const randomBtn = document.getElementById("randomBtn");

// เก็บ index ของเมนูปัจจุบัน (เริ่มต้น = เมนูแรก ข้าวมันไก่)
let currentIndex = 0;

// ===== แสดงข้อมูลเมนูในการ์ด =====
function showFood(index) {
  const food = foods[index];

  foodImage.src = food.image;
  foodImage.alt = food.name;
  foodName.textContent = food.name;
  foodDesc.textContent = food.description;
  foodPrice.textContent = food.price;
}

// ===== สุ่มเมนู (ห้ามซ้ำติดกัน) =====
function randomFood() {
  let nextIndex;

  // สุ่มไปเรื่อยๆ จนกว่าจะได้เมนูที่ไม่ใช่เมนูปัจจุบัน
  do {
    nextIndex = Math.floor(Math.random() * foods.length);
  } while (nextIndex === currentIndex && foods.length > 1);

  currentIndex = nextIndex;

  // fade เล็กน้อยตอนเปลี่ยนเมนู
  foodCard.classList.add("fade-out");
  setTimeout(() => {
    showFood(currentIndex);
    foodCard.classList.remove("fade-out");
  }, 300);
}

// ===== fallback รูปหากรูปโหลดไม่ได้ =====
foodImage.addEventListener("error", () => {
  foodImage.src = FALLBACK_IMAGE;
});

// ===== เริ่มต้นแสดงเมนูแรก (ข้าวมันไก่) =====
showFood(currentIndex);

// ===== เมื่อกดปุ่มสุ่ม =====
randomBtn.addEventListener("click", randomFood);
