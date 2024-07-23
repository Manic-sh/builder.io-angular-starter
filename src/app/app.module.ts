import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BuilderModule, BuilderService } from "@builder.io/angular";
import { HttpClientModule } from "@angular/common/http"; // Import HttpClientModule

import { AppComponent, CustomThing } from "./app.component";
import { FooComponent } from "./foo.component";
import { CustomThingChildren } from "./with-children";
@NgModule({
  declarations: [AppComponent, FooComponent, CustomThing, CustomThingChildren],
  entryComponents: [CustomThing, CustomThingChildren],
  imports: [
    BrowserModule,
    HttpClientModule,
    BuilderModule.forRoot("a54c9ecf97f8469b9d9611d82580d299"),
    RouterModule.forRoot([
      {
        path: "**",
        component: FooComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(builder: BuilderService) {
    builder.autoTrack = true;
  }
}
