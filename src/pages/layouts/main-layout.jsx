import React from 'react'
import HeaderPage from './header'
import FooterPage from './footer'
import { Col, Row } from 'antd'
import payment from "../../assets/payment.png";

const MainLayout = (props) => {
    return (
        <div>
            <HeaderPage />
            <div>
                {props.children}
            </div>
            <FooterPage />
            <Row gutter={[20, 20]} justify={"space-between"} className='padding-common border-t py-[36px]'>
                <Col lg={12} md={24}>
                    <span className='flex gap-1'>
                        <span className='text-[14px] font-bold text-[#212529]'>
                            Copyright ©
                        </span>
                        <span className='text-[14px] font-bold text-[#2B38D1]'>
                            Uminex
                        </span>
                        <span className='text-[14px] font-bold text-[#212529]'>
                            all rights reserved. Powered by
                        </span>
                        <span className='text-[14px] font-bold text-[#2B38D1]'>
                            Blueskytechco.
                        </span>
                    </span>
                </Col>
                <Col lg={12} md={24}>
                    <div className='flex gap-6'>
                        <div>Payment Method:</div>
                        <div><img src={payment} alt="" /> </div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default MainLayout