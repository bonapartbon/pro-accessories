import React, { Component } from 'react';

class headsetHyperX extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/bonapartbon/db3/headsetHyperX')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div>
                    <div className="container brand-tag border border-bottom-0 brand-div">
                        <h3 className="m-2 ">Gaming Headset &nbsp; <i className="fas fa-caret-right"></i> &nbsp; HyperX</h3>
                    </div>
                    <div className="container home-container">
                        <div className="row text-center border">
                            {items.map(item => (
                                <div className="col-3 border p-1" key={item.id}>
                                    <img src={item.img} alt="" width="100%" />
                                    <p className="pt-2 item-des">{item.name}</p>
                                    <p className="mb-2"><strong>${item.price}</strong></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default headsetHyperX;