import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = () => {

    const {category} = useParams();
    console.log(category);

    const data = useLoaderData();
    console.log(data);

    const types =  data.filter(c => c.category == category)

    console.log(types);

    return (
        <div className='grid grid-cols-1'>
            {
                types.map((category, index)=> <CategoryDetails key={index} category={category}></CategoryDetails>)
            }
        </div>
    );
};

export default Category;