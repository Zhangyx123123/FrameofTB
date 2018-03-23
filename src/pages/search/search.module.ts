import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    SearchPage,
  ],
  providers: [SearchService],
  imports: [
    IonicPageModule.forChild(SearchPage),
  ],
})
export class SearchPageModule {}
