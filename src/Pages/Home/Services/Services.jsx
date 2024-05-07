import { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[]);
    return (
        <div>
            <div className="space-y-4 text-center">
                <p>Service</p>
                <h2 className="text-4xl font-bold">Our Service Area</h2>
                <p className="w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3">
                {
                    item.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;