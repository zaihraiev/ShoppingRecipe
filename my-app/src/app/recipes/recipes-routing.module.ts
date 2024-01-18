import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RouterModule, Routes } from "@angular/router";
import { RecipeResolverService } from "../services/recipe-resolver.service";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";

const routes: Routes = [
    { 
        path: '', 
        component: RecipesComponent, 
        canActivate: [AuthGuard],
        children: [
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipesDetailComponent, resolve: [RecipeResolverService]},
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}