import { Button, Col, Input, Row } from 'antd'
import React from 'react'

const FooterPage = () => {
    return (
        <div className='padding-common py-[50px] bg-[#FFFFFF]'>
            <Row gutter={[20, 20]}>
                <Col xl={7} lg={7} md={12}>
                    <div className='text-left'>
                        <p className='text-[14px] font-bold text-[#212529] mb-4'>
                            About The Store
                        </p>
                        <p className='text-[14px] text-[#515D66] mb-2'>
                            Got Question? Call us 24/7
                        </p>
                        <p className='text-[30px] font-semibold text-[#2B38D1] mb-2'>
                            +222-1800-2628
                        </p>
                        <div className='text-[14px] text-[#212529] '>
                            <p>
                                268 St, South New York/NY 98944, United States
                            </p>
                            <p>
                                Customersupport@example.com
                            </p>
                            <p>
                                Info@example.com
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xl={5} lg={5} md={12}>
                    <div>
                        <p className='text-left text-[14px] font-bold text-[#212529] mb-4'>
                            About The Store
                        </p>
                        <div className='flex flex-col gap-3 items-start text-[14px] text-[#212529] '>
                            <p>
                                Blog Us
                            </p>
                            <p>
                                About Us
                            </p>
                            <p>
                                Delivery Information
                            </p>
                            <p>
                                Privacy Policy
                            </p>
                            <p>
                                FeedBack
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xl={5} lg={5} md={12}>
                    <div>
                        <p className='text-left text-[14px] font-bold text-[#212529] mb-4'>
                            About The Store
                        </p>
                        <div className='flex flex-col gap-3 items-start text-[14px] text-[#212529] '>
                            <p>
                                Store Location
                            </p>
                            <p>
                                Orders Tracking
                            </p>
                            <p>
                                FAQs
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xl={7} lg={7} md={12}>
                    <div>
                        <p className='text-left text-[14px] font-bold text-[#212529] mb-4 '>
                            Sign up to Newsletter
                        </p>
                        <div className='flex flex-col gap-3 items-start '>
                            <p className='text-[14px] text-[#212529] text-left'>
                                Join 20.000+ subscribers and get a new discount coupon on every
                                Saturday. Updates information on Sales and Offers.
                            </p>
                            <Row gutter={[10, 10]} >
                                <Col xl={14} lg={12} md={12} xs={24} className='enter-email'>
                                    <Input className='w-full' placeholder='Your email address...' />
                                </Col>
                                <Col xl={6} lg={4} md={12} xs={24} className='btn-email w-full'>
                                    <Button>Subscribe</Button>
                                </Col>
                            </Row>
                            <p className='text-[14px] text-[#212529] text-left'>
                                Subscribe for Uminex and get 20% off your first purchase.
                            </p>
                        </div>

                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default FooterPage