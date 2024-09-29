"use client"

import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({props}: any)  => {
   const recipeListValue = props?.globalDataSource?.fields?.Recipes?.value;
   console.log("Recipelist value", recipeListValue);
   const [recipeList, setRecipeList] = useState<any>();
   useEffect(() => {
        const loadData = async () => {                       
            const response =  await fetch("/api/list", { headers: {"list": recipeListValue}});  
            const json = await response.json();  
            if(json && json !== undefined){
                console.log("List response", json.data);
                setRecipeList(json.data);
            }
            else{
               console.log("List null");
            }
            
        }
        loadData();
    }, [])
    console.log("recipelist", props);
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recipeList && recipeList?.data?.map((recipe: any, index: number) => (
                        <RecipeCard key={index} recipe={recipe.fields} />
                    ))}
                </div>
    )
}

export default RecipeList;