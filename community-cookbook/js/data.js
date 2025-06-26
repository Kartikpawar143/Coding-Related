// Sample data for the Community Cookbook website

// Categories data
const categories = [
    {
        id: 'breakfast',
        name: 'Breakfast',
        slug: 'breakfast',
        description: 'Start your day with these delicious breakfast recipes from around the world.',
        image: 'images/categories/breakfast.jpg',
        icon: 'images/cuisine-icons/breakfast.svg',
        recipeCount: 24
    },
    {
        id: 'main-dishes',
        name: 'Main Dishes',
        slug: 'main-dishes',
        description: 'Hearty and satisfying main course recipes for lunch or dinner.',
        image: 'images/categories/main-dishes.jpg',
        icon: 'images/cuisine-icons/main-dishes.svg',
        recipeCount: 42
    },
    {
        id: 'soups',
        name: 'Soups & Stews',
        slug: 'soups',
        description: 'Comforting soups and stews for any season.',
        image: 'images/categories/soups.jpg',
        icon: 'images/cuisine-icons/soup.svg',
        recipeCount: 18
    },
    {
        id: 'desserts',
        name: 'Desserts',
        slug: 'desserts',
        description: 'Sweet treats and desserts from simple to elaborate.',
        image: 'images/categories/desserts.jpg',
        icon: 'images/cuisine-icons/dessert.svg',
        recipeCount: 36
    },
    {
        id: 'vegetarian',
        name: 'Vegetarian',
        slug: 'vegetarian',
        description: 'Delicious meat-free recipes that everyone will love.',
        image: 'images/categories/vegetarian.jpg',
        icon: 'images/cuisine-icons/vegetarian.svg',
        recipeCount: 29
    },
    {
        id: 'quick-meals',
        name: 'Quick Meals',
        slug: 'quick-meals',
        description: 'Ready in 30 minutes or less - perfect for busy weeknights.',
        image: 'images/categories/quick-meals.jpg',
        icon: 'images/cuisine-icons/quick.svg',
        recipeCount: 31
    }
];

// Cuisines data
const cuisines = [
    {
        id: 'italian',
        name: 'Italian',
        slug: 'italian',
        description: 'From pasta to pizza, explore the rich culinary traditions of Italy.',
        image: 'images/cuisines/italian.jpg',
        icon: 'images/cuisine-icons/italian.svg',
        recipeCount: 28
    },
    {
        id: 'mexican',
        name: 'Mexican',
        slug: 'mexican',
        description: 'Bold flavors and vibrant dishes from Mexico\'s diverse culinary regions.',
        image: 'images/cuisines/mexican.jpg',
        icon: 'images/cuisine-icons/mexican.svg',
        recipeCount: 24
    },
    {
        id: 'indian',
        name: 'Indian',
        slug: 'indian',
        description: 'Aromatic spices and complex flavors from the Indian subcontinent.',
        image: 'images/cuisines/indian.jpg',
        icon: 'images/cuisine-icons/indian.svg',
        recipeCount: 32
    },
    {
        id: 'chinese',
        name: 'Chinese',
        slug: 'chinese',
        description: 'Traditional recipes from China\'s eight culinary traditions.',
        image: 'images/cuisines/chinese.jpg',
        icon: 'images/cuisine-icons/chinese.svg',
        recipeCount: 26
    },
    {
        id: 'american',
        name: 'American',
        slug: 'american',
        description: 'Classic comfort food and regional specialties from across the United States.',
        image: 'images/cuisines/american.jpg',
        icon: 'images/cuisine-icons/american.svg',
        recipeCount: 30
    },
    {
        id: 'thai',
        name: 'Thai',
        slug: 'thai',
        description: 'The perfect balance of sweet, sour, salty, and spicy flavors.',
        image: 'images/cuisines/thai.jpg',
        icon: 'images/cuisine-icons/thai.svg',
        recipeCount: 21
    }
];

// Sample recipes data
const recipes = [
    {
        id: '1',
        title: "Grandma's Apple Pie",
        description: "A classic American dessert with a flaky crust and cinnamon-spiced apple filling.",
        story: "This recipe has been in our family for four generations. My grandmother learned it from her mother, who brought it from Germany when she immigrated in the early 1900s. Every fall, we would pick apples together and spend the afternoon making pies.",
        image: "images/recipe-photos/apple-pie.jpg",
        category: "desserts",
        cuisine: "american",
        prepTime: 45,
        cookTime: 50,
        servings: 8,
        rating: 4.8,
        ratingCount: 156,
        author: "Sarah Johnson",
        authorId: "user123",
        authorPhoto: "images/users/sarah.jpg",
        createdAt: "2023-09-15",
        featured: true
    },
    {
        id: '2',
        title: "Authentic Pad Thai",
        description: "Classic Thai street food with the perfect balance of sweet, sour, and savory flavors.",
        story: "I learned this recipe during a cooking class in Bangkok. The chef emphasized that authentic Pad Thai doesn't use ketchup or peanut butter - just the right balance of tamarind, fish sauce, and palm sugar.",
        image: "images/recipe-photos/pad-thai.jpg",
        category: "main-dishes",
        cuisine: "thai",
        prepTime: 30,
        cookTime: 15,
        servings: 4,
        rating: 4.7,
        ratingCount: 89,
        author: "Michael Lee",
        authorId: "user456",
        authorPhoto: "images/users/michael.jpg",
        createdAt: "2023-10-02",
        featured: true
    },
    {
        id: '3',
        title: "Homemade Pasta Dough",
        description: "Simple, authentic Italian pasta dough made with just flour and eggs.",
        story: "My Italian grandmother taught me to make pasta by feel rather than exact measurements. She would say, 'The dough will tell you what it needs.' After years of practice, I finally understand what she meant.",
        image: "images/recipe-photos/pasta.jpg",
        category: "baking",
        cuisine: "italian",
        prepTime: 30,
        cookTime: 5,
        servings: 4,
        rating: 4.9,
        ratingCount: 112,
        author: "Elena Rossi",
        authorId: "user789",
        authorPhoto: "images/users/elena.jpg",
        createdAt: "2023-08-20",
        featured: true
    },
    {
        id: '4',
        title: "Moroccan Vegetable Tagine",
        description: "A fragrant, spiced vegetable stew cooked in a traditional North African clay pot.",
        story: "I discovered this dish while traveling through Morocco. A local family invited me to their home and showed me how they prepare tagine using vegetables from their garden and spices from the market.",
        image: "images/recipe-photos/tagine.jpg",
        category: "vegetarian",
        cuisine: "african",
        prepTime: 25,
        cookTime: 60,
        servings: 6,
        rating: 4.6,
        ratingCount: 78,
        author: "Amir Hassan",
        authorId: "user101",
        authorPhoto: "images/users/amir.jpg",
        createdAt: "2023-09-05",
        featured: false
    },
    {
        id: '5',
        title: "Classic French Onion Soup",
        description: "Rich beef broth with caramelized onions, topped with crusty bread and melted Gruyère cheese.",
        story: "I first tasted French onion soup at a small bistro in Paris. The owner shared his secret: patience. Properly caramelizing the onions takes time, but it's what gives this soup its incredible depth of flavor.",
        image: "images/recipe-photos/onion-soup.jpg",
        category: "soups",
        cuisine: "french",
        prepTime: 20,
        cookTime: 90,
        servings: 6,
        rating: 4.8,
        ratingCount: 94,
        author: "Jean-Pierre Dubois",
        authorId: "user202",
        authorPhoto: "images/users/jean.jpg",
        createdAt: "2023-10-10",
        featured: true
    },
    {
        id: '6',
        title: "Breakfast Burrito",
        description: "Hearty breakfast wrapped in a warm tortilla, perfect for busy mornings.",
        story: "This recipe saved me during my college years. I would make a batch on Sunday and have quick, filling breakfasts all week. Now it's a weekend tradition in our house.",
        image: "images/recipe-photos/breakfast-burrito.jpg",
        category: "breakfast",
        cuisine: "mexican",
        prepTime: 15,
        cookTime: 15,
        servings: 4,
        rating: 4.5,
        ratingCount: 67,
        author: "Carlos Rodriguez",
        authorId: "user303",
        authorPhoto: "images/users/carlos.jpg",
        createdAt: "2023-07-12",
        featured: false
    },
    {
        id: '7',
        title: "Butter Chicken",
        description: "Tender chicken in a rich, creamy tomato sauce - a beloved Indian classic.",
        story: "My mother-in-law taught me this recipe when I married into an Indian family. She spent hours showing me how to balance the spices just right. It's become our most requested dish for family gatherings.",
        image: "images/recipe-photos/butter-chicken.jpg",
        category: "main-dishes",
        cuisine: "indian",
        prepTime: 30,
        cookTime: 40,
        servings: 6,
        rating: 4.9,
        ratingCount: 128,
        author: "Priya Sharma",
        authorId: "user404",
        authorPhoto: "images/users/priya.jpg",
        createdAt: "2023-09-22",
        featured: true
    },
    {
        id: '8',
        title: "Quick Vegetable Stir Fry",
        description: "A colorful medley of vegetables in a savory sauce, ready in just 15 minutes.",
        story: "This is my go-to recipe on busy weeknights. It's infinitely adaptable to whatever vegetables are in season or in your fridge. My kids call it 'rainbow dinner' because of all the colors.",
        image: "images/recipe-photos/stir-fry.jpg",
        category: "quick-meals",
        cuisine: "chinese",
        prepTime: 10,
        cookTime: 5,
        servings: 4,
        rating: 4.4,
        ratingCount: 52,
        author: "Lin Wei",
        authorId: "user505",
        authorPhoto: "images/users/lin.jpg",
        createdAt: "2023-10-05",
        featured: false
    }
];

// Export the data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categories, cuisines, recipes };
}