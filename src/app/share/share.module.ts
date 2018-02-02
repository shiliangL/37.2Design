
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

// https://angular.io/styleguide#!#04-10
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    providers: [],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        HttpClientModule
    ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class ShareModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShareModule
        };
    }
}
