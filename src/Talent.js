import React from 'react'

const Talent = ({className, name, desc}) => {
    return (
        <article className={className}>
            <h4>{name}</h4>
            <p>{desc}</p>
        </article>
    )
}

export default Talent