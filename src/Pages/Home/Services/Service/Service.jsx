import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {_id, title, price, img} =service
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: {price}</p>
                    <Link to={`/checkout/${_id}`}><button className="btn">Buy Now</button></Link>
                </div>
                </div>
        </div>
    );
};

export default Service;