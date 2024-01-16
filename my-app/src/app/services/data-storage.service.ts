import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipes.model";
import { RecipeService } from "./recipe.service";
import { map, take, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://ng-complete-guide-59119-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-complete-guide-59119-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
        .pipe(map(recipes => {
            return recipes.map(r => {
                return {...r, ingredients: r.ingredients ? r.ingredients : []}
            });
        }), tap(recipes => {
            this.recipeService.setRecipes(recipes);
        }));
    }
}