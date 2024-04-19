import React from 'react'
import MainLayout from '../layouts/main-layout'
import Banner1 from "../../assets/1.png";
import Banner2 from "../../assets/2.png";
import Banner3 from "../../assets/3.png";
import BannerPage from './components/banner';

import prd1 from "../../assets/prd1.png";
import prd2 from "../../assets/prd2.png";
import prd3 from "../../assets/prd3.png";
import prd4 from "../../assets/prd4.png";
import prd5 from "../../assets/prd5.png";
import prd6 from "../../assets/prd6.png";
import prd7 from "../../assets/prd7.png";
import prd8 from "../../assets/prd8.png";
import prd9 from "../../assets/prd9.png";

import ProductPage from './components/product';


const data = {
    option: [
        "Store Locator",
        "Order Tracking",
        "FAQs"
    ],
    language: [
        "English",
        "USD"
    ],
    select: [
        "All Categories",
        "All Categories",
        "All Categories",
        "All Categories",
    ],
    banner: [
        Banner1,
        Banner2,
        Banner3
    ],
    menu: [
        {
            name: "Computer & Desktop",
            sub: [],
        },
        {
            name: "Laptop & Ipad",
            sub: [],
        },
        {
            name: "Cameras & Photos",
            sub: [],
        },
        {
            name: "Smart Phones & Tablets",
            sub: [],
        },
        {
            name: "Home & Kitchen",
            sub: [],
        },
        {
            name: "TV & Audios",
        },
        {
            name: "Health & Beauty"
        },
        {
            name: "Watches & Eyewear"
        },
        {
            name: "Top Deals"
        },
        {
            name: "Top Selling Products"
        },
        {
            name: "Top Featured Products"
        },
    ],
    product: {
        product1: [
            {
                img: prd1,
                name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
                price: "128.00",
                sale: "12.00",
                percent: 20,
                star: 5,
                review: 68,
                remain: 82,
            },
            {
                img: prd2,
                name: "Apple Watch Aluminum Case Pride Edition",
                price: "128.00",
                star: 5,
                review: 68,
                remainDay: 2,
                new: true
            },
            {
                img: prd3,
                name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
                price: "128.00",
                sale: "12.00",
                percent: 20,
                star: 5,
                review: 68,
                remain: 82,
            },
            {
                img: prd4,
                name: "Apple Watch Aluminum Case Pride Edition",
                price: "128.00",
                star: 5,
                review: 68,
                remainDay: 2
            },
        ],
        product2: [
            {
                img: prd5,
                name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
                price: "128.00",
                sale: "12.00",
                percent: 20,
                star: 5,
                review: 68,
                remain: 82,
                remainDay: 2
            },
            {
                img: prd6,
                name: "Apple Watch Aluminum Case Pride Edition",
                price: "128.00",
                star: 5,
                review: 68,
                remainDay: 2
            },
            {
                img: prd7,
                name: "Apple iPhone 12 Pro Max 128GB - Unlocked",
                price: "128.00",
                sale: "12.00",
                percent: 20,
                star: 5,
                review: 68,
                remain: 82,
                remainDay: 2
            },
            {
                img: prd8,
                name: "Apple Watch Aluminum Case Pride Edition",
                price: "128.00",
                star: 5,
                review: 68,
                remainDay: 2
            },
        ],
        product3: {
            img: prd9,
            name: "Apple iPhone 13 Pro Max 128GB Gold Fully Unlocked",
            price: "128.00",
            sale: "12.00",
            percent: 20,
            star: 5,
            review: 68,
            remainDay: 2
        },
    }
}
const HomePage = () => {
    return (
        <MainLayout>
            <div className='bg-[#F1F5F6] py-[30px]'>
                <BannerPage data={data} />
                <ProductPage data={data} />
            </div>
        </MainLayout >
    )
}

export default HomePage