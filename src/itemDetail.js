import React, { useState, useEffect } from 'react';
import './style.css'

const ItemDetail = ({ match }) => {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    const [itemDesc, setItemDesc] = useState("");

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `http://localhost:3030/AllItem/${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        fetch('http://localhost:3030/Cart/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({
                name: item.name,
                price: item.price,
                img: item.img,
                itemDesc: item.itemDesc,
            }),
        }).then(() => {

        })
        alert(`${item.name} added to your cart.`);
    }
    return (
        <div className="container">
            <div className="row pt-4 ">
                <div className="col-sm-5 divider">
                    <img src={item.img} width="100%" />
                </div>

                <div className="col-sm-7 pl-4">
                    <h1><strong>{item.name}</strong></h1>
                    <hr></hr>
                    <h3><strong>${item.price}</strong></h3>

                    <div className="box mt-3">
                        <h5><b>Description</b></h5>
                        <p>{item.itemDesc}</p>
                    </div>
                    <form onSubmit={handleAddToCart}>
                        <div>
                            <input
                                className="display-none"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.item.name)}
                            />
                            <input
                                className="display-none"
                                value={price}
                                onChange={(e) => setPrice(e.item.price)}
                            ></input>
                            <input
                                className="display-none"
                                value={itemDesc}
                                onChange={(e) => setItemDesc(e.item.itemDesc)}
                            ></input>
                            <textarea
                                className="display-none"
                                value={img}
                                onChange={(e) => setImg(e.item.img)}
                            >
                            </textarea>
                        </div>
                        <button className="btn btn-primary mt-3 mb-5">Add to Cart</button>
                    </form>

                </div>
            </div>



        </div>
    );
}

export default ItemDetail;