document.addEventListener('DOMContentLoaded', function() {
    // Load featured recipes
    loadFeaturedRecipes();
    
    // Load popular categories
    loadPopularCategories();
    
    // Load latest recipes
    loadLatestRecipes();
});

// Function to load featured recipes
function loadFeaturedRecipes() {
    const featuredRecipesContainer = document.getElementById('featured-recipes');
    if (!featuredRecipesContainer) return;
    
    // Filter featured recipes
    const featuredRecipes = recipes.filter(recipe => recipe.featured);
    
    // Display up to 4 featured recipes
    featuredRecipes.slice(0, 4).forEach(recipe => {
        featuredRecipesContainer.appendChild(createRecipeCard(recipe));
    });
}

// Function to load popular categories
function loadPopularCategories() {
    const categoriesContainer = document.getElementById('popular-categories');
    if (!categoriesContainer) return;
    
    // Sort categories by recipe count and take top 6
    const popularCategories = [...categories].sort((a, b) => b.recipeCount - a.recipeCount).slice(0, 6);
    
    popularCategories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'col';
        categoryCard.innerHTML = `
            <a href="categories.html?category=${category.slug}" class="category-card">
                <img src="${category.image}" alt="${category.name}">
                <h3>${category.name}</h3>
            </a>
        `;
        categoriesContainer.appendChild(categoryCard);
    });
}

// Function to load latest recipes
function loadLatestRecipes() {
    const latestRecipesContainer = document.getElementById('latest-recipes');
    if (!latestRecipesContainer) return;
    
    // Sort recipes by date (newest first)
    const latestRecipes = [...recipes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Display up to 8 latest recipes
    latestRecipes.slice(0, 8).forEach(recipe => {
        latestRecipesContainer.appendChild(createRecipeCard(recipe));
    });
}

// Function to create a recipe card
function createRecipeCard(recipe) {
    const col = document.createElement('div');
    col.className = 'col';
    
    col.innerHTML = `
        <div class="recipe-card">
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                <span class="recipe-cuisine-tag">${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</span>
            </div>
            <div class="recipe-content">
                <h5 class="recipe-title">${recipe.title}</h5>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <div class="recipe-time">
                        <i class="far fa-clock"></i> ${recipe.prepTime + recipe.cookTime} min
                    </div>
                    <div class="recipe-rating">
                        ${generateStarRating(recipe.rating)}
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <a href="categories.html?category=${recipe.category}" class="category-tag">${getCategoryName(recipe.category)}</a>
                    <a href="recipe.html?id=${recipe.id}" class="stretched-link"></a>
                </div>
            </div>
        </div>
    `;
    
    return col;
}
// Function to generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Function to get category name from slug
function getCategoryName(categorySlug) {
    const category = categories.find(cat => cat.slug === categorySlug);
    return category ? category.name : categorySlug;
}