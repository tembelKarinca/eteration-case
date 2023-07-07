import React, { useContext, useState } from 'react'
import styles from './ProductContainer.module.scss'
import Pagination from './Pagination';
import { paginate } from '../../../utils/paginate';
import ProductCard from '@/components/ProductCard';
import { ProductContext } from '@/pages';



export default function ProductContainer() {
    const { productList, isFiltered, filteredProducts } = useContext(ProductContext)
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const onPageChange = (page) => {
        setCurrentPage(page);
    };
    const paginatedPosts = paginate(isFiltered ? filteredProducts : productList, currentPage, pageSize);



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
                items={productList?.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
        </>

    )
}
