import styled from 'styled-components'
import Talent from './Talent'

const StyledTalent = styled(Talent)`
    width: 315px;
    height: auto;
    background-color: #010a15c4;
    position: absolute;
    left: 3.5em;
    top: 3.5em;
    font-family: Verdana,sans-serif;
    font-size: 12px;
    line-height: 17px;
    color: #ffd100;
    padding: 0 10px 0 20px;
    border: 1.5px solid white;
    border-radius: 0.5px;
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.75);
    z-index: 9999;
    `

export default StyledTalent