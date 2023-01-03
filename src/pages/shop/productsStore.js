import image1 from '../../assets/shop_img/apparel_img/kaisen_anime_hoodie.jpg';
import image2 from '../../assets/shop_img/apparel_img/kaisen_anime_hoodie_2.jpg';
import image3 from '../../assets/shop_img/apparel_img/anime_t_shirt.jpg';
import image4 from '../../assets/shop_img/apparel_img/collection.jpg';
import image5 from '../../assets/shop_img/apparel_img/naruto_pants.jpg';
import image6 from '../../assets/shop_img/apparel_img/naruto_pants_2.jpg';
import image7 from '../../assets/shop_img/apparel_img/tokyo_ghoul_hoodie.jpg';

import image8 from '../../assets/shop_img/accessories_img/anime_toy.jpg';
import image9 from '../../assets/shop_img/accessories_img/socks_anime.jpg';
import image10 from '../../assets/shop_img/accessories_img/anime_watter_bottle.jpg';

const productsArray = [
    {
        id: "1",
        title: "anime print hoodie",
        price: 16.99,
        img: image7,
    },
    {
        id: "2",
        title: "anime print hoodie",
        price: 12.99,
        img: image2,
    },
    {
        id: "3",
        title: "anime T-shirt",
        price: 8.79,
        img: image3,
    },
    {
        id: "4",
        title: "anime collection",
        price: 39.99,
        img: image4,
    },
    {
        id: "5",
        title: "anime pants",
        price: 11.99,
        img: image5,
    },
    {
        id: "6",
        title: "anime pants",
        price: 11.99,
        img: image6,
    },
    {
        id: "7",
        title: "anime print hoodie",
        price: 10.99,
        img: image1,
    },
]

const productAccessories = [
    {
        id: "8",
        title: "anime toy",
        price: 21.99,
        img: image8,
    },
    {
        id: "9",
        title: "anime watter bottle",
        price: 19.99,
        img: image10,
    },
    {
        id: "10",
        title: "anime socks",
        price: 6.99,
        img: image9,
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return  undefined;
    }

    return productData;
}

function getProductAccessoriesData(id) {
    let productAccessoriesData = productAccessories.find(product => product.id === id);

    if (productAccessories === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return  undefined;
    }

    return productAccessoriesData;
}

export { productAccessories ,productsArray, getProductData, getProductAccessoriesData };