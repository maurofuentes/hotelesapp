import React from 'react';

export default function DateFilter ( { icon, onChangeDate, onChange } ) {

    
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input 
                    className="input"
                    type="date"
                    onChange={onChangeDate}
                    value={onChange}
                />
                <span className="icon is-small is-left">
                    <i className={icon}/>
                </span>
            </div>
        </div>

    );

}