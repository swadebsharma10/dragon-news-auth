import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/public/data/categories.json")
      .then((res) => res.json())
      .then((data) => {
      //   console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <h2 className="font-bold mb-6 p-4">All Categories</h2>
      <div className="p-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            className="block mb-4"
            to={`/category/${category.id}`}
          >
            <button className="btn btn-outline btn-primary w-full">
             {category.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
