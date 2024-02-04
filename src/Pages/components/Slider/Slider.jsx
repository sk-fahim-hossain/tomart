import React from 'react';

const Slider = () => {
    const imgUrl1 = 'https://i.postimg.cc/xdn56k0w/photo-1532330393533-443990a51d10-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg'
    const imgUrl2 = 'https://i.postimg.cc/cHss1cdF/photo-1632435188816-1277a374e696-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg'
    const imgUrl3 = 'https://i.postimg.cc/0NyW86Lp/photo-1523308413200-8ab4ef0f1e0d-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg'
    return (
        <div>
            <div className="carousel h-[600px] rounded-lg">
                

                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={imgUrl3} className="w-full" />
                    <div className="absolute flex justify-between items-center h-full w-full  bg-gradient-to-r from-[#1515158c] to-[rgba(21,21,21,0)]">
                        <div className='w-1/2 ml-24 '>
                            <p className='text-3xl font-bold text-left text-white '>Exciting toy cars for endless adventures! Speed into playtime joy with our colorful collection. Buckle up and let the fun begin! 🏎🚗🚙 </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={imgUrl2} className="w-full" />
                    <div className="absolute flex justify-between items-center h-full w-full  bg-gradient-to-r from-[#1515158c] to-[rgba(21,21,21,0)]">
                        <div className='w-1/2 ml-24 '>
                            <p className='text-3xl font-bold text-left text-white '>Vibrant toy cars for little explorers! From race cars to off-road wonders, spark imaginative play with our diverse collection. Get ready for zooming fun! 🌈</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src={imgUrl1} className="w-full" />
                    <div className="absolute flex justify-between items-center h-full w-full  bg-gradient-to-r from-[#1515158c] to-[rgba(21,21,21,0)]">
                        <div className='w-1/2 ml-24 '>
                            <p className='text-3xl font-bold text-left text-white '>Build miniature highways of joy with our fantastic toy cars! Inspire creativity and storytelling with our playful collection. Start the adventure today! 🚀</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;