import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Category = () => {

    const {category} = useParams();
    console.log(category);

    const data = useLoaderData();
    console.log(data);


    return (
        <div>
            
        </div>
    );
};

export default Category;