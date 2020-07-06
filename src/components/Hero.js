import React from 'react';

export default function Hero(props){

    const { desde }= props;

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
                        desde el <strong> {props.desde} </strong> hasta el <strong> dddd, DD  de mmmm de AAAA​</strong>
                    </h2>
                </div>
           </div>
       </section>

    );

}