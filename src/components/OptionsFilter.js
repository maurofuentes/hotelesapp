import React from 'react';

export default function OptionsFilter({ icon, options }){
    
    
    return (
        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={ { width:'100%' } }>
                    <select style={ { width:'100%' } }>
                        {options}                      
                    </select>
                </div>
                <div className="icon is-small is-left">
                    <i className={icon}/>
                </div>
            </div>
        </div>
    );
}