import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyComponent } from './shared/components/dummy/dummy.component';
import { DirectiveDirective } from './shared/directives/directive.directive';
import { PipePipe } from './shared/pipes/pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    DirectiveDirective,
    PipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
