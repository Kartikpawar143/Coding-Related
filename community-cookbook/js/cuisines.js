document.addEventListener('DOMContentLoaded', function() {
    // Get cuisine from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const cuisineParam = urlParams.get('cuisine');
    
    // Load all cuisines
    loadCuisineNav();
    
    // Load recipes for the selected cuisine or the first cuisine if none is selected
    if (cuisineParam) {
        loadCuisineRecipes(cuisineParam);
    } else if (cuisines.length > 0) {
        loadCuisineRecipes(cuisines[0].slug);
    }
});

// Function to load cuisine navigation
function loadCuisineNav() {
    const cuisinesNav = document.getElementById('cuisines-nav');
    if (!cuisinesNav) return;
    
    // Clear existing content
    cuisinesNav.innerHTML = '';
    
    // Add each cuisine to the navigation
    cuisines.forEach(cuisine => {
        const cuisineLink = document.createElement('a');
        cuisineLink.href = `#${cuisine.slug}`;
        cuisineLink.className = 'cuisine-nav-item';
        cuisineLink.dataset.cuisine = cuisine.slug;
        cuisineLink.innerHTML = `
            <img src="${cuisine.icon}" alt="${cuisine.name}" class="cuisine-icon">
            <span>${cuisine.name}</span>
        `;
        
        // Add click event to load recipes for this cuisine
        cuisineLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update URL without reloading the page
            const newUrl = `${window.location.pathname}?cuisine=${cuisine.slug}`;
            window.history.pushState({ cuisine: cuisine.slug }, '', newUrl);
            
            // Load recipes for this cuisine
            loadCuisineRecipes(cuisine.slug);
            
            // Update active class
            document.querySelectorAll('.cuisine-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
        
        cuisinesNav.appendChild(cuisineLink);
    });
}

// Function to load recipes for a specific cuisine
function loadCuisineRecipes(cuisineSlug) {
    const cuisineHeader = document.getElementById('active-cuisine-header');
    const recipesContainer = document.getElementById('cuisine-recipes');
    
    if (!cuisineHeader || !recipesContainer) return;
    
    // Find the cuisine
    const cuisine = cuisines.find(c => c.slug === cuisineSlug);
    
    if (!cuisine) {
        cuisineHeader.innerHTML = '<div class="alert alert-danger">Cuisine not found</div>';
        recipesContainer.innerHTML = '';
        return;
    }
    
    // Update active class in navigation
    document.querySelectorAll('.cuisine-nav-item').forEach(item => {
        if (item.dataset.cuisine === cuisineSlug) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update cuisine header
    cuisineHeader.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-3 mb-3 mb-md-0">
                <img src="${cuisine.image}" alt="${cuisine.name}" class="img-fluid rounded">
            </div>
            <div class="col-md-9">
                <h2>${cuisine.name} Cuisine</h2>
                <p class="text-muted">${cuisine.description}</p>
            </div>
        </div>
    `;
    
    // Clear recipes container
    recipesContainer.innerHTML = '';
    
    // Find recipes in this cuisine
    const cuisineRecipes = recipes.filter(recipe => recipe.cuisine === cuisineSlug);
    
    if (cuisineRecipes.length === 0) {
        recipesContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="mb-4">No recipes found for this cuisine.</p>
                <a href="submit-recipe.html" class="btn btn-primary">Submit the first recipe</a>
            </div>
        `;
        return;
    }
    
    // Display recipes
    cuisineRecipes.forEach(recipe => {
        recipesContainer.appendChild(createRecipeCard(recipe));
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