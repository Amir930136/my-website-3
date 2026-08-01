var recipes = [
  {
    name: "Spaghetti Bolognese",
    desc: "Classic Italian pasta with rich meat sauce",
    image: "images/IMG-20251129-WA0020.jpg",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "3 people",
    review: "4.7 (512 reviews)",
    gategories: ["Easy", "Italian"],
    ingrediants: [
      "200g spaghetti",
      "250g minced beef",
      "1 onion chopped",
      "2 garlic cloves",
      "400g tomato sauce",
      "Olive oil",
      "Basil leaves"
    ],
    instructions: [
      "Boil spaghetti until al dente.",
      "Sauté onion and garlic in olive oil.",
      "Add minced beef and cook until browned.",
      "Add tomato sauce and simmer 30 minutes.",
      "Serve sauce over spaghetti, garnish with basil."
    ],
    tips: ["Use fresh basil", "Simmer longer for richer flavor"],
    nutrition: {
      calories: "620 kcal",
      protein: "35g",
      carbohydrates: "70g",
      fat: "20g",
      fiber: "5g",
      sodium: "890 mg"
    }
  },

  {
    name: "Chicken Alfredo",
    desc: "Creamy pasta with grilled chicken and parmesan",
    image: "images/IMG-20251129-WA0021.jpg",
    prepTime: "20 min",
    cookTime: "25 min",
    servings: "2 people",
    review: "4.8 (420 reviews)",
    gategories: ["Intermediate", "Italian"],
    ingrediants: [
      "200g fettuccine",
      "1 chicken breast",
      "1 cup heavy cream",
      "Parmesan cheese",
      "Butter",
      "Garlic"
    ],
    instructions: [
      "Cook fettuccine.",
      "Grill chicken and slice.",
      "Melt butter, add cream and garlic.",
      "Add parmesan and stir.",
      "Combine pasta and chicken with sauce."
    ],
    tips: ["Don’t overheat the cream", "Use fresh parmesan"],
    nutrition: {
      calories: "700 kcal",
      protein: "40g",
      carbohydrates: "65g",
      fat: "30g",
      fiber: "3g",
      sodium: "950 mg"
    }
  },

  {
    name: "Beef Tacos",
    desc: "Crispy tacos filled with seasoned beef and vegetables",
    image: "images/IMG-20251129-WA0023.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    review: "4.6 (390 reviews)",
    gategories: ["Easy", "Mexican"],
    ingrediants: [
      "300g minced beef",
      "Taco shells",
      "Lettuce",
      "Cheddar cheese",
      "Tomatoes",
      "Taco seasoning"
    ],
    instructions: [
      "Cook beef with taco seasoning.",
      "Prepare lettuce and tomatoes.",
      "Fill taco shells with beef and veggies.",
      "Top with cheese."
    ],
    tips: ["Warm taco shells before serving"],
    nutrition: {
      calories: "480 kcal",
      protein: "28g",
      carbohydrates: "42g",
      fat: "20g",
      fiber: "4g",
      sodium: "780 mg"
    }
  },

  {
    name: "Caesar Salad",
    desc: "Fresh romaine lettuce with creamy Caesar dressing",
    image: "images/IMG-20251129-WA0025.jpg",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "2 people",
    review: "4.3 (220 reviews)",
    gategories: ["Easy", "Healthy"],
    ingrediants: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing"
    ],
    instructions: [
      "Chop lettuce.",
      "Add croutons and parmesan.",
      "Toss with dressing."
    ],
    tips: ["Add grilled chicken to increase protein"],
    nutrition: {
      calories: "220 kcal",
      protein: "6g",
      carbohydrates: "18g",
      fat: "14g",
      fiber: "3g",
      sodium: "310 mg"
    }
  },

  {
    name: "Margherita Pizza",
    desc: "Classic pizza with mozzarella and basil",
    image: "images/IMG-20251129-WA0026.jpg",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
    review: "4.9 (580 reviews)",
    gategories: ["Intermediate", "Italian"],
    ingrediants: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
    instructions: [
      "Spread tomato sauce on dough.",
      "Add mozzarella slices.",
      "Bake 12–15 min.",
      "Top with basil and olive oil."
    ],
    tips: ["Use fresh mozzarella"],
    nutrition: {
      calories: "650 kcal",
      protein: "25g",
      carbohydrates: "80g",
      fat: "22g",
      fiber: "4g",
      sodium: "720 mg"
    }
  },

  {
    name: "Grilled Salmon",
    desc: "Perfectly grilled salmon with lemon and herbs",
    image: "images/IMG-20251129-WA0027.jpg",
    prepTime: "10 min",
    cookTime: "12 min",
    servings: "2 people",
    review: "4.8 (300 reviews)",
    gategories: ["Healthy", "Seafood"],
    ingrediants: ["2 salmon fillets", "Lemon", "Garlic", "Olive oil", "Parsley"],
    instructions: [
      "Season salmon.",
      "Grill 5–6 minutes per side.",
      "Serve with lemon slices."
    ],
    tips: ["Don't overcook salmon"],
    nutrition: {
      calories: "420 kcal",
      protein: "38g",
      carbohydrates: "3g",
      fat: "28g",
      fiber: "0g",
      sodium: "210 mg"
    }
  },

  {
    name: "Shrimp Fried Rice",
    desc: "Asian-style fried rice with shrimp and vegetables",
    image: "images/IMG-20251129-WA0029.jpg",
    prepTime: "10 min",
    cookTime: "10 min",
    servings: "3 people",
    review: "4.4 (260 reviews)",
    gategories: ["Asian", "Easy"],
    ingrediants: ["Cooked rice", "Shrimp", "Eggs", "Peas", "Carrots", "Soy sauce"],
    instructions: [
      "Scramble eggs.",
      "Add vegetables and shrimp.",
      "Add rice and soy sauce, stir fry."
    ],
    tips: ["Use cold rice for best texture"],
    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbohydrates: "70g",
      fat: "12g",
      fiber: "4g",
      sodium: "900 mg"
    }
  },

  {
    name: "French Toast",
    desc: "Golden toast dipped in sweet egg mixture",
    image: "images/IMG-20251129-WA0031.jpg",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "2 people",
    review: "4.5 (310 reviews)",
    gategories: ["Breakfast", "Sweet"],
    ingrediants: ["Bread", "Eggs", "Milk", "Sugar", "Cinnamon", "Butter"],
    instructions: [
      "Mix eggs, milk, cinnamon.",
      "Dip bread slices.",
      "Cook on buttered pan."
    ],
    tips: ["Use thick bread"],
    nutrition: {
      calories: "380 kcal",
      protein: "12g",
      carbohydrates: "45g",
      fat: "14g",
      fiber: "2g",
      sodium: "260 mg"
    }
  },

  {
    name: "Greek Salad",
    desc: "Fresh salad with feta and olives",
    image: "images/IMG-20251129-WA0033.jpg",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "2 people",
    review: "4.6 (210 reviews)",
    alertTitle : "Extended Preparation Time",
    alertDesc : "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    gategories: ["Healthy", "Mediterranean"],
    ingrediants: ["Tomatoes", "Cucumber", "Onion", "Feta", "Olives", "Olive oil"],
    instructions: ["Chop veggies", "Add feta and olives", "Drizzle olive oil"],
    tips: ["Use fresh tomatoes"],
    nutrition: {
      calories: "250 kcal",
      protein: "8g",
      carbohydrates: "12g",
      fat: "18g",
      fiber: "3g",
      sodium: "430 mg"
    }
  },

  {
    name: "Butter Chicken",
    desc: "Creamy Indian chicken curry with spices",
    image: "images/IMG-20251129-WA0034.jpg",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "3 people",
    review: "4.9 (700 reviews)",
    gategories: ["Indian", "Intermediate"],
    ingrediants: ["Chicken", "Tomato puree", "Cream", "Butter", "Garam masala"],
    instructions: [
      "Cook chicken in spices.",
      "Add tomato puree.",
      "Add cream and simmer."
    ],
    tips: ["Marinate chicken overnight"],
    nutrition: {
      calories: "680 kcal",
      protein: "36g",
      carbohydrates: "30g",
      fat: "48g",
      fiber: "4g",
      sodium: "980 mg"
    }
  },

  {
    name: "Sushi Rolls",
    desc: "Japanese rice rolls with fish and vegetables",
    image: "images/IMG-20251129-WA0035.jpg",
    prepTime: "30 min",
    cookTime: "0 min",
    servings: "2 people",
    review: "4.7 (500 reviews)",
    gategories: ["Asian", "Intermediate"],
    ingrediants: ["Sushi rice", "Nori", "Salmon", "Cucumber", "Avocado"],
    instructions: [
      "Prepare sushi rice.",
      "Place ingredients on nori.",
      "Roll tightly and slice."
    ],
    tips: ["Wet knife before slicing"],
    nutrition: {
      calories: "300 kcal",
      protein: "18g",
      carbohydrates: "40g",
      fat: "8g",
      fiber: "3g",
      sodium: "190 mg"
    }
  },

  {
    name: "Chocolate Cake",
    desc: "Soft chocolate cake with rich frosting",
    image: "images/IMG-20251129-WA0036.jpg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    review: "4.8 (900 reviews)",
    gategories: ["Dessert", "Sweet"],
    ingrediants: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Eggs",
      "Butter",
      "Milk"
    ],
    instructions: [
      "Mix dry ingredients.",
      "Add wet ingredients.",
      "Bake 30 minutes.",
      "Frost when cooled."
    ],
    tips: ["Use room temperature butter"],
    nutrition: {
      calories: "450 kcal",
      protein: "6g",
      carbohydrates: "60g",
      fat: "20g",
      fiber: "3g",
      sodium: "300 mg"
    }
  },
]



var num = 0;

function tryRecipe(){
  // 
  console.log(recipes[num]);

  document.getElementById("recipeRating").innerHTML = recipes[num].review;
  document.getElementById("recipeImg").src = recipes[num].image;
  document.getElementById("prepTime").innerHTML = recipes[num].prepTime;
  document.getElementById("cookTime").innerHTML = recipes[num].cookTime;
  document.getElementById("servings").innerHTML = recipes[num].servings;
  document.getElementById("recipeLevel").innerHTML = recipes[num].gategories[0];
  document.getElementById("recipeCategory").innerHTML = recipes[num].gategories[1];
  document.getElementById("recipeTitle").innerHTML = recipes[num].name;
  document.getElementById("recipeDesc").innerHTML = recipes[num].desc;

  //! Ingredients
  var ingredientHTML = "";
  for(var i = 0; i < recipes[num].ingrediants.length ; i++){
    ingredientHTML += 
    `
      <li id="li1OfTab" class="d-flex align-items-center justify-content-start column-gap-2">
            <div
              class="num-style rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
              ${i + 1}</div>
            <span class="text-muted" id="ing1text">${recipes[num].ingrediants[i]}</span>
      </li>
    
    `
  } 

  document.getElementById("ingredientsList").innerHTML = ingredientHTML;


  //! Instructions
  var instructionHTML = "";
  for(var i = 0 ; i < recipes[num].instructions.length ; i++){
    instructionHTML += 
    `
      <div class="d-flex justify-content-start align-items-center column-gap-3 mb-2 mb-md-4">
        <div
          class="rounded-4 num-style text-white fs-5 fw-bold d-flex align-items-center justify-content-center">
          ${i + 1}</div>
        <div class="pt-2 pt-md-0">
          <p class="text-muted m-0" id="instr1text">${recipes[num].instructions[i]}</p>
        </div>
      </div>
    
    `
  } 
  document.getElementById("instructionsList").innerHTML = instructionHTML;

  //! Alert Logic
  if (recipes[num].alertTitle && recipes[num].alertDesc) {
    document.getElementById("alertTitle").innerHTML=recipes[num].alertTitle;
    document.getElementById("alertDesc").innerHTML=recipes[num].alertDesc;
    document.getElementById("warning").classList.remove("d-none")

  }else{
    document.getElementById("warning").classList.add("d-none")

  }

  num++ // 1 

  if(num > recipes.length - 1){
    num = 0
  }
  
}




