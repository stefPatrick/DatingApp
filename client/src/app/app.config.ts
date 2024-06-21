import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

export const appConfig:ApplicationConfig=
{
    providers: [
        provideRouter(routes),
        importProvidersFrom(FormsModule, BrowserModule, FormsModule, BsDropdownModule.forRoot()),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
}