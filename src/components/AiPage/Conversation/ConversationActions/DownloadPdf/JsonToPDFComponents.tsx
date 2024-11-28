import { View, Text } from '@react-pdf/renderer';
import React from 'react';

export const JsonToPdfComponent = (input: string, bodyTextColorString: string) => {
    
    /*
        the object was created with following values 
        { 
            nodeType: <integer>, 
            nodeTagName: <string>, 
            nodeName: <string>, 
            nodeValue: <string>, 
            childNodes: <array> 
            attributes: <array of attributes arrays>
        }
    */
    
    //first we have an error handler which will result in blank elements in the pdf rather than crashes
    if (input === undefined) { console.error("JsonToPdfComponent: Undefined JSON Input"); return null; }
    
    //create the object, either parsing a JSON string or just using an existing javascript object
    let json = typeof input === 'string' ? JSON.parse(input) : input;
    
    //define the node type
    let nodeType = json.nodeType;
    
    //define the tag type
    let tagType = json.nodeTagName;
    
    //then the construction process is different depending on the type of node
    switch (nodeType) {
        //MOST OF THE WORK DONE ON ELEMENT_NODES
        case 1: 
            //then we need to create styled component views for each tag
            switch(tagType) {
                case 'h1':
                   //SEE EXAMPLE BELOW
                    return createH1ViewElement(json, bodyTextColorString);
                case 'h2':
                    return createH2ViewElement(json, bodyTextColorString);
                case 'h3':
                    return createH3ViewElement(json, bodyTextColorString);
                case 'h4':
                    return createH4ViewElement(json, bodyTextColorString);
                case 'h5':
                    return createH5ViewElement(json, bodyTextColorString);
                case 'h6':
                    return createH6ViewElement(json, bodyTextColorString);
                case 'strong':
                    return createStrongTextElement(json, bodyTextColorString);
                case 'em':
                    return createEmphasisTextElement(json, bodyTextColorString);
                case 'p':
                    return createParagraphTextElement(json, bodyTextColorString);
                case 'span':
                    return createSpanTextElement(json, bodyTextColorString);
                //we add a link tag only when the anchor tag has children, i.e. text
                case 'a':
                    return createLinkElement(json, bodyTextColorString);
                // case 'img':
                //     return createImageElement(json, );
                //special processing for ordered and unordered list components
                case 'ol':
                    return createListComponent(json, bodyTextColorString);
                    // return createListComponent(json, bodyTextColorString, tagType);
                case 'ul':
                    return createListComponent(json, bodyTextColorString);
                    // return createListComponent(json, bodyTextColorString, tagType);
                //special processing for tables
                case 'table':
                    return createTableComponent(json, bodyTextColorString);
                //special processing for sup text
                case 'sup':
                    return createSupComponent(json, bodyTextColorString);
                default:
                    console.log(`No Processing for Tag ${tagType.toUpperCase()}`);
            }
            break;
        //TEXT_NODE - we can just create the simple text item
        case 3: 
            //this will return a null value if the text filtered for formatting characters has a length of zero
            return createTextComponent(json.nodeValue);
        default: 
            console.log("Skipping Node", json);
    }

};

// h1
const createH1ViewElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h2
const createH2ViewElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createH3ViewElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createH4ViewElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createH5ViewElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createH6ViewElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createStrongTextElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createHViewElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createEmphasisTextElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createParagraphTextElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createSpanTextElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createLinkElement = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
// const createImageElement = (node: any, bodyTextColorString: any) => {
    
//     return React.createElement(
//         //every html element should have its own view
//         View,
        
//         //add the special style props to the view, if you have any, from the JSON attributes array
//         {
//             //stops headers appearing at the bottom of the page
//             minPresenceAhead: 1,
//         },
        
//         //then we pass in the children of the json object, as children of the React element
//         React.createElement(
//             Text,
//             //add the special style props to the text element
//             {
//                 //add the custom styles you have set for the pdf component
//                 style: {color: bodyTextColorString},
//             },
//             //then we pass in the children of the json object = recursion or the end of recursion
//             node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
//         )
//     );
    
// };
// h1
const createListComponent = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createTableComponent = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createSupComponent = (node: any, bodyTextColorString: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: bodyTextColorString},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, bodyTextColorString))
        )
    );
    
};
// h1
const createTextComponent = (node: any) => {
    
    return React.createElement(
        //every html element should have its own view
        View,
        
        //add the special style props to the view, if you have any, from the JSON attributes array
        {
            //stops headers appearing at the bottom of the page
            minPresenceAhead: 1,
        },
        
        //then we pass in the children of the json object, as children of the React element
        React.createElement(
            Text,
            //add the special style props to the text element
            {
                //add the custom styles you have set for the pdf component
                style: {color: 'black'},
            },
            //then we pass in the children of the json object = recursion or the end of recursion
            node.childNodes.map((child: any) => JsonToPdfComponent(child, 'nothing'))
        )
    );
    
};