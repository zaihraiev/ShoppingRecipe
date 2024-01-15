import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss',
})
export class RecipesListComponent implements OnInit, OnDestroy{
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
