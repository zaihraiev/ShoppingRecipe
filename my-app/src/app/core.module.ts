import { NgModule } from "@angular/core";
import { ShoppingListService } from "./services/shopping-list.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipeService } from "./services/recipe.service";

@NgModule({
    providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}]
})
export class CoreModule{}