import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';

import { ShareModule } from "../share/share.module";
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        NgZorroAntdModule,
        ShareModule
    ],
    providers: [],
    declarations: [
        LayoutComponent,
        HeaderComponent,
    ],
    exports: [
        LayoutComponent,
        HeaderComponent
    ]
})
export class LayoutModule { }
