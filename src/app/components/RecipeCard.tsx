// components/RecipeCard.js

import { useState } from "react";

const RecipeCard = ({ recipe }: any) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    return (
        <div className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg
         rounded overflow-hidden bg-white shadow-lg m-2 transition-transform
          transform hover:scale-105 hover:shadow-lg hover:bg-gray-50">
            <img
                className="w-full h-48 object-cover"
                src={recipe?.Image?.value}
                alt={recipe?.Title?.value}
            />
            <div className="px-4 py-2">
                <div className="font-bold text-lg mb-1 truncate">{recipe?.Title?.value}</div>
                <p className="text-gray-700 text-sm">Time: {recipe.time}</p>
                <button
                    onClick={toggleDialog}
                    className="mt-2 py-1 px-3 bg-blue-600 text-white font-semibold
                     rounded-lg shadow-md hover:bg-blue-700 focus:outline-none
                      focus:ring-2 focus:ring-blue-500 transition"
                >
                    View Ingredients
                </button>
            </div>

            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center
                 z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg overflow-hidden 
                    shadow-xl max-w-md w-full p-6 mx-4 sm:mx-0">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Ingredients
                            </h3>
                            <button
                                onClick={toggleDialog}
                                className="text-gray-700 hover:text-gray-900
                                 focus:outline-none"
                            >
                                &#x2715;
                            </button>
                        </div>
                        <ul className="list-disc list-inside text-gray-700 text-sm">
                            {recipe.ingredients && recipe.ingredients.map((ingredient: any, index: number) => (
                                <li key={index}>{ingredient.name}</li>
                            ))}
                        </ul>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={toggleDialog}
                                className="py-1 px-3 bg-red-600 text-white 
                                font-semibold rounded-lg shadow-md hover:bg-red-700
                                 focus:outline-none focus:ring-2 
                                 focus:ring-red-500 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeCard;
