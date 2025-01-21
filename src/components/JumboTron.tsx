import * as React from 'react';
import styled from 'styled-components';





const StyledButton = styled.button<{$color?: string}>`
    background-color: ${({$color}) => $color || "purple"};
    border-radius: 0%;
    text-align: center;
    width: 100px;
    height: 100px;
`

interface IJumbotron{
    name: string
    age: number
    job: string
    buttonColor?: string
}

export const JumboTron = ({name, age, job, buttonColor}: IJumbotron) => {
    return(
        <section>
            <p>START OF JUMBOTRON</p>
            <div>
                <div>
                    <h1>Hi, I'm {name || "ERROR"}! I am {age} years old 
                    <br/>I'm a {job}?
                    <br/><StyledButton $color={buttonColor}/>
                    </h1>
                    <div>
                    </div>
                </div>
            </div>
            <p>END OF JUMBOTRON</p>
        </section>
    )
}