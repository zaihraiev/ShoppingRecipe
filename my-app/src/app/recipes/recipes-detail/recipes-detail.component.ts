import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.scss'
})
export class RecipesDetailComponent {
  @Input() recipe: Recipe;
}
