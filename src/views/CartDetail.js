import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const CartDetail = () => {
    const { id } = useParams();
    const history = useHistory();
    const [key_id, setId] = useState("");
    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3030/Cart/' + id,)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCart(data);
            }, 100);
    }, [])

    const handleDelete = (e) => {
        e.preventDefault();
        console.log(id);

        fetch('http://localhost:3030/Cart/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/cart');
        })
        alert(`${cart.name} removed from your cart.`);

    }

    return (
        <div className="product-details">
            { cart && (
                <div className="container">
                    <div className="row pt-4 ">
                        <div className="col-sm-5 divider">
                            <img src={cart.img} width="100%" />
                        </div>

                        <div className="col-sm-7 pl-4">
                            <h1><strong>{cart.name}</strong></h1>
                            <hr></hr>
                            <h3><strong>${cart.price}</strong></h3>
                            <hr></hr>
                            <div className="box mt-4">
                                <h5><b>Description</b></h5>
                                <p>{cart.itemDesc}</p>
                            </div>
                            <form onSubmit={handleDelete}>
                                <div>
                                    <input
                                        className="display-none"
                                        value={id}
                                        onChange={(e) => setId(e.cart.id)}
                                    ></input>
                                </div>
                                <button className="btn btn-danger mt-3">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default CartDetail;