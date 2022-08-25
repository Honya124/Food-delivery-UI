import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import ProductCard from '../components/UI/prodcut-card/ProductCards'
import Products from '../asstes/fake-data/products'
import ReactPaginate from 'react-paginate'

import '../styles/allFoods.css'
import '../styles/paginate.css'

export default function AllFoods(){
  const [searchData, setSearchData]=useState('')
  const [pageNumber , setPageNumber]=useState(0)
  const searchedData=Products.filter((item)=>{
    if(searchData.value === ''){return item };
    if(item.title.toLowerCase().includes(searchData.toLowerCase())){return item}
    else{return console.log("Not Found")} 
  })
  const productPerPage=8;
  const visitPage=productPerPage * pageNumber;
  const displayPage=searchedData.slice(visitPage , visitPage + productPerPage)
  // agar aw searchdata.length da nanem aw kata ama xoy pet alet chand paget abet bo data kant katek search
  // akain es) bread aw kata abeta yak page
  const pageCount=Math.ceil(searchedData.length / productPerPage)
  const changePage=({selected})=>{
    setPageNumber(selected)
  }

  return (
    <div className='allFoods'>
     <Helmet title="All-Foods" />
      <CommonSection title='All Foods' />

      <div className='all-foods-container'>
        <div className='top-section'>
        <div className='input-sction'>
         <input value={searchData}
           onChange={(e)=> setSearchData(e.target.value)}
          type="text" placeholder="I'm looking for...." />
         <span><i class="ri-search-line"></i></span>
        </div>

        <div className='select-section'>
          <select >
            <option >Default</option>
            <option value="ascending">Alphabetically, A-Z</option>
            <option value="descending">Alphabetically, Z-A</option>
            <option value="high-price">High Price</option>
            <option value="low-price">Low Price</option>
          </select>
        </div>
        </div>
            <div className='product-container'>
            <div className='product-item'>
          {displayPage.map((item)=>(
            <ProductCard item={item} key={item.id} />
         ))}
       </div>
            </div>
            <ReactPaginate 
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={'prev'}
            nextLabel={'next'}
            containerClassName="paginationBttns"
             />
        
       
      </div>
    </div>
  )
}
