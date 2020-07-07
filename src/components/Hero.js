import React from 'react';

export default function Hero(props){

    const { from, to, conditionalfilters}= props;

    return(
       <section className="hero is-primary">
           <div className="hero-body">
                <div className="container">
                    <h1
                        className="title"
                    >
                        Hoteles
                    </h1>
                    <h2 
                        className="subtitle"
                    >
                        desde el <strong> {from} </strong> hasta el <strong> {to}  {conditionalfilters} </strong>
                    </h2>
                </div>
           </div>
       </section>

    );

}