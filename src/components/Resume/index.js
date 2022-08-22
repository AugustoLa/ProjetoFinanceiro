import React from 'react'
import * as C from './styles'
import ResumeItem from '../ResumeItem/index';

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa"

const Resume = ({income, expense, total}) => {
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}></ResumeItem>
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}></ResumeItem>
            <ResumeItem title="Total" Icon={FaDollarSign} value={total}></ResumeItem>
        </C.Container>
    )
}

export default Resume