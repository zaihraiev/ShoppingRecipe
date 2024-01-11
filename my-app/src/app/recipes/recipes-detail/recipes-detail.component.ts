import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../../services/recipe.service';
import { Ingredient } from '../../shared/Ingredient.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.scss'
})
export class RecipesDetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  sendIngredientsToShoppingList(ingredients: Ingredient[]){
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }
}
