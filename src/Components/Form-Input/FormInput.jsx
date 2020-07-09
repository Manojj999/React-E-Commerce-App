
import React from 'react'
import './FormInput.scss';
function FormInput({handledChange,label , ...otherProps}) {
    return (
        <div className="group">
            <input className="form-input" onChange={handledChange} {...otherProps} />
            {
                label?(<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label` }>
                    {label}
                </label>):null
            }
        </div>
    )
}

export default FormInput
