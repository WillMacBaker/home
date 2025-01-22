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

export const JumboTron = ({name, age, job}: IJumbotron) => {
    return(
        <section className="jumboTronContainer">
            <div className="jumboTronTopSection">
                <article className="pageHeader">
                    <div>
                        <h1 aria-label="Hi I'm ${Will}.">
                            Hi! I'm Will.
                        </h1>
                        <h2>
                            I like to make React Projects and other fun things!
                        </h2>
                    </div> 
                </article>
                <figure className="portrait">
                    {/* ADD IMG TAG HERE, NEED TO FIGURE OUT INLINE STYLING OF ELEMENT*/}
                </figure>   
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