import React from 'react';
import Slider from '../components/Slider/Slider';
import ProductsContainer from './ProductsContainer/ProductsContainer';
import Brands from './Brands/Brands';
import BlogCardGroup from './BlogCardGroup/BlogCardGroup';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ProductsContainer></ProductsContainer>
            <div>
                <Brands></Brands>
            </div>
            <BlogCardGroup></BlogCardGroup>
        </div>
    );
};

export default Home;