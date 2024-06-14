import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard: React.FC = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Название товара
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Описание товара
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;