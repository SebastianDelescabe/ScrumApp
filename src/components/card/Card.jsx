import React from 'react'

export const Card = ({ data: { title, dateTime, creator, description, type, priority } }) => {

    const limitString = (str) => {
        if (str.length > 170)
            return { string: str.slice(0, 55).concat("..."), addButton: true };
        return { string: str, addButton: false }
    }

    return (
        <div className="card">
            <div className="close">x</div>
            <h3>{title}</h3>
            <h5>{dateTime}</h5>
            <h5>{creator}</h5>
            <button type='button'>{type}</button>
            <button type='button'>{priority}</button>
            <p>{limitString(description).string}</p>
        </div>
    )
}
