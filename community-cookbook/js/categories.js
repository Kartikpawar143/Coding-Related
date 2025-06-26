document.addEventListener('DOMContentLoaded', function() {
    // Get category from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    // Load all categories
    loadCategoryNav();
    
    // Load recipes for the selected category or the first category if none is selected
    if (categoryParam) {
        loadCategoryRecipes(categoryParam);
    } else if (categories.length > 0) {
        loadCategoryRecipes(categories[0].slug);
    }
});

// Function to load category navigation
function loadCategoryNav() {
    const categoriesNav = document.getElementById('categories-nav');
    if (!categoriesNav) return;
    
    // Clear existing content
    categoriesNav.innerHTML = '';
    
    // Add each category to the navigation
    categories.forEach(category => {
        const categoryLink = document.createElement('a');
        categoryLink.href = `#${category.slug}`;
        categoryLink.className = 'category-nav-item';
        categoryLink.dataset.category = category.slug;
        categoryLink.innerHTML = `
            <img src="${category.icon}" alt="${category.name}" class="category-icon">
            <span>${category.name}</span>
        `;
        
        // Add click event to load recipes for this category
        categoryLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update URL without reloading the page
            const newUrl = `${window.location.pathname}?category=${category.slug}`;
            window.history.pushState({ category: category.slug }, '', newUrl);
            
            // Load recipes for this category
            loadCategoryRecipes(category.slug);
            
            // Update active class
            document.querySelectorAll('.category-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
        
        categoriesNav.appendChild(categoryLink);
    });
}

// Function to load recipes for a specific category
function loadCategoryRecipes(categorySlug) {
    const categoryHeader = document.getElementById('active-category-header');
    const recipesContainer = document.getElementById('category-recipes');
    
    if (!categoryHeader || !recipesContainer) return;
    
    // Find the category
    const category = categories.find(cat => cat.slug === categorySlug);
    
    if (!category) {
        categoryHeader.innerHTML = '<div class="alert alert-danger">Category not found</div>';
        recipesContainer.innerHTML = '';
        return;
    }
    
    // Update active class in navigation
    document.querySelectorAll('.category-nav-item').forEach(item => {
        if (item.dataset.category === categorySlug) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update category header
    categoryHeader.innerHTML = `
        <h2>${category.name} Recipes</h2>
        <p class="text-muted">${category.description}</p>
    `;
    
    // Clear recipes container
    recipesContainer.innerHTML = '';
    
    // Find recipes in this category
    const categoryRecipes = recipes.filter(recipe => recipe.category === categorySlug);
    
    if (categoryRecipes.length === 0) {
        recipesContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="mb-4">No recipes found in this category.</p>
                <a href="submit-recipe.html" class="btn btn-primary">Submit the first recipe</a>
            </div>
        `;
        return;
    }
    
    // Display recipes
    categoryRecipes.forEach(recipe => {
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