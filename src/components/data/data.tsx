


/* 
    This file contains an array of objects, which is where
    project data used to populate ProjectPane.tsx are stored.

    Any updates pages or projects to show can be put in here!

    Todo: The image handling is a bit basic, need to look into a more dynamic way of showing this off, as the current
    placeholder approach doesn't look fantastic.

    // Todo: Link to a JS page, that itself goes to all your older, basic projects + Freecodecamp?
    // Todo: Add a size flag? For benefit of manual adjustment?
*/

export const projects  = [
    // {
    //     title: "My FreeCodeCamp Portfolio",
    //     subtitle: "What have I submitted to the site recently?",
    //     description: 
    //         "See how I'm getting along on FreeCodeCamp",
    //     image: "src/assets/images/FreeCodeCamp_logo.png",
    //     link: "https://www.freecodecamp.org/willmacbaker",
    //     boxShadow: 'purple'
    // },
    {
        title: "Gif Search Tool",
        subtitle: "Search for a GIF, any GIF!",
        description: "Hooked up to the GIPHY API, this basic page application can query GIPHY with user-chosen search queries",
        image: "src/assets/images/giphyProjectImage.png",
        link: "https://willmacbaker.github.io/giphy-technical-challenge/",
        boxShadow: '#4a90e2',
    },
    {
        title: "Currency Converter Tool",
        subtitle: "Convert a currency!",
        description: "Using a currency API worked into a TypeScript + React frontend, convert currencies! Done to meet a technical challenge.",
        image: "src/assets/images/currencyConverter.png",
        link: "https://willmacbaker.github.io/currency-converter-challenge/",
        boxShadow: 'rgb(255, 165, 0)',
    }
]