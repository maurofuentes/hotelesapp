import React from 'react';

export default function DateFilter (props) {

    const { icon } = props;
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date"/>
                <span className="icon is-small is-left">
                    <i className={icon}/>
                </span>
            </div>
        </div>

    );

}