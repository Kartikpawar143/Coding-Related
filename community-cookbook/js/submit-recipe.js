document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners for add/remove buttons
    setupIngredientButtons();
    setupInstructionButtons();
    setupNoteButtons();
    
    // Set up image preview
    setupImagePreview();
    
    // Set up form submission
    setupFormSubmission();
});

// Function to set up ingredient buttons
function setupIngredientButtons() {
    const addIngredientBtn = document.getElementById('add-ingredient');
    const ingredientsContainer = document.getElementById('ingredients-container');
    
    if (addIngredientBtn && ingredientsContainer) {
        // Add ingredient button click handler
        addIngredientBtn.addEventListener('click', function() {
            const newRow = document.createElement('div');
            newRow.className = 'ingredient-row';
            newRow.innerHTML = `
                <div class="flex-grow-1 me-2">
                    <input type="text" class="form-control" placeholder="Amount (e.g., 2 cups)" name="ingredient-amount[]">
                </div>
                <div class="flex-grow-2 me-2">
                    <input type="text" class="form-control" placeholder="Ingredient name" name="ingredient-name[]">
                </div>
                <button type="button" class="remove-button">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            ingredientsContainer.appendChild(newRow);
            
            // Enable all remove buttons if there's more than one ingredient
            if (ingredientsContainer.querySelectorAll('.ingredient-row').length > 1) {
                ingredientsContainer.querySelectorAll('.remove-button').forEach(btn => {
                    btn.disabled = false;
                });
            }
            
            // Add event listener to the new remove button
            newRow.querySelector('.remove-button').addEventListener('click', function() {
                newRow.remove();
                
                // If only one ingredient remains, disable its remove button
                if (ingredientsContainer.querySelectorAll('.ingredient-row').length === 1) {
                    ingredientsContainer.querySelector('.remove-button').disabled = true;
                }
            });
        });
    }
}

// Function to set up instruction buttons
function setupInstructionButtons() {
    const addInstructionBtn = document.getElementById('add-instruction');
    const instructionsContainer = document.getElementById('instructions-container');
    
    if (addInstructionBtn && instructionsContainer) {
        // Add instruction button click handler
        addInstructionBtn.addEventListener('click', function() {
            const stepNumber = instructionsContainer.querySelectorAll('.instruction-row').length + 1;
            
            const newRow = document.createElement('div');
            newRow.className = 'instruction-row';
            newRow.innerHTML = `
                <div class="step-number">${stepNumber}</div>
                <div class="flex-grow-1 me-2">
                    <textarea class="form-control" rows="2" placeholder="Step ${stepNumber}" name="instruction[]"></textarea>
                </div>
                <div class="mb-3">
                    <input type="file" class="form-control" accept="image/*" name="step-image[]" id="step-image-${stepNumber}">
                </div>
                <button type="button" class="remove-button">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            instructionsContainer.appendChild(newRow);
            
            // Enable all remove buttons if there's more than one instruction
            if (instructionsContainer.querySelectorAll('.instruction-row').length > 1) {
                instructionsContainer.querySelectorAll('.remove-button').forEach(btn => {
                    btn.disabled = false;
                });
            }
            
            // Add event listener to the new remove button
            newRow.querySelector('.remove-button').addEventListener('click', function() {
                newRow.remove();
                
                // Renumber steps
                instructionsContainer.querySelectorAll('.instruction-row').forEach((row, index) => {
                    row.querySelector('.step-number').textContent = index + 1;
                    row.querySelector('textarea').placeholder = `Step ${index + 1}`;
                });
                
                // If only one instruction remains, disable its remove button
                if (instructionsContainer.querySelectorAll('.instruction-row').length === 1) {
                    instructionsContainer.querySelector('.remove-button').disabled = true;
                }
            });
        });
    }
}

// Function to set up note buttons
function setupNoteButtons() {
    const addNoteBtn = document.getElementById('add-note');
    const notesContainer = document.getElementById('notes-container');
    
    if (addNoteBtn && notesContainer) {
        // Add note button click handler
        addNoteBtn.addEventListener('click', function() {
            const newRow = document.createElement('div');
            newRow.className = 'note-row';
            newRow.innerHTML = `
                <div class="flex-grow-1 me-2">
                    <textarea class="form-control" rows="2" placeholder="Add a helpful note or tip" name="note[]"></textarea>
                </div>
                <button type="button" class="remove-button">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            notesContainer.appendChild(newRow);
            
            // Enable all remove buttons if there's more than one note
            if (notesContainer.querySelectorAll('.note-row').length > 1) {
                notesContainer.querySelectorAll('.remove-button').forEach(btn => {
                    btn.disabled = false;
                });
            }
            
            // Add event listener to the new remove button
            newRow.querySelector('.remove-button').addEventListener('click', function() {
                newRow.remove();
                
                // If only one note remains, disable its remove button
                if (notesContainer.querySelectorAll('.note-row').length === 1) {
                    notesContainer.querySelector('.remove-button').disabled = true;
                }
            });
        });
    }
}

// Function to set up image preview
function setupImagePreview() {
    const imageInput = document.getElementById('image');
    const imagePreview = document.getElementById('image-preview');
    
    if (imageInput && imagePreview) {
        imageInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    imagePreview.querySelector('img').src = e.target.result;
                    imagePreview.classList.remove('d-none');
                };
                
                reader.readAsDataURL(this.files[0]);
            }
        });
    }
}

// Function to set up form submission
function setupFormSubmission() {
    const recipeForm = document.getElementById('recipe-form');
    
    if (recipeForm) {
        recipeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For this demo, we'll just show a success message
            
            // Create a success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-4';
            successMessage.innerHTML = `
                <h4 class="alert-heading">Recipe Submitted Successfully!</h4>
                <p>Thank you for contributing to our community cookbook. Your recipe has been submitted and will be reviewed shortly.</p>
                <hr>
                <p class="mb-0">You will be redirected to the homepage in a few seconds.</p>
            `;
            
            // Insert the success message before the form
            recipeForm.parentNode.insertBefore(successMessage, recipeForm);
            
            // Hide the form
            recipeForm.style.display = 'none';
            
            // Scroll to the top of the page
            window.scrollTo(0, 0);
            
            // Redirect to homepage after 3 seconds
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 3000);
        });
    }
}