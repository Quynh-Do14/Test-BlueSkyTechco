import { Col, Row } from 'antd'
import React from 'react'
import rate from '../../../assets/rate.png'
import linered from '../../../assets/linered.png'

const ProductPage = ({ data }) => {

    return (
        <div className='padding-common py-12'>
            <Row gutter={[6, 6]} >
                <Col xl={8} lg={8} md={24}>
                    <div className='h-full flex'>
                        <Row gutter={[5, 5]}>
                            {data.product.product1.map((it, index) => {
                                return (
                                    <Col span={12} key={index} >
                                        <div className='p-[20px] bg-[#FFFFFF] h-full rounded-[5px]'>
                                            <div>
                                                <div className='relative'>
                                                    <img src={it.img} alt="" className='w-full' />
                                                </div>
                                                {
                                                    it.percent
                                                        ?
                                                        <div className='absolute top-4 py-1 px-2 bg-[#DC323C] text-[#FFFFFF] text-[12px] font-semibold'>-{it.percent}%</div>
                                                        :
                                                        `${it.new}`
                                                            ?
                                                            <div className='absolute top-4 py-1 px-2 bg-[#008A00] text-[#FFFFFF] text-[12px] font-semibold'>NEW</div>
                                                            : null
                                                }
                                            </div>
                                            <div className='text-[14px] font-semibold text-left mb-4'>{it.name}</div>
                                            <div className='flex items-center gap-1'>
                                                <div>
                                                    <img src={rate} alt="" />
                                                </div>
                                                <div className='text-[#8D979E] text-[12px]'>({it.review}) </div>
                                            </div>
                                            <div className='flex justify-start items-center gap-1 mb-1'>
                                                <div className={`${it.sale ? "text-[#DC323C]" : "text-[#2b38d1]"} font-semibold text-[18px]`}>${it.price} </div>
                                                {it.sale && <div className='text-[14px] text-[#8D979E]'>${it.sale} </div>}
                                            </div>
                                            {
                                                it.remain
                                                    ?
                                                    <span className='flex gap-1 text-[12px] font-semibold'>
                                                        <span className='text-[#008a00]'>In stock</span>
                                                        <span className='text-[#212519]'>{it.remain}</span>
                                                        <span className='text-[#515d66]'>products</span>
                                                    </span>
                                                    :
                                                    <span className='flex gap-1 text-[12px] font-semibold text-[#ef262c]'>
                                                        <span>Only</span>
                                                        <span>{it.remainDay}</span>
                                                        <span>days</span>
                                                    </span>
                                            }

                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Col>
                <Col xl={8} lg={8} md={24} className='h-full w-full'>
                    <div className='h-full w-full'>
                        <div className='p-[20px] bg-[#FFFFFF] rounded-[5px]'>
                            <div className='py-3 text-left text-[#212529] text-[16px] font-bold border-b'>
                                Today’s Offer
                            </div>
                            <div>
                                <div className='relative mt-4'>
                                    <img src={data.product.product3.img} alt="" className='w-full' />
                                    {
                                        data.product.product3.percent
                                            ?
                                            <div className='absolute top-0 py-1 px-2 bg-[#DC323C] text-[#FFFFFF] text-[12px] font-semibold rounded-[2px]'>-{data.product.product3.percent}%</div>
                                            :
                                            data.product.product3.new
                                            &&
                                            <div className='absolute top-0 py-1 px-2 bg-[#008A00] text-[#FFFFFF] text-[12px] font-semibold rounded-[2px]'>NEW</div>
                                    }
                                </div>

                            </div>
                            <div className='text-[14px] font-semibold text-left mb-4'>{data.product.product3.name}</div>
                            <div className='flex items-center gap-1'>
                                <div>
                                    <img src={rate} alt="" />
                                </div>
                                <div className='text-[#8D979E] text-[12px]'>({data.product.product3.review}) </div>
                            </div>
                            <div className='flex justify-start items-center gap-1 mb-1'>
                                <div className={`${data.product.product3.sale ? "text-[#DC323C]" : "text-[#2b38d1]"} font-semibold text-[18px]`}>${data.product.product3.price} </div>
                                {data.product.product3.sale && <div className='text-[14px] text-[#8D979E]'>${data.product.product3.sale} </div>}
                            </div>

                            <div className='text-left text-[#8D979E] text-[14px] mb-2'>
                                Hurry up! Offer ends in:
                            </div>
                            <div className='flex gap-1 items-center mb-[20px]'>
                                <div className='bg-[#DC323C] py-[16px] px-[14px] text-[#FFFFFF] text-[14px] font-bold rounded-[3px]'>826</div>
                                <div className='text-[36px]'>:</div>
                                <div className='bg-[#DC323C] py-[16px] px-[14px] text-[#FFFFFF] text-[14px] font-bold rounded-[3px]'>29</div>
                                <div className='text-[36px]'>:</div>
                                <div className='bg-[#DC323C] py-[16px] px-[14px] text-[#FFFFFF] text-[14px] font-bold rounded-[3px]'>20</div>
                                <div className='text-[36px]'>:</div>
                                <div className='bg-[#DC323C] py-[16px] px-[14px] text-[#FFFFFF] text-[14px] font-bold rounded-[3px]'>08</div>
                            </div>
                            <div className='mb-[4px]'>
                                <img src={linered} alt="" className='w-full' />
                            </div>
                            <span className='flex gap-1 text-[12px] font-semibold'>
                                <span className='text-[#515d66]'>Sold:</span>
                                <span className='text-[#212529]'>620/896</span>
                                <span className='text-[#515d66]'>products</span>
                            </span>
                        </div>
                    </div>

                </Col>
                <Col xl={8} lg={8} md={24}>
                    <div className='h-full flex'>
                        <Row gutter={[5, 5]}>
                            {data.product.product2.map((it, index) => {
                                return (
                                    <Col span={12} key={index}>
                                        <div className='p-[20px] bg-[#FFFFFF] h-full rounded-[5px]'>
                                            <div>
                                                <div className='relative'>
                                                    <img src={it.img} alt="" className='w-full' />
                                                </div>
                                                {
                                                    it.percent
                                                        ?
                                                        <div className='absolute top-4 py-1 px-2 bg-[#DC323C] text-[#FFFFFF] text-[12px] font-semibold rounded-[2px]'>-{it.percent}%</div>
                                                        :
                                                        it.new
                                                        &&
                                                        <div className='absolute top-4 py-1 px-2 bg-[#008A00] text-[#FFFFFF] text-[12px] font-semibold rounded-[2px]'>NEW</div>
                                                }
                                            </div>
                                            <div className='text-[14px] font-semibold text-left mb-4'>{it.name}</div>
                                            <div className='flex items-center gap-1'>
                                                <div>
                                                    <img src={rate} alt="" />
                                                </div>
                                                <div className='text-[#8D979E] text-[12px]'>({it.review}) </div>
                                            </div>
                                            <div className='flex justify-start items-center gap-1 mb-1'>
                                                <div className={`${it.sale ? "text-[#DC323C]" : "text-[#2b38d1]"} font-semibold text-[18px]`}>${it.price} </div>
                                                {it.sale && <div className='text-[14px] text-[#8D979E]'>${it.sale} </div>}
                                            </div>
                                            {
                                                it.remain
                                                    ?
                                                    <span className='flex gap-1 text-[12px] font-semibold'>
                                                        <span className='text-[#008a00]'>In stock</span>
                                                        <span className='text-[#212519]'>{it.remain}</span>
                                                        <span className='text-[#515d66]'>products</span>
                                                    </span>
                                                    :
                                                    <span className='flex gap-1 text-[12px] font-semibold text-[#ef262c]'>
                                                        <span>Only</span>
                                                        <span>{it.remainDay}</span>
                                                        <span>days</span>
                                                    </span>
                                            }

                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductPage