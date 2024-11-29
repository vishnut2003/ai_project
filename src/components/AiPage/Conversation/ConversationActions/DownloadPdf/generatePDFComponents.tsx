import React from "react";
import { View, Text } from "@react-pdf/renderer"
import { v4 as v4uuid } from "uuid";

export function generatePDFComponents({ nodeJson }: { nodeJson: Document | ChildNode }): React.ReactNode {
    const nodeObject = nodeJson;

    // return id no childNodes
    if(!nodeObject.childNodes) {
        return createTextElement({child: nodeObject})
    }

    // Convert NodeList to Actual Array
    const childrensArray = Array.from(nodeObject.childNodes);

    // Loop childNode
    return childrensArray.map((child) => {
        switch (child.nodeType) {
            case 1:
                switch (child.nodeName) {
                    case "div":
                        return createDivElement({ childrenNodes: child.childNodes });
                    case "p":
                        return createPElement({ childrenNodes: child.childNodes });
                    case "strong":
                        return createPElement({ childrenNodes: child.childNodes });
                    case "hr":
                        return createPElement({ childrenNodes: child.childNodes });
                    case "ul":
                        return createListUlOlElement({ childrenNodes: child.childNodes });
                    case "ol":
                        return createListUlOlElement({ childrenNodes: child.childNodes });
                    case "li":
                        return createPElement({ childrenNodes: child.childNodes });
                    case "em":
                        return createPElement({ childrenNodes: child.childNodes });
                    case "#Text":
                        return createPElement({ childrenNodes: child.childNodes });
                    default:
                        console.log(`No Processing for Tag ${child.childNodes}`);
                        break;
                }
            case 3:
                return createTextElement({child: child})
            default:
                console.log("Skipping Node", child);
                break;
        }
    })
}

function createDivElement({ childrenNodes }: {
    childrenNodes: NodeListOf<ChildNode>
}): React.ReactNode {

    const nodesArray = Array.from(childrenNodes)

    return React.createElement(
        View,
        {
            minPresenceAhead: 1,
            key: v4uuid()
        },
        nodesArray.map((child) => generatePDFComponents({ nodeJson: child }))
    )
}

function createListUlOlElement ({childrenNodes}: {
    childrenNodes: NodeListOf<ChildNode>
}): React.ReactNode {

    const nodesArray = Array.from(childrenNodes)
    console.log(nodesArray)

    return React.createElement(
        View,
        {
            minPresenceAhead: 1,
            key: v4uuid()
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
            key: v4uuid()
        },
        React.createElement(
            Text,
            {
                minPresenceAhead: 1,
                key: v4uuid()
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
            key: v4uuid()
        },
        child.nodeValue
    )
}