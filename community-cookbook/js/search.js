document.addEventListener('DOMContentLoaded', function() {
    // Get search parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    const categoryParam = urlParams.get('category');
    const cuisineParam = urlParams.get('cuisine');
    const featuredParam = urlParams.get('featured');
    const sortParam = urlParams.get('sort') || 'newest';
    
    // Set up filter dropdowns
    setupCategoryFilter();
    setupCuisineFilter();
    
    // Set up sort buttons
    setupSortButtons(sortParam);
    
    // Perform search
    performSearch(searchQuery, categoryParam, cuisineParam, featuredParam, sortParam);
    
    // Update search title
    updateSearchTitle(searchQuery, categoryParam, cuisineParam, featuredParam);
});

// Function to set up category filter dropdown
function setupCategoryFilter() {
    const categoryFilter = document.getElementById('category-filter');
    if (!categoryFilter) return;
    
    // Add categories to dropdown
    categories.forEach(category => {
        const li = document.createElement('li');
        li.innerHTML = `<a class="dropdown-item" href="#" data-category="${category.slug}">${category.name}</a>`;
        categoryFilter.appendChild(li);
    });
    
    // Add click event to category filter items
    categoryFilter.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active class
            categoryFilter.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Update button text
            const categoryText = this.dataset.category === 'all' ? 'Category' : this.textContent;
            document.getElementById('categoryFilterDropdown').textContent = categoryText;
            
            // Update URL and perform search
            updateSearchParams();
        });
    });
}

// Function to set up cuisine filter dropdown
function setupCuisineFilter() {
    const cuisineFilter = document.getElementById('cuisine-filter');
    if (!cuisineFilter) return;
    
    // Add cuisines to dropdown
    cuisines.forEach(cuisine => {
        const li = document.createElement('li');
        li.innerHTML = `<a class="dropdown-item" href="#" data-cuisine="${cuisine.slug}">${cuisine.name}</a>`;
        cuisineFilter.appendChild(li);
    });
    
    // Add click event to cuisine filter items
    cuisineFilter.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active class
            cuisineFilter.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Update button text
            const cuisineText = this.dataset.cuisine === 'all' ? 'Cuisine' : this.textContent;
            document.getElementById('cuisineFilterDropdown').textContent = cuisineText;
            
            // Update URL and perform search
            updateSearchParams();
        });
    });
}

// Function to set up sort buttons
function setupSortButtons(activeSort) {
    const sortButtons = document.querySelectorAll('.sort-button');
    
    // Set active sort button
    sortButtons.forEach(button => {
        if (button.dataset.sort === activeSort) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
        
        // Add click event
        button.addEventListener('click', function() {
            // Update active class
            sortButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update URL and perform search
            updateSearchParams();
        });
    });
}

// Function to update search parameters and perform search
function updateSearchParams() {
    // Get current search parameters
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    const featuredParam = urlParams.get('featured');
    
    // Get selected category
    const activeCategoryItem = document.querySelector('#category-filter .dropdown-item.active');
    const categoryParam = activeCategoryItem && activeCategoryItem.dataset.category !== 'all' ? activeCategoryItem.dataset.category : null;
    
    // Get selected cuisine
    const activeCuisineItem = document.querySelector('#cuisine-filter .dropdown-item.active');
    const cuisineParam = activeCuisineItem && activeCuisineItem.dataset.cuisine !== 'all' ? activeCuisineItem.dataset.cuisine : null;
    
    // Get selected sort
    const activeSortButton = document.querySelector('.sort-button.active');
    const sortParam = activeSortButton ? activeSortButton.dataset.sort : 'newest';
    
    // Build new URL
    const newParams = new URLSearchParams();
    if (searchQuery) newParams.set('q', searchQuery);
    if (categoryParam) newParams.set('category', categoryParam);
    if (cuisineParam) newParams.set('cuisine', cuisineParam);
    if (featuredParam) newParams.set('featured', featuredParam);
    if (sortParam) newParams.set('sort', sortParam);
    
    // Update URL without reloading the page
    const newUrl = `${window.location.pathname}?${newParams.toString()}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    
    // Perform search with new parameters
    performSearch(searchQuery, categoryParam, cuisineParam, featuredParam, sortParam);
    
    // Update search title
    updateSearchTitle(searchQuery, categoryParam, cuisineParam, featuredParam);
}

// Function to perform search
function performSearch(query, category, cuisine, featured, sort) {
    // Filter recipes based on search parameters
    let results = [...recipes];
    
    // Filter by search query
    if (query) {
        const searchTerms = query.toLowerCase().split(' ');
        results = results.filter(recipe => {
            const searchText = `${recipe.title} ${recipe.description} ${recipe.category} ${recipe.cuisine} ${recipe.tags || ''}`.toLowerCase();
            return searchTerms.every(term => searchText.includes(term));
        });
    }
    
    // Filter by category
    if (category) {
        results = results.filter(recipe => recipe.category === category);
    }
    
    // Filter by cuisine
    if (cuisine) {
        results = results.filter(recipe => recipe.cuisine === cuisine);
    }
    
    // Filter by featured
    if (featured === 'true') {
        results = results.filter(recipe => recipe.featured);
    }
    
    // Sort results
    if (sort === 'newest') {
        results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 'popular') {
        results.sort((a, b) => b.ratingCount - a.ratingCount);
    } else if (sort === 'rating') {
        results.sort((a, b) => b.rating - a.rating);
    }
    
    // Display results
    displaySearchResults(results);
}

// Function to display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('results-container');
    const noResultsMessage = document.getElementById('no-results');
    const resultsCountElement = document.getElementById('results-count');
    
    if (!resultsContainer || !noResultsMessage || !resultsCountElement) return;
    
    // Clear results container
    resultsContainer.innerHTML = '';
    
    // Update results count
    resultsCountElement.textContent = results.length;
    
    // Show/hide no results message
    if (results.length === 0) {
        noResultsMessage.classList.remove('d-none');
        return;
    } else {
        noResultsMessage.classList.add('d-none');
    }
    
    // Display results
    results.forEach(recipe => {
        resultsContainer.appendChild(createRecipeCard(recipe));
    });
}

// Function to update search title
function updateSearchTitle(query, category, cuisine, featured) {
    const searchTitleElement = document.getElementById('search-title');
    if (!searchTitleElement) return;
    
    let title = '';
    
    if (query) {
        title = `Search results for "${query}"`;
    } else if (category) {
        const categoryObj = categories.find(cat => cat.slug === category);
        title = categoryObj ? `${categoryObj.name} Recipes` : 'Category Recipes';
    } else if (cuisine) {
        const cuisineObj = cuisines.find(c => c.slug === cuisine);
        title = cuisineObj ? `${cuisineObj.name} Cuisine` : 'Cuisine Recipes';
    } else if (featured === 'true') {
        title = 'Featured Recipes';
    } else {
        title = 'All Recipes';
    }
    
    searchTitleElement.textContent = title;
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