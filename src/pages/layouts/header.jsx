import { Col, Drawer, Input, Row, Select } from 'antd'
import React, { useState } from 'react'
import logo from "../../assets/Logo.png";
import account from "../../assets/account.png";
import heart from "../../assets/heart.png";
import cart from "../../assets/cart.png";
import down from "../../assets/down.png";
import line from "../../assets/line.png";
import sale from "../../assets/sale.png";
import { Button } from 'antd/es/radio';

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
    menu: [
        {
            name: "Home",
            sub: [],
        },
        {
            name: "Shop",
            sub: [],
        },
        {
            name: "Product",
            sub: [],
        },
        {
            name: "Page",
            sub: [],
        },
        {
            name: "Blog",
            sub: [],
        },
        {
            name: "Contact Us",
        },
        {
            name: "Buy Uminex!"
        },
    ]
}
const HeaderPage = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='header-container'>
            <div className='border-b border-[#E5E8EC] learn-more'>
                <Row gutter={[20, 20]} justify={"space-between"} className='py-4 padding-common'>
                    <Col className='flex gap-1'>
                        <span>
                            You are a student and students get 20% discount.
                        </span>
                        <span className='font-bold'>
                            Learn More
                        </span>
                    </Col>
                    <Col>
                        <Row gutter={40}>
                            <Col>
                                <Row gutter={[20, 20]}>
                                    {data.option.map((it, index) => (
                                        <Col key={index}>{it} </Col>
                                    ))}
                                </Row>
                            </Col>
                            <Col>
                                <Row gutter={[20, 20]}>
                                    {data.language.map((it, index) => (
                                        <Col key={index}>
                                            <div className='flex items-center'>
                                                <div>
                                                    {it}
                                                </div>
                                                <div>
                                                    <img src={down} alt="" />
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className='border-b border-[#E5E8EC] header'>
                <Row className='py-4 padding-common' align={"middle"}>
                    <Col xl={5} lg={5} md={5}>
                        <img src={logo} alt=""/>
                    </Col>
                    <Col xl={14} lg={13} md={12}>
                        <div className='flex'>
                            <div className='flex px-[24px] py-[12px] border-2 border-[#E5E8EC] rounded-tl-[5px] rounded-bl-[5px]'>
                                <div className='border-r select-search'>
                                    <Select defaultValue={"All Categories"}>
                                        {data.select.map((it, index) => {
                                            return (
                                                <Select.Option value={it} key={index}>
                                                    {it}
                                                </Select.Option>
                                            )
                                        })}
                                    </Select>
                                </div>
                                <div className='input-search'>
                                    <Input className='flex w-full' type="text" placeholder='Search in 200+ products...' />
                                </div>
                            </div>
                            <div className='btn-search flex items-center bg-[#2b38d1] px-[24px] py-[12px]  border-2 border-[#2b38d1] rounded-tr-[5px] rounded-br-[5px] font-bold text-[14px] text-[#FFFFFF]'>
                                <Button>Search</Button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={5} lg={6} md={7}>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-[10px] items-center'>
                                <div>
                                    <img src={account} alt=""/>
                                </div>
                                <div className='flex flex-col items-start cursor-pointer'>
                                    <p className='text-[11px]'>Login</p>
                                    <p className='text-[14px] font-semibold'>Account</p>
                                </div>
                            </div>
                            <div>
                                <div className='relative cursor-pointer'>
                                    <img src={heart} alt=""/>
                                    <div className='absolute -top-2 -right-2 rounded-full bg-[#DD3842] text-[#FFFFFF] h-5 w-5 flex justify-center items-center'>2</div>
                                </div>
                            </div>
                            <div className='flex gap-[10px] items-center'>
                                <div>
                                    <div className='relative'>
                                        <img src={cart} alt=""/>
                                        <div className='absolute -top-2 -right-2 rounded-full bg-[#DD3842] text-[#FFFFFF] h-5 w-5 flex justify-center items-center'>2</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start cursor-pointer'>
                                    <p className='text-[11px]'>Your Cart</p>
                                    <p className='text-[14px] font-semibold'>$28.000</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='bg-white p-4 padding-common mobile-navbar'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <div onClick={showDrawer} className='cursor-pointer'>
                        <img src={line} alt='' />
                    </div>
                </div>
                <Drawer title={<img src={logo} alt=""/>} onClose={onClose} open={open}>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <div className=''>
                                <div className='flex flex-col gap-2 px-[24px] py-[12px] border-2 border-[#E5E8EC] rounded-tl-[5px] rounded-tr-[5px]'>
                                    <div className='select-search border-b'>
                                        <Select defaultValue={"All Categories"}>
                                            {data.select.map((it, index) => {
                                                return (
                                                    <Select.Option value={it} key={index}>
                                                        {it}
                                                    </Select.Option>
                                                )
                                            })}
                                        </Select>
                                    </div>
                                    <div className='input-search'>
                                        <Input className='flex w-full' type="text" placeholder='Search in 200+ products...' />
                                    </div>
                                </div>
                                <div className='btn-search flex justify-center items-center bg-[#2b38d1] px-[24px] py-[12px]  border-2 border-[#2b38d1] rounded-br-[5px] rounded-bl-[5px] font-bold text-[14px] text-[#FFFFFF]'>
                                    <Button>Search</Button>
                                </div>
                            </div>
                        </div>

                        <div >
                            <ul className='bg-[#FFFFFF] rounded-[5px]'>
                                {
                                    data.menu.map((it, index) => (
                                        <li className='flex justify-between items-center border-b-2 border-[#E5E8EC] p-2' key={index}>
                                            <div>
                                                {it.name}
                                            </div>
                                            <div>
                                                <img src={down} alt="" />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-[10px] items-center'>
                                    <div>
                                        <img src={account} alt=""/>
                                    </div>
                                    <div className='flex flex-col items-start cursor-pointer'>
                                        <p className='text-[11px]'>Login</p>
                                        <p className='text-[14px] font-semibold'>Account</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='relative cursor-pointer'>
                                        <img src={heart} alt=""/>
                                        <div className='absolute -top-2 -right-2 rounded-full bg-[#DD3842] text-[#FFFFFF] h-5 w-5 flex justify-center items-center'>2</div>
                                    </div>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <div>
                                        <div className='relative'>
                                            <img src={cart} alt=""/>
                                            <div className='absolute -top-2 -right-2 rounded-full bg-[#DD3842] text-[#FFFFFF] h-5 w-5 flex justify-center items-center'>2</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start cursor-pointer'>
                                        <p className='text-[11px]'>Your Cart</p>
                                        <p className='text-[14px] font-semibold'>$28.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Drawer>
            </div>
            <div className='border-b border-[#E5E8EC] navbar'>
                <Row className='py-4 padding-common' justify={"end"} align={"middle"}>
                    <Col xl={5} lg={5} md={5}>
                        <div className='flex items-center gap-2'>
                            <div>
                                <img src={line} alt=""/>
                            </div>
                            <div>Browse All Categories</div>
                        </div>
                    </Col>
                    <Col xl={14} lg={14} md={12}>
                        <Row gutter={[16, 16]} >
                            {data.menu.map((it, index) => (
                                <Col key={index} className='flex items-center gap-2'>
                                    <div>{it.name} </div>
                                    <div>
                                        {
                                            it.sub
                                            &&
                                            <img src={down} alt="" />
                                        }
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xl={5} lg={5} md={7} className='whitespace-nowrap'>
                        <div className='flex items-center gap-2 '>
                            <div>
                                <img src={sale} alt=""/>
                            </div>
                            <div className='text-[14px] font-semibold'>Sale $20 Off Your First Order.</div>
                        </div>
                    </Col>
                </Row>

            </div>

        </div >
    )
}

export default HeaderPage