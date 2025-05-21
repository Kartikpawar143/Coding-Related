document.addEventListener('DOMContentLoaded', function() {
    // Get recipe ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    
    if (recipeId) {
        loadRecipe(recipeId);
    } else {
        // Handle case where no recipe ID is provided
        document.querySelector('.recipe-page').innerHTML = '<div class="alert alert-danger">Recipe not found</div>';
    }
});

// Function to load recipe details
function loadRecipe(recipeId) {
    // Find the recipe in our data
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) {
        document.querySelector('.recipe-page').innerHTML = '<div class="alert alert-danger">Recipe not found</div>';
        return;
    }
    
    // Update page title
    document.title = `${recipe.title} - Community Cookbook`;
    
    // Update recipe title
    document.getElementById('recipe-title').textContent = recipe.title;
    
    // Update recipe details
    document.getElementById('prep-time').textContent = recipe.prepTime;
    document.getElementById('cook-time').textContent = recipe.cookTime;
    document.getElementById('servings').textContent = recipe.servings;
    
    // Load related recipes
    loadRelatedRecipes(recipe.category, recipe.id);
}

// Function to load related recipes
function loadRelatedRecipes(category, currentRecipeId) {
    const relatedRecipesContainer = document.querySelector('.related-recipes .row');
    if (!relatedRecipesContainer) return;
    
    // Clear existing content
    relatedRecipesContainer.innerHTML = '';
    
    // Find recipes in the same category
    const relatedRecipes = recipes.filter(recipe => recipe.category === category && recipe.id !== currentRecipeId);
    
    // Display up to 4 related recipes
    relatedRecipes.slice(0, 4).forEach(recipe => {
        const col = document.createElement('div');
        col.className = 'col';
        
        col.innerHTML = `
            <div class="recipe-card">
                <div class="recipe-image-container">
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                </div>
                <div class="recipe-content">
                    <h5 class="recipe-title">${recipe.title}</h5>
                    <a href="recipe.html?id=${recipe.id}" class="stretched-link"></a>
                </div>
            </div>
        `;
        
        relatedRecipesContainer.appendChild(col);
    });
    
    // If no related recipes found
    if (relatedRecipes.length === 0) {
        relatedRecipesContainer.innerHTML = '<div class="col-12 text-center">No related recipes found</div>';
    }
}