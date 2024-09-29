import { useEffect, useState } from "react";


export default function SearchBar({props}: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);  
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    useEffect(() => {
        // Filter recipes based on the search term
        if (searchTerm === "") {
            setFilteredRecipes(recipes);
        } else {
            setFilteredRecipes(
                recipes.filter((recipe: any) =>
                    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, recipes]);
    return(
        <div className="flex flex-col sm:flex-row justify-center items-center my-4 gap-2">
        <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 p-2 border border-gray-300 rounded"
        />
        <button
            onClick={() => { }}
            className="w-full sm:w-auto mt-2 sm:mt-0 p-2 bg-blue-500 text-white rounded"
        >
            Search
        </button>
    </div>
    )
}