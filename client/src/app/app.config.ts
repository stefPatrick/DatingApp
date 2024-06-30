import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { RouterModule, provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ToastrModule, provideToastr } from "ngx-toastr";
import { errorInterceptor } from "./interceptors/error.interceptor";

export const appConfig:ApplicationConfig=
{
    providers: [
        provideRouter(routes),
        importProvidersFrom(ToastrModule.forRoot(), FormsModule, BrowserModule, FormsModule, BsDropdownModule.forRoot(),RouterModule),
        provideHttpClient(withInterceptors([errorInterceptor])),
        provideAnimations(),
        provideToastr({
            positionClass: 'toast-bottom-right'
        }
        )
    ]
}