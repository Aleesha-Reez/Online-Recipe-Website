"use strict";

const users = {};

const recipeList = {
    1: {
        title: 'Vintage French Apple cake',
        Author: 'Adam Rapoport'
    },
    2: {
        title: 'Chicken Sausage Pizza',
        Author: 'Anita Stewart'
    },
    3: {
        title: 'Garlic Butter Steak',
        Author: 'Ritu Dalmia',
    },
    4: {
        title: 'Best Chicken Ever',
        Author: 'Janet Ross',
    },
    5: {
        title: 'Coconut-Vannila Cake',
        Author: 'Steven L',
    }
};
const recipes = [
    {
        Author: "Adam Rapoport",
        title: "Vintage French Apple cake",
        ingredients:  `1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping`,            
        instructions: `Preheat oven to 350 degrees F. Grease and flour a bundt cake pan.
        Combine sugar and eggs in a mixing bowl and use an electric mixer to mix for 1 minute. Add in flour and vanilla, then mix on medium speed for 8 minutes.
        Pour batter into cake pan and bake for 30-35 minutes, until a toothpick inserted comes out clean. (Cake will be very soft to the touch and register 200 degrees F on a thermometer.)
        Cool for 20-30 minutes, then invert onto a plate and cool completely.
        Serve with berries and cream or top with almond glaze, then berries.
        Preheat oven to 350 degrees F. Grease and flour a bundt cake pan.
        Combine sugar and eggs in a mixing bowl and use an electric mixer to mix for 1 minute. Add in flour and vanilla, then mix on medium speed for 8 minutes.
        Pour batter into cake pan and bake for 30-35 minutes, until a toothpick inserted comes out clean. (Cake will be very soft to the touch and register 200 degrees F on a thermometer.)
        Cool for 20-30 minutes, then invert onto a plate and cool completely.
        Serve with berries and cream or top with almond glaze, then berries.
        Preheat oven to 350 degrees F. Grease and flour a bundt cake pan.
        Serve with berries and cream or top with almond glaze, then berries.`
    },
    {
        Author: "Anita Stewart", 
        title: "Chicken Sausage Pizza",
        ingredients:  `1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping`,            
        instructions: `In a cup or small bowl, sprinkle yeast over the surface of the lukewarm water. Let stand for 5 to 10 minutes to dissolve.
        In a large bowl, stir together the flour, salt and sugar. Pour in the yeast mixture along with the olive oil. Beat with a sturdy spoon until dough is stiff enough to pull away from the sides of the bowl. Cover, and set aside until doubled in size, about 35 minutes.
        Remove the dough from the bowl and knead briefly on a floured surface. Roll the dough out to 1/4 to 1/2 inch thickness or to the size of your baking sheet. Place on a greased baking sheet and spread butter over the top. Sprinkle with garlic powder, Parmesan cheese and mozzarella cheese. Let rest while you preheat the oven to 350 degrees F (175 degrees C).
        Bake for 20 minutes in the preheated oven, until golden brown and cheese is bubbly. Serve warm.In a cup or small bowl, sprinkle yeast over the surface of the lukewarm water. Let stand for 5 to 10 minutes to dissolve.
        In a large bowl, stir together the flour, salt and sugar. Pour in the yeast mixture along with the olive oil. Beat with a sturdy spoon until dough is stiff enough to pull away from the sides of the bowl. Cover, and set aside until doubled in size, about 35 minutes.
        Remove the dough from the bowl and knead briefly on a floured surface. Roll the dough out to 1/4 to 1/2 inch thickness or to the size of your baking sheet. Place on a greased baking sheet and spread butter over the top. Sprinkle with garlic powder, Parmesan cheese and mozzarella cheese. Let rest while you preheat the oven to 350 degrees F (175 degrees C).
        In a large bowl, stir together the flour, salt and sugar. Pour in the yeast mixture along with the olive oil. Beat with a sturdy spoon until dough is stiff enough to pull away from the sides of the bowl. Cover, and set aside until doubled in size, about 35 minutes.
        Remove the dough from the bowl and knead briefly on a floured surface. Roll the dough out to 1/4 to 1/2 inch thickness or to the size of your baking sheet. Place on a greased baking sheet and spread butter over the top. Sprinkle with garlic powder, Parmesan cheese and mozzarella cheese. Let rest while you preheat the oven to 350 degrees F (175 degrees C).
        Bake for 20 minutes in the preheated oven, until golden brown and cheese is bubbly. Serve warm.`
    },
    {
        Author: "Ritu Dalmia ", 
        title: "Garlic Butter Steak",
        ingredients:  `1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping`,            
        instructions: `Preheat oven to 350 degrees F. Grease and flour a bundt cake pan.
        Combine sugar and eggs in a mixing bowl and use an electric mixer to mix for 1 minute. Add in flour and vanilla, then mix on medium speed for 8 minutes.
        Pour batter into cake pan and bake for 30-35 minutes, until a toothpick inserted comes out clean. (Cake will be very soft to the touch and register 200 degrees F on a thermometer.)
        Cool for 20-30 minutes, then invert onto a plate and cool completely.
        Serve with berries and cream or top with almond glaze, then berries.
        Preheat oven to 350 degrees F. Grease and flour a bundt cake pan.
        Combine sugar and eggs in a mixing bowl and use an electric mixer to mix for 1 minute. Add in flour and vanilla, then mix on medium speed for 8 minutes.
        Pour batter into cake pan and bake for 30-35 minutes, until a toothpick inserted comes out clean. (Cake will be very soft to the touch and register 200 degrees F on a thermometer.)
        Cool for 20-30 minutes, then invert onto a plate and cool completely.
        Serve with berries and cream or top with almond glaze, then berries.`
    },
    {   Author: "Janet Ross", 
        title: "Best Chicken Ever",
        ingredients:  `1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping`,            
        instructions: `In a cup or small bowl, sprinkle yeast over the surface of the lukewarm water. Let stand for 5 to 10 minutes to dissolve.
        In a large bowl, stir together the flour, salt and sugar. Pour in the yeast mixture along with the olive oil. Beat with a sturdy spoon until dough is stiff enough to pull away from the sides of the bowl. Cover, and set aside until doubled in size, about 35 minutes.
        Remove the dough from the bowl and knead briefly on a floured surface. Roll the dough out to 1/4 to 1/2 inch thickness or to the size of your baking sheet. Place on a greased baking sheet and spread butter over the top. Sprinkle with garlic powder, Parmesan cheese and mozzarella cheese. Let rest while you preheat the oven to 350 degrees F (175 degrees C).
        Bake for 20 minutes in the preheated oven, until golden brown and cheese is bubbly. Serve warm.In a cup or small bowl, sprinkle yeast over the surface of the lukewarm water. Let stand for 5 to 10 minutes to dissolve.
        In a large bowl, stir together the flour, salt and sugar. Pour in the yeast mixture along with the olive oil. Beat with a sturdy spoon until dough is stiff enough to pull away from the sides of the bowl. Cover, and set aside until doubled in size, about 35 minutes.
        Remove the dough from the bowl and knead briefly on a floured surface. Roll the dough out to 1/4 to 1/2 inch thickness or to the size of your baking sheet. Place on a greased baking sheet and spread butter over the top. Sprinkle with garlic powder, Parmesan cheese and mozzarella cheese. Let rest while you preheat the oven to 350 degrees F (175 degrees C).
        Bake for 20 minutes in the preheated oven, until golden brown and cheese is bubbly. Serve warm.In a cup or small bowl, sprinkle yeast over the surface of the lukewarm water. Let stand for 5 to 10 minutes to dissolve.
        . Roll the dough out to 1/4 to 1/2 inch thickness or to the size of your baking sheet. Place on a greased baking sheet and spread butter over the top. Sprinkle with garlic powder, Parmesan cheese and mozzarella cheese. Let rest while you preheat the oven to 350 degrees F (175 degrees C).
        Bake for 20 minutes in the preheated oven, until golden brown and cheese is bubbly. Serve warm.`
    },
    {
        Author:"Steven L",
        title: "Coconut-Vannila Cake",
        ingredients:  `1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping
        1 1/2 cups granulated sugar
        6 large eggs
        1 1/2 cups all-purpose flour
        2 tsp vanilla extract
        fresh berries & cream for topping`,            
        instructions: `In a cup or small bowl, sprinkle yeast over the surface of the lukewarm water. Let stand for 5 to 10 minutes to dissolve.
        In a large bowl, stir together the flour, salt and sugar. Pour in the yeast mixture along with the olive oil. Beat with a sturdy spoon until dough is stiff enough to pull away from the sides of the bowl. Cover, and set aside until doubled in size, about 35 minutes.
        Remove the dough from the bowl and knead briefly on a floured surface. Roll the dough out to 1/4 to 1/2 inch thickness or to the size of your baking sheet. Place on a greased baking sheet and spread butter over the top. Sprinkle with garlic powder, Parmesan cheese and mozzarella cheese. Let rest while you preheat the oven to 350 degrees F (175 degrees C).
        Bake for 20 minutes in the preheated oven, until golden brown and cheese is bubbly. Serve warm.In a cup or small bowl, sprinkle yeast over the surface of the lukewarm water. Let stand for 5 to 10 minutes to dissolve.
        In a large bowl, stir together the flour, salt and sugar. Pour in the yeast mixture along with the olive oil. Beat with a sturdy spoon until dough is stiff enough to pull away from the sides of the bowl. Cover, and set aside until doubled in size, about 35 minutes.
        until golden brown and cheese is bubbly. Serve warm.In a cup or small bowl, sprinkle yeast over the surface of the lukewarm water. Let stand for 5 to 10 minutes to dissolve.
        In a large bowl, stir together the flour, salt and sugar. Pour in the yeast mixture along with the olive oil. Beat with a sturdy spoon until dough is stiff enough to pull away from the sides of the bowl. Cover, and set aside until doubled in size, about 35 minutes.
        Remove the dough from the bowl and knead briefly on a floured surface. Roll the dough out to 1/4 to 1/2 inch thickness or to the size of your baking sheet. Place on a greased baking sheet and spread butter over the top. Sprinkle with garlic powder, Parmesan cheese and mozzarella cheese. Let rest while you preheat the oven to 350 degrees F (175 degrees C).
        Bake for 20 minutes in the preheated oven, until golden brown and cheese is bubbly. Serve warm.`
    }
];
const recipe = {    
    recipes,
    recipeList,
    users,
};
module.exports = recipe;