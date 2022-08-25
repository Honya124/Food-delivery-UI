import React from 'react'
import '../../../styles/category.css'

// category image
import categoryImage1 from "../../../asstes/images/category-01.png"
import categoryImage2 from "../../../asstes/images/category-02.png"
import categoryImage3 from "../../../asstes/images/category-03.png"
import categoryImage4 from "../../../asstes/images/category-04.png"

const categoryData=[
    {
        title:"Fastfood",
        url:categoryImage1,
    },
    {
        title:"Pizza",
        url:categoryImage2,
    },
    {
        title:"Asian Food",
        url:categoryImage3,
    },
    {
        title:"Row Meat",
        url:categoryImage4,
    },
]

function Category() {
  return (
      <div className='container-category'>
        {categoryData.map((item,index)=>{
            return(
                <div key={index} className='bg-card'>
                    <img src={item.url} alt="broken" />
                    <h6>{item.title}</h6>
                </div>
                
            )
        })}
      </div>
  )
}

export default Category
