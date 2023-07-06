import React, { useState } from 'react'
import styles from './ProductContainer.module.scss'
import Pagination from './Pagination';
import { paginate } from '../../../pages/api/helper/paginate';
import ProductCard from '@/components/ProductCard';

export default function ProductContainer({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const onPageChange = (page) => {
        setCurrentPage(page);
    };
    const paginatedPosts = paginate(data, currentPage, pageSize);

    return (
        <>
            <div className={styles.product_container}>

                {paginatedPosts?.map((product, key) => {
                    return (
                        <ProductCard key={key} data={product} />
                    )
                })}


            </div>
            <Pagination
                items={data.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
        </>

    )
}
