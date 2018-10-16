import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { SupplyChainComponent } from './supply-chain/supply-chain.component'
import { ArtWorkSummaryComponent } from './supply-chain/art-work-summary.component'
import { State } from './supply-chain/state'
import { ArtWorkEditionComponent } from './supply-chain/art-work-edition.component'
import { ArtWorkIconComponent } from './supply-chain/art-work-icon.component'

@NgModule({
  declarations: [
    AppComponent,
    SupplyChainComponent,
    ArtWorkSummaryComponent,
    ArtWorkEditionComponent,
    ArtWorkIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    State
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
