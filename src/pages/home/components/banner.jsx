import React, { useState } from 'react'
import { Button, Col, Drawer, Row } from 'antd'
import right from "../../../assets/right.png";
import Slider from "../../../assets/Slider.png";
import line from "../../../assets/line.png";
const BannerPage = ({ data }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='padding-common banner'>
            <div className='bg-white p-4 padding-common mobile-navbar'>
                <div onClick={showDrawer} className='flex items-center gap-2 cursor-pointer'>
                    <div>
                        <img src={line} alt='' />
                    </div>
                    <div>Browse All Categories</div>
                </div>
                <Drawer placement={"left"} title={"Browse All Categories"} onClose={onClose} open={open} >
                    <ul className='bg-[#FFFFFF] rounded-[5px]'>
                        {
                            data.menu.map((it, index) => (
                                <li className='flex justify-between items-center border-b-2 border-[#E5E8EC] p-3' key={index}>
                                    <div>
                                        {it.name}
                                    </div>
                                    <div>
                                        <img src={right} alt='' />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Drawer>
            </div>
            <Row gutter={[20, 20]}>
                <Col xxl={5} xl={6} lg={7} className='category'>
                    <div className='h-full flex'>
                        <ul className='bg-[#FFFFFF] rounded-[5px] p-8 h-full w-full'>
                            {
                                data.menu.map((it, index) => (
                                    <li className='flex justify-between items-center border-b-2 border-[#E5E8EC] p-2' key={index}>
                                        <div>
                                            {it.name}
                                        </div>
                                        <div>
                                            <img src={right} alt="" />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Col>
                <Col xxl={19} xl={18} lg={17} >
                    <div className='h-full flex'>
                        <div className='flex flex-col justify-between'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active w-4 h-4 rounded-full"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="w-4 h-4 rounded-full"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="w-4 h-4 rounded-full"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="z-9 d-block w-full h-full" src={Slider} alt="First slide" />
                                        <div class="carousel-caption d-none d-md-block ">
                                            <div className='flex flex-col justify-center items-start gap-4'>
                                                <p className='text-[#FDE50B] text-[12px] font-bold leading-[15px]'>Gamepad console</p>
                                                <div className='flex flex-col items-start'>
                                                    <p className='text-[#FFFFFF] text-[36px] font-bold leading-[40px]'>
                                                        Today’s Offer
                                                    </p>
                                                    <span className='flex gap-1 text-[36px] font-bold leading-[40px]'>
                                                        <span className='text-[#FFFFFF]'>
                                                            Skin
                                                        </span>
                                                        <span className='text-[#17F084]'>
                                                            Gamepad
                                                        </span>
                                                        <span className='text-[#FFFFFF]'>
                                                            2022
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className='btn-sub'>
                                                    <Button>Subscribe</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-full h-full" src={Slider} alt="Second slide" />
                                        <div class="carousel-caption d-none d-md-block ">
                                            <div className='flex flex-col justify-center items-start gap-4'>
                                                <p className='text-[#FDE50B] text-[12px] font-bold leading-[15px]'>Gamepad console</p>
                                                <div className='flex flex-col items-start'>
                                                    <p className='text-[#FFFFFF] text-[36px] font-bold leading-[40px]'>
                                                        Today’s Offer
                                                    </p>
                                                    <span className='flex gap-1 text-[36px] font-bold leading-[40px]'>
                                                        <span className='text-[#FFFFFF]'>
                                                            Skin
                                                        </span>
                                                        <span className='text-[#17F084]'>
                                                            Gamepad
                                                        </span>
                                                        <span className='text-[#FFFFFF]'>
                                                            2022
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className='btn-sub'>
                                                    <Button>Subscribe</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-full h-full" src={Slider} alt="Third slide" />
                                        <div class="carousel-caption d-none d-md-block ">
                                            <div className='flex flex-col justify-center items-start gap-4'>
                                                <p className='text-[#FDE50B] text-[12px] font-bold leading-[15px]'>Gamepad console</p>
                                                <div className='flex flex-col items-start'>
                                                    <p className='text-[#FFFFFF] text-[36px] font-bold leading-[40px]'>
                                                        Today’s Offer
                                                    </p>
                                                    <span className='flex gap-1 text-[36px] font-bold leading-[40px]'>
                                                        <span className='text-[#FFFFFF]'>
                                                            Skin
                                                        </span>
                                                        <span className='text-[#17F084]'>
                                                            Gamepad
                                                        </span>
                                                        <span className='text-[#FFFFFF]'>
                                                            2022
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className='btn-sub'>
                                                    <Button>Subscribe</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <div className='p-4 bg-black rounded-full'>
                                        <div className='w-4 h-4 flex justify-center items-center'>
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        </div>
                                    </div>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <div className='p-4 bg-black rounded-full'>
                                        <div className='w-4 h-4 flex justify-center items-center'>
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <Row gutter={[5, 5]} className='mt-1'>
                                {
                                    data.banner.map((it, index) => (
                                        <Col key={index} c xl={8} lg={12} xs={8}>
                                            <img className='w-full' src={it} alt="" />
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default BannerPage