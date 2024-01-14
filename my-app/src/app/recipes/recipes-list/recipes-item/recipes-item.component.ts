import { Component, Input} from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.scss'
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
}
