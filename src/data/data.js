import toysImg from "../assets/images/other/toys.png";
import homeImg from "../assets/images/other/home.png";
import booksImg from "../assets/images/other/books.png";
import shoesImg from "../assets/images/other/shoes.png";
import sportImg from "../assets/images/other/sport.png";
import paintImg from "../assets/images/other/paint.png";
import cloverImg from "../assets/images/other/clover.png";
import clothesImg from "../assets/images/other/clothes.png";
import korzinkaImg from "../assets/images/other/korzinka.png";
import firstAidImg from "../assets/images/other/first-aid.png";
import supraImg from "../assets/images/other/toyota-supra.png";
import parfumeryImg from "../assets/images/other/parfumery.png";
import electronicsImg from "../assets/images/other/electronics.png";
import accessoriesImg from "../assets/images/other/accessories.png";
import animalProductImg from "../assets/images/other/animal-products.png";
import householdItemsImg from "../assets/images/other/household-items.png";
import buildingProductsImg from "../assets/images/other/building-products.png";
import householdSubstancesImg from "../assets/images/other/household-substances.png";
import householdAppliancesImg from "../assets/images/other/category_household-appliances.png";

export const productTypesData = [
  {
    label: "Elektronika",
    value: "electronics",
    backgroundColor: {
      light: "#C1F4AF",
      normal: "#90EB70",
    },
    image: {
      src: electronicsImg,
      alt: "electronics",
    },
  },
  {
    label: "Maishiy texnika",
    value: "household-appliances",
    backgroundColor: {
      light: "#F4E094",
      normal: "#EFCC4E",
    },
    image: {
      src: householdAppliancesImg,
      alt: "household appliances",
    },
  },
  {
    label: "Kiyimlar",
    value: "clothes",
    backgroundColor: {
      light: "#00000015",
      normal: "#00000013",
    },
    image: {
      src: clothesImg,
      alt: "clothes",
    },
  },
  {
    label: "Oyoq kiyimlar",
    value: "shoes",
    backgroundColor: {
      light: "#BED6EF",
      normal: "#8DB8E2",
    },
    image: {
      src: shoesImg,
      alt: "shoes",
    },
  },
  {
    label: "Aksessuarlar",
    value: "accessories",
    backgroundColor: {
      light: "#C5BEEE",
      normal: "#A095E4",
    },
    image: {
      src: accessoriesImg,
      alt: "accessories",
    },
  },
  {
    label: "Parfumeriya",
    value: "parfumery",
    backgroundColor: {
      light: "#fcfabf",
      normal: "#fffb8d",
    },
    image: {
      src: parfumeryImg,
      alt: "parfumery",
    },
  },
  {
    label: "Salomatlik",
    value: "health",
    backgroundColor: {
      light: "#FAAEAD",
      normal: "#F56666",
    },
    image: {
      src: firstAidImg,
      alt: "health",
    },
  },
  {
    label: "Uy-ro'zg'or buyumlari",
    value: "household-items",
    backgroundColor: {
      light: "#fedab8",
      normal: "#fec07a",
    },
    image: {
      src: householdItemsImg,
      alt: "household items",
    },
  },
  {
    label: "Qurilish jihozlari",
    value: "construction-equipment",
    backgroundColor: {
      light: "#d0ffad",
      normal: "#c0fe7a",
    },
    image: {
      src: buildingProductsImg,
      alt: "building products",
    },
  },
  {
    label: "Avtomobil jihozlari",
    value: "automotive-products",
    backgroundColor: {
      light: "#FAAEAD",
      normal: "#F56666",
    },
    image: {
      src: supraImg,
      alt: "toyota supra",
    },
  },
  {
    label: "Bolalar uchun mahsulotlar",
    value: "products-for-children",
    backgroundColor: {
      light: "#F4E094",
      normal: "#EFCC4E",
    },
    image: {
      src: toysImg,
      alt: "products for children",
    },
  },
  {
    label: "Sevimli mashg'ulot va ijodkorlik",
    value: "hobby-and-creativity",
    backgroundColor: {
      light: "#BED6EF",
      normal: "#8DB8E2",
    },
    image: {
      src: paintImg,
      alt: "paint",
    },
  },
  {
    label: "Sport va dam olish",
    value: "sports-and-recreation",
    backgroundColor: {
      light: "#C1F4AF",
      normal: "#90EB70",
    },
    image: {
      src: sportImg,
      alt: "sport",
    },
  },
  {
    label: "Oziq-ovqat mahsulotlari",
    value: "food-products",
    backgroundColor: {
      light: "#e6adff",
      normal: "#de90ff",
    },
    image: {
      src: korzinkaImg,
      alt: "products",
    },
  },
  {
    label: "Maishiy kimyoviy moddalar",
    value: "household-chemicals",
    backgroundColor: {
      light: "#d5fcf9",
      normal: "#b2fff6",
    },
    image: {
      src: householdSubstancesImg,
      alt: "household substances",
    },
  },
  {
    label: "Hayvonlar uchun mahsulotlar",
    value: "products-for-animals",
    backgroundColor: {
      light: "#ffaded",
      normal: "#ff8ae6",
    },
    image: {
      src: animalProductImg,
      alt: "products for animals",
    },
  },
  {
    label: "Kitoblar",
    value: "books",
    backgroundColor: {
      light: "#ffadca",
      normal: "#ff8aaf",
    },
    image: {
      src: booksImg,
      alt: "books",
    },
  },
  {
    label: "Kottej, bog' va uy",
    value: "garden-and-house",
    backgroundColor: {
      light: "#bbadff",
      normal: "#a98aff",
    },
    image: {
      src: homeImg,
      alt: "home",
    },
  },
  {
    label: "Boshqa",
    value: "other",
    backgroundColor: {
      light: "#c6fcc7",
      normal: "#adffae",
    },
    image: {
      src: cloverImg,
      alt: "other products",
    },
  },
];

export const imageBaseUrl = "https:/menemarket-8699a792d090.herokuapp.com/";
