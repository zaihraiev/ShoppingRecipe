import { Component, Input} from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.scss'
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
