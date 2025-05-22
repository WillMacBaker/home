
/* 
    This file contains an array of objects, which is where
    project data used to populate ProjectPane.tsx are stored.

    Any updates pages or projects to show can be put in here!

    Todo: The image handling is a bit basic, need to look into a more dynamic way of showing this off, as the current
    placeholder approach doesn't look fantastic.

    // Todo: Link to a JS page, that itself goes to all your older, basic projects + Freecodecamp?
    // Todo: Add a size flag? For benefit of manual adjustment?

    // https://gsap.com/community/forums/topic/25552-animate-flex-intem-resize-on-flex-direction-change/
    // REFER TO THIS FOR SMOOTH ANIMATION OF PANEL FIELD DATA ENTRIES
*/

export const projects  = [
    {
        title: "My Codecademy work",
        subtitle: "What have I been learning recently?",
        description: 
            "See how I'm getting along on Codecademy",
        image: "/assets/images/codecademy.jpg",
        link: "https://www.codecademy.com/profiles/WillMacBaker",
        boxShadow: 'purple'
    },
    {
        title: "Gif Search Tool",
        subtitle: "Search for a GIF, any GIF!",
        description: "Hooked up to the GIPHY API, this basic page application can query GIPHY with user-chosen search queries",
        image: "/assets/images/giphyProjectImage.png",
        link: "https://willmacbaker.github.io/giphy-technical-challenge/",
        boxShadow: '#4a90e2',
    },
    {
        title: "Currency Converter Tool",
        subtitle: "Convert a currency!",
        description: "Using a currency API worked into a TypeScript + React frontend, convert currencies! Done to meet a technical challenge.",
        image: "/assets/images/currencyConverter.png",
        link: "https://willmacbaker.github.io/currency-converter-challenge/",
        boxShadow: 'rgb(255, 165, 0)',
    }
]