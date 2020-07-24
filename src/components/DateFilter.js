import React from 'react' ;

export default function DateFilter( { icon, name, handleChangeFilter, dateFilterValue } ) {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input
                    className="input"
                    type="date"
                    name = { name }
                    onChange={ handleChangeFilter }
                    value={ dateFilterValue }
                />

                <span className="icon is-small is-left">
                    <i className={ icon } />
                </span>
            </div>
        </div>

    ) ;
}
