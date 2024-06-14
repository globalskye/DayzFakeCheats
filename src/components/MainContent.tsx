import React from 'react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import '../styles/styles.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const MainContent: React.FC = () => {
    return (
        <div className="main-content">
            <div className="product-info">
                <h1>Название продукта</h1>
                <p>Информация о продукте, описание и т.д.</p>
            </div>
            <motion.div
                className="product-cards"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                {/* Добавьте столько карточек, сколько нужно */}
            </motion.div>
        </div>
    );
};

export default MainContent;