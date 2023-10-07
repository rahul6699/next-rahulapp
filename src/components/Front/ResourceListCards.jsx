"use client"
import { useState,useEffect } from "react";
import ReactPaginate from 'react-paginate';
const ResourceListCards = (props) => {
    const [items,setItems] = useState([]);
    const [pageCount,setPageCount] = useState(0);
    let itemsPerPage = 10;
    useEffect(()=>{
        const getProducts = async () => {
            const res = await fetch(
                `https://dummyjson.com/products?skip=0&limit=${itemsPerPage}`
            );
            const data = await res.json();
            const totalCount = data.total;
            setPageCount(Math.ceil(totalCount/itemsPerPage))
            setItems(data.products)
        };
        getProducts();
    },[]);

    const fetchProducts = async (currentPage) => {
        const res = await fetch(
            `https://dummyjson.com/products?skip=${currentPage}&limit=${itemsPerPage}`
        );
        const data = await res.json();
        return data
    };

    // let currentItems = items.slice(itemOffset, endOffset);
    const handlePageClick = async (event) => {
        let currentPage = event.selected * itemsPerPage
        const productsFromServer = await fetchProducts(currentPage);
        setItems(productsFromServer.products)
    };

    
    console.log(items);
    
    return (
        <>
            <div className="z-50">
                <div className="mx-auto max-w-2xl px-10 pt-[12rem] pb-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:pt-[12rem]">
                    <div className="lg:mt-20 md:mt-40 mt-20 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
                    {   items && items.map((row,index) => {
                        return(
                        <div className="group relative" key={row.id}>
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100">
                                <img src={row.thumbnail} alt={row.title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                            </div>
                            <div className="mt-4 md:ml-10 md:text-left text-center">
                                <div>
                                    <h3 className="lg:text-xl text-lg  text-[#B13634] font-bold ">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {row.title}
                                        </a>
                                    </h3>
                                    <p className="mt-1 lg:text-xl text-lg text-[#221F20] font-medium ">{row.description}</p>
                                </div>
                            </div>
                        </div>
                        )
                        })
                    }
                    </div>
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                // pageRangeDisplayed={10}
                pageCount={pageCount}
                previousLabel=""
                // renderOnZeroPageCount={null}
                containerClassName="flex items-center justify-between  px-4 py-3 sm:px-6"
                className="sm:flex sm:flex-1 sm:items-center sm:justify-center pb-10"
                pageLinkClassName={`items-center px-2 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex`}
                activeLinkClassName={`border-b-2 border-red-400 z-10`}
            />
        </>
    )
}

export default ResourceListCards;