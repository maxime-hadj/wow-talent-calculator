import React, { useState } from 'react'
import Talent from './Talent'

const CellComponent = ({data}) => {
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseOver = () => {
        setIsHovering(true)
    }
    const handleMouseOut = () => {
        setIsHovering(false)
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="item one nature_wispsplode button" data-max="3" 
        style={`grid-area: ${data.line} / ${data.cell}`}>
			{isHovering && <Talent key={data.id} {...data}></Talent>}
		</div>
    )
}

export default CellComponent