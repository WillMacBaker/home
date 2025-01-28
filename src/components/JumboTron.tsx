import * as React from 'react';
import styled from 'styled-components';
import portrait from '../assets/images/definitelyMe.jpeg'



const StyledButton = styled.button<{$color?: string}>`
    background-color: ${({$color}) => $color || "purple"};
    cursor: pointer;
    border-radius: 0%;
    text-align: center;
    width: 50px;
    height: 50px;
`

interface IJumbotron{
    name?: string
    age?: number
    job?: string
    buttonColor?: string
    colorScheme?: boolean
}


export const JumboTron = ({name, age, job, buttonColor}: IJumbotron) => {
    return(
        <section className="jumboTronContainer">
            <div className="jumboTronTopSection">
                <div>
                    <StyledButton $color={buttonColor}/>
                    <article className="pageHeader">
                        <div>
                            <h1>
                                Hi! I'm {name}.
                            </h1>
                            <h2>
                                I like to make React Projects and other fun things!
                            </h2>
                        </div> 
                    </article>
                </div>
                <div className="portraitContainer">
                    {/* Todo: to replace this figure and img with a generic image component, that
                        can take parameters to define basic styling, like width, height...
                        Currently handled in bootleg way via standard index.css
                        */}
                    <figure >
                        <img className="portrait" src="./src/assets/images/definitelyMe.jpeg"></img>
                    </figure>
                </div>  
            </div>
            <div className="jumboTronBottomSection">
                <div>
                    <ul className="pageHeaderSubHighlights">
                        <li>
                            I'm currently working on my JavaScript and React Library skills
                        </li>
                        <li>
                            I'm also working on my styling and page design abilities!
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}