import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IndianRecipe {
  title: string;
  category: string;
  region: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  image: string;
}

@Component({
  selector: 'app-indian-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indian-recipes.component.html',
  styleUrl: './indian-recipes.component.css'
})
export class IndianRecipesComponent {
  selectedRecipe: IndianRecipe | null = null;
  selectedCategory = 'All';

  categories = ['All', 'Main Course', 'Breakfast', 'Snacks', 'Dessert', 'Biryani', 'Bread'];

  recipes: IndianRecipe[] = [
    {
      title: 'Hyderabadi Chicken Biryani',
      category: 'Biryani',
      region: 'Hyderabad',
      prepTime: 40, cookTime: 50, servings: 6,
      ingredients: ['1 kg Chicken', '3 cups Basmati Rice', '2 large Onions (sliced)', '1 cup Yogurt', '2 tbsp Ginger-Garlic Paste', '1 tsp Turmeric', '2 tsp Red Chilli Powder', '1 tsp Garam Masala', 'Saffron strands in warm milk', 'Fresh Mint & Cilantro leaves', '4 tbsp Ghee', 'Whole spices (bay leaf, cardamom, cloves, cinnamon)', 'Salt to taste'],
      instructions: ['Wash and soak basmati rice for 30 minutes.', 'Marinate chicken with yogurt, ginger-garlic paste, turmeric, chilli powder, garam masala, and salt for 1 hour.', 'Fry sliced onions in ghee until deep golden brown (birista). Set aside half for garnish.', 'In the same pot, add marinated chicken and cook on medium heat for 10 minutes.', 'Parboil rice with whole spices until 70% cooked. Drain.', 'Layer the parboiled rice over the chicken. Add saffron milk, fried onions, mint, and cilantro.', 'Seal the pot with dough or tight-fitting lid. Cook on high heat for 5 minutes, then low heat for 25 minutes (dum).', 'Gently mix and serve with raita and mirchi ka salan.'],
      image: 'bi-fire'
    },
    {
      title: 'Butter Chicken (Murgh Makhani)',
      category: 'Main Course',
      region: 'Punjab',
      prepTime: 30, cookTime: 35, servings: 4,
      ingredients: ['500g Chicken (boneless)', '1 cup Tomato Puree', '1/2 cup Fresh Cream', '2 tbsp Butter', '1 tbsp Kasuri Methi', '1 tsp Garam Masala', '1 tsp Red Chilli Powder', '1 tbsp Ginger-Garlic Paste', '1 tsp Sugar', 'Salt to taste', '2 tbsp Oil'],
      instructions: ['Marinate chicken with yogurt, ginger-garlic paste, chilli powder, and salt for 30 minutes.', 'Grill or pan-fry the chicken until golden. Set aside.', 'In a pan, melt butter. Add ginger-garlic paste and saute for 1 minute.', 'Add tomato puree, chilli powder, garam masala, sugar, and salt. Cook for 15 minutes until oil separates.', 'Add the cooked chicken pieces and simmer for 10 minutes.', 'Add fresh cream and kasuri methi. Stir well.', 'Simmer for 5 more minutes. Serve hot with naan or rice.'],
      image: 'bi-egg-fried'
    },
    {
      title: 'Masala Dosa',
      category: 'Breakfast',
      region: 'Karnataka',
      prepTime: 20, cookTime: 15, servings: 4,
      ingredients: ['2 cups Rice', '1 cup Urad Dal', '4 large Potatoes (boiled, mashed)', '2 Onions (chopped)', '1 tsp Mustard Seeds', '1 tsp Urad Dal (for tempering)', '8-10 Curry Leaves', '2 Green Chillies (chopped)', '1/2 tsp Turmeric', 'Salt to taste', 'Oil for cooking'],
      instructions: ['Soak rice and urad dal separately for 6 hours. Grind to smooth batter. Ferment overnight.', 'For the filling: Heat oil, add mustard seeds and urad dal. When they splutter, add curry leaves and green chillies.', 'Add chopped onions and saute until translucent.', 'Add turmeric, salt, and mashed potatoes. Mix well and cook for 5 minutes.', 'Heat a tawa (griddle). Pour a ladleful of batter and spread in a circular motion.', 'Drizzle oil around the edges. Cook until golden and crispy.', 'Place the potato filling in the center and fold the dosa.', 'Serve hot with coconut chutney and sambar.'],
      image: 'bi-cup-hot'
    },
    {
      title: 'Paneer Tikka Masala',
      category: 'Main Course',
      region: 'North India',
      prepTime: 25, cookTime: 30, servings: 4,
      ingredients: ['400g Paneer (cubed)', '2 Bell Peppers (cubed)', '1 large Onion (cubed)', '1 cup Tomato Puree', '1/2 cup Cream', '2 tbsp Tikka Masala Powder', '1 tbsp Ginger-Garlic Paste', '1 cup Yogurt', '2 tbsp Butter', '1 tsp Kasuri Methi', 'Salt to taste'],
      instructions: ['Marinate paneer and vegetables with yogurt, tikka masala, and salt for 20 minutes.', 'Thread onto skewers and grill or pan-fry until charred.', 'For gravy: Heat butter, saute ginger-garlic paste until fragrant.', 'Add tomato puree, tikka masala, and salt. Cook for 10 minutes.', 'Add cream and kasuri methi. Simmer for 5 minutes.', 'Add grilled paneer and vegetables to the gravy.', 'Cook for 5 more minutes. Serve with naan or jeera rice.'],
      image: 'bi-fire'
    },
    {
      title: 'Chole Bhature',
      category: 'Main Course',
      region: 'Punjab',
      prepTime: 30, cookTime: 40, servings: 4,
      ingredients: ['2 cups Chickpeas (soaked overnight)', '2 Onions (finely chopped)', '3 Tomatoes (pureed)', '2 tbsp Chole Masala', '1 tsp Amchur (dry mango powder)', '1 tsp Garam Masala', '1 tbsp Ginger-Garlic Paste', '2 cups All-Purpose Flour', '1/2 cup Yogurt', '1 tsp Baking Powder', 'Oil for deep frying', 'Salt to taste'],
      instructions: ['Pressure cook soaked chickpeas with salt and tea bag (for dark color) until soft.', 'Heat oil, saute onions until golden. Add ginger-garlic paste and cook for 2 minutes.', 'Add tomato puree, chole masala, amchur, garam masala, and salt. Cook until oil separates.', 'Add cooked chickpeas with some water. Simmer for 20 minutes. Mash a few chickpeas for thick gravy.', 'For bhature: Mix flour, yogurt, baking powder, salt, and oil. Knead into soft dough. Rest for 2 hours.', 'Roll into oval shapes and deep fry until puffed and golden.', 'Serve chole hot with bhature, pickled onions, and green chutney.'],
      image: 'bi-egg-fried'
    },
    {
      title: 'Samosa',
      category: 'Snacks',
      region: 'North India',
      prepTime: 30, cookTime: 20, servings: 8,
      ingredients: ['2 cups All-Purpose Flour', '4 large Potatoes (boiled, mashed)', '1 cup Green Peas', '1 tsp Cumin Seeds', '1 tsp Garam Masala', '1 tsp Amchur', '2 Green Chillies (chopped)', 'Fresh Coriander (chopped)', '4 tbsp Oil (for dough)', 'Oil for deep frying', 'Salt to taste'],
      instructions: ['Mix flour, oil, salt, and water to make a stiff dough. Rest for 30 minutes.', 'Heat oil, add cumin seeds. When they splutter, add green peas and cook for 3 minutes.', 'Add mashed potatoes, garam masala, amchur, green chillies, coriander, and salt. Mix well. Cool.', 'Divide dough into balls. Roll each into an oval. Cut in half.', 'Form a cone with each half-circle. Fill with potato mixture. Seal edges with water.', 'Deep fry on medium-low heat until golden and crispy (about 8-10 minutes).', 'Serve hot with mint chutney and tamarind chutney.'],
      image: 'bi-triangle'
    },
    {
      title: 'Gulab Jamun',
      category: 'Dessert',
      region: 'Rajasthan',
      prepTime: 15, cookTime: 25, servings: 6,
      ingredients: ['1 cup Khoya (milk solid)', '1/4 cup All-Purpose Flour', '1 pinch Baking Soda', '2 tbsp Milk', '1.5 cups Sugar', '1.5 cups Water', '4-5 Cardamom Pods (crushed)', '1 tsp Rose Water', 'Saffron strands', 'Oil/Ghee for deep frying'],
      instructions: ['Make sugar syrup: Boil sugar and water until slightly sticky. Add cardamom, rose water, and saffron. Set aside.', 'Crumble khoya. Add flour, baking soda, and milk. Knead gently into a smooth dough (do not over-knead).', 'Make small, smooth, crack-free balls (they will double in size).', 'Heat oil/ghee on low heat. Fry the balls on very low heat, turning gently, until deep brown (about 8-10 minutes).', 'Immediately drop the hot gulab jamuns into warm sugar syrup.', 'Let them soak for at least 2 hours before serving.', 'Serve warm or at room temperature, garnished with chopped pistachios.'],
      image: 'bi-circle-fill'
    },
    {
      title: 'Chicken Tikka',
      category: 'Snacks',
      region: 'Punjab',
      prepTime: 40, cookTime: 20, servings: 4,
      ingredients: ['500g Chicken (boneless, cubed)', '1 cup Thick Yogurt', '2 tbsp Lemon Juice', '2 tsp Tikka Masala', '1 tsp Red Chilli Powder', '1 tsp Turmeric', '1 tbsp Ginger-Garlic Paste', '2 tbsp Mustard Oil', 'Chaat Masala for garnish', 'Salt to taste'],
      instructions: ['Mix yogurt, lemon juice, tikka masala, chilli powder, turmeric, ginger-garlic paste, mustard oil, and salt.', 'Add chicken cubes and marinate for at least 2 hours (overnight is best).', 'Thread marinated chicken onto skewers.', 'Grill in oven at 220°C for 15-20 minutes, turning halfway, until charred.', 'Alternatively, cook on a hot tandoor or charcoal grill.', 'Sprinkle chaat masala and squeeze lemon. Serve with mint chutney and onion rings.'],
      image: 'bi-fire'
    },
    {
      title: 'Dal Makhani',
      category: 'Main Course',
      region: 'Punjab',
      prepTime: 15, cookTime: 60, servings: 4,
      ingredients: ['1 cup Whole Black Urad Dal', '1/4 cup Rajma (kidney beans)', '2 Onions (finely chopped)', '3 Tomatoes (pureed)', '2 tbsp Butter', '1 tbsp Ginger-Garlic Paste', '1 tsp Red Chilli Powder', '1 tsp Garam Masala', '1/2 cup Fresh Cream', '1 tbsp Kasuri Methi', 'Salt to taste'],
      instructions: ['Soak urad dal and rajma overnight. Pressure cook until very soft (about 30 minutes).', 'Heat butter, saute onions until golden brown.', 'Add ginger-garlic paste and cook for 2 minutes.', 'Add tomato puree, chilli powder, and salt. Cook until oil separates.', 'Add the cooked dal and mix well. Add water for desired consistency.', 'Simmer on low heat for 30 minutes, stirring occasionally.', 'Add cream, garam masala, and kasuri methi. Cook for 5 more minutes.', 'Finish with a dollop of butter. Serve with naan or rice.'],
      image: 'bi-cup-hot'
    },
    {
      title: 'Pani Puri (Golgappa)',
      category: 'Snacks',
      region: 'Maharashtra',
      prepTime: 20, cookTime: 15, servings: 6,
      ingredients: ['2 cups Semolina (suji)', '1/2 cup All-Purpose Flour', '2 large Potatoes (boiled, mashed)', '1 cup Boiled Chickpeas', '1 cup Tamarind Chutney', 'Fresh Mint Leaves', 'Fresh Coriander', '4-5 Green Chillies', '1 tsp Cumin Powder', '1 tsp Black Salt', 'Chaat Masala', 'Oil for deep frying'],
      instructions: ['Mix semolina, flour, salt, and water to make a stiff dough. Rest for 20 minutes.', 'Roll very thin and cut small circles. Deep fry until puffed and crispy.', 'For pani: Blend mint, coriander, green chillies with water. Add cumin powder, black salt, and lemon juice.', 'For filling: Mix mashed potatoes, chickpeas, chaat masala, and chopped onions.', 'Make a hole in each puri. Add filling.', 'Fill with spicy mint water (pani). Serve immediately.'],
      image: 'bi-droplet'
    },
    {
      title: 'Naan Bread',
      category: 'Bread',
      region: 'North India',
      prepTime: 20, cookTime: 15, servings: 8,
      ingredients: ['3 cups All-Purpose Flour', '1 tsp Baking Powder', '1/2 tsp Baking Soda', '1 tsp Sugar', '1 tsp Salt', '3 tbsp Yogurt', '3 tbsp Oil', '1/2 cup Warm Milk', 'Butter and Garlic (for garlic naan)', 'Nigella Seeds (optional)'],
      instructions: ['Mix flour, baking powder, baking soda, sugar, and salt.', 'Add yogurt, oil, and warm milk. Knead into a soft, smooth dough.', 'Cover and rest for 2 hours in a warm place.', 'Divide into balls. Roll each into a teardrop shape.', 'Wet one side with water. Place wet side down on a hot tawa/tandoor.', 'Cook until bubbles form. Flip and cook over direct flame until charred spots appear.', 'Brush with butter and garlic (for garlic naan). Serve hot.'],
      image: 'bi-circle'
    },
    {
      title: 'Rasmalai',
      category: 'Dessert',
      region: 'West Bengal',
      prepTime: 20, cookTime: 30, servings: 6,
      ingredients: ['1 litre Full-Fat Milk', '2 tbsp Lemon Juice', '1 litre Milk (for rabri)', '1/2 cup Sugar', '1/4 tsp Cardamom Powder', '10-12 Saffron Strands', 'Chopped Pistachios and Almonds', '1 tbsp Rose Water'],
      instructions: ['Boil 1 litre milk. Add lemon juice to curdle. Strain through muslin cloth to get chenna (paneer).', 'Knead chenna until very smooth (about 10 minutes). Form flat disc shapes.', 'Boil sugar in water to make syrup. Add chenna discs and cook for 10 minutes. They will double in size.', 'For rabri: Boil 1 litre milk on low heat, stirring often, until reduced to half.', 'Add cardamom, saffron, rose water, and sugar to the thickened milk.', 'Squeeze excess sugar syrup from chenna discs and add to the rabri.', 'Refrigerate for 4 hours. Garnish with pistachios and almonds. Serve chilled.'],
      image: 'bi-snow'
    }
  ];

  get filteredRecipes(): IndianRecipe[] {
    if (this.selectedCategory === 'All') return this.recipes;
    return this.recipes.filter(r => r.category === this.selectedCategory);
  }

  viewRecipe(recipe: IndianRecipe): void {
    this.selectedRecipe = recipe;
  }

  closeDetail(): void {
    this.selectedRecipe = null;
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Main Course': '#e65100', 'Breakfast': '#ff9800', 'Snacks': '#e91e63',
      'Dessert': '#9c27b0', 'Biryani': '#2e7d32', 'Bread': '#795548'
    };
    return colors[category] || '#4caf50';
  }
}
