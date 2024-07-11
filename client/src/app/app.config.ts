import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { RouterModule, provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ToastrModule, provideToastr } from "ngx-toastr";
import { errorInterceptor } from "./_interceptors/error.interceptor";
import { jwtInterceptor } from "./_interceptors/jwt.interceptor";
import { NgxSpinnerModule } from "ngx-spinner";
import { loadingInterceptor } from "./_interceptors/loading.interceptor";

export const appConfig:ApplicationConfig=
{
    providers: [
        provideRouter(routes),
        importProvidersFrom(ToastrModule.forRoot(), FormsModule, BrowserModule, FormsModule,
         BsDropdownModule.forRoot(),RouterModule,NgxSpinnerModule),
        provideHttpClient(withInterceptors([errorInterceptor,jwtInterceptor,loadingInterceptor])),
        provideAnimations(),
        provideToastr({
            positionClass: 'toast-bottom-right'
        }
        )
    ]
}