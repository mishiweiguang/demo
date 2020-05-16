import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {WyPlayerModule} from './share/wy-ui/wy-player/wy-player.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    WyPlayerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
