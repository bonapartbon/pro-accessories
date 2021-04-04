import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../style.css'

const Cart = () => {

    const [carts, setCart] = useState(null);
    var totalPrice = 0;

    useEffect(() => {
        fetch('http://localhost:3030/Cart')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCart(data);
            }, 100);
    }, [])

    const handleCheckOut = ()=> {
        alert(`Total Price: $${totalPrice} \n` + "Please Pay Us Through ABA! \n" + "ABA: 888 888 888 \nAccount Holder: Try Many")
    }

    return (
        <div className="home container">

            <div className="products mt-4"><h1>Products In Cart</h1></div>
            { carts && <div className="cart-list">
                <div className="row text-center">
                    {carts.map((cart, index) => (
                        <div className="col-4 border p-1" key={index}>
                            <img src={cart.img} width="100%" />
                            <p className="pt-2 item-des">{cart.name}</p>
                            <p className="mb-2"><strong>${cart.price}</strong></p>
                            <h1 className="display-none">{totalPrice += (cart.price)}</h1>
                            <Link to={`/cart/${cart.id}`}><button className="btn btn-primary ml-2">View Item</button></Link>
                        </div>

                    ))}
                </div>

            </div>}
            {carts &&
                
                <div className="text-center"> 
                    <div className=" text-center mb-5 mt-5"><h2>Total Price:  <b>${totalPrice}</b></h2></div>
                    <button className="btn btn-success" onClick={handleCheckOut}>Checkout</button>
                </div>
            }

        </div>
    );
}

export default Cart;