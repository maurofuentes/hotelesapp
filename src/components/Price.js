import React from 'react';

export default function Price( {icons} ){

    
   const iconMaker =  icons.map( i =>  <i className = { i.name } style= { i.style }  ></i>  );

   console.log(iconMaker);

    return (
        <React.Fragment>
            { iconMaker }
        </React.Fragment>      
    );
}