import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
      const [categories, setCategories] = useState([]);

      useEffect(()=>{
            fetch('/public/data/categories.json')
            .then(res => res.json())
            .then(data =>{
                  console.log(data);
                  setCategories(data)
            })
      }, [])

      return (
            <div>
                 <h2 className="font-bold mb-6">All Categories</h2> 
                 {
                  categories.map(category => <Link 
                        key={category.id}
                  className="block mb-4"
                  to={`/category/${category.id}`}>
                  <button className="btn btn-sm btn-wide">{category.name}</button>
                  </Link>
                  
                  )
                 }
            </div>
      );
};

export default LeftSideNav;