import React from "react";
import TestComponent from "./components/TestComponent";
import RecipeList from "./components/RecipeList";

const Components: any = {
    RecipeList: RecipeList
}

export default function ComponentFactory(block: any){
    if(typeof Components[block.component] !== "undefined"){
        return React.createElement(Components[block.component], {
            key: block.name,
            props: block.value
        });
    }

    return React.createElement(
        () => <div className="h-4 bg-color-yellow">The component {block.component} has not been created yet.</div>,
        { key: block.name}
    )
}