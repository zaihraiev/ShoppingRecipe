import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipes.model";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService) {}

    // private recipes: Recipe[] = [
    //     new Recipe("Test1", 
    //     "TestDesc1", 
    //     "https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg",
    //     [ new Ingredient('Meat', 1), new Ingredient('French fries', 20)]),
    //     new Recipe("Test2", 
    //     "TestDesc2", 
    //     "https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg",
    //     [ new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    //     )
    //   ];
    private recipes: Recipe[] = [];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
 }