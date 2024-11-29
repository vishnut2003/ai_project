import React from "react";
import { View, Text } from "@react-pdf/renderer"

export function generatePDFComponents({ nodeJson }: { nodeJson: Document | ChildNode }): React.ReactNode {
    const nodeObject = nodeJson;

    // return id no childNodes
    if(!nodeObject.childNodes) return createTextElement({child: nodeObject})

    // Convert NodeList to Actual Array
    const childrensArray = Array.from(nodeObject.childNodes);

    // Loop childNodes
    for (let i = 0; i < childrensArray.length; i++) {
        switch (childrensArray[i].nodeType) {
            case 1:
                switch (childrensArray[i].nodeName) {
                    case 'div':
                        return createDivElement({ childrenNodes: childrensArray[i].childNodes });
                    case 'p':
                        return createPElement({ childrenNodes: childrensArray[i].childNodes });
                    case 'strong':
                        return createPElement({ childrenNodes: childrensArray[i].childNodes });
                    case 'hr':
                        return createPElement({ childrenNodes: childrensArray[i].childNodes });
                    case 'ul':
                        return createPElement({ childrenNodes: childrensArray[i].childNodes });
                    case 'ol':
                        return createPElement({ childrenNodes: childrensArray[i].childNodes });
                    case 'li':
                        return createPElement({ childrenNodes: childrensArray[i].childNodes });
                    case 'em':
                        return createPElement({ childrenNodes: childrensArray[i].childNodes });
                    case '#Text':
                        return createPElement({ childrenNodes: childrensArray[i].childNodes });
                    default:
                        console.log(`No Processing for Tag ${childrensArray[i].childNodes}`);
                        console.log(childrensArray[i])
                        break;
                }
            case 3:
                return createTextElement({child: childrensArray[i]})
            default:
                console.log("Skipping Node", childrensArray[i]);
                break;
        }
    }
}

function createDivElement({ childrenNodes }: {
    childrenNodes: NodeListOf<ChildNode>
}): React.ReactNode {

    const nodesArray = Array.from(childrenNodes)

    return React.createElement(
        View,
        {
            minPresenceAhead: 1,
        },
        nodesArray.map((child) => generatePDFComponents({ nodeJson: child }))
    )
}

function createPElement({ childrenNodes }: {
    childrenNodes: NodeListOf<ChildNode>
}): React.ReactNode {

    const nodesArray = Array.from(childrenNodes)

    return React.createElement(
        View,
        {
            minPresenceAhead: 1,
        },
        React.createElement(
            Text,
            {
                minPresenceAhead: 1,
            },
            nodesArray.map((child) => generatePDFComponents({ nodeJson: child }))
        )
    )
}

function createTextElement({ child }: {
    child: ChildNode | Document
}): React.ReactNode {

    return React.createElement(
        Text,
        {
            minPresenceAhead: 1,
        },
        child.nodeValue
    )
}