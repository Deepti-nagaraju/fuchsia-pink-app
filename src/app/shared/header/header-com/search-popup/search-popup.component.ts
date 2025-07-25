import { Component } from '@angular/core';
import { Router } from '@angular/router';
import category_data from '../../../data/category-data';
import { UtilsService } from '../../../services/utils.service';
import { ICategoryType } from '../../../types/category-d-t';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule ,FormsModule],
  selector: 'app-search-popup',
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.scss']
})
export class SearchPopupComponent {

  public searchText: string = '';
  public productType: string = '';
  constructor (public utilsService:UtilsService,private router: Router){};


   // Get all the children from the category_data array
   public allChildren: string[] = category_data.reduce((children: string[], category: ICategoryType) => {
    if (category.children && category.children.length > 0) {
      children.push(...category.children);
    }
    return children;
  }, []);

  // Create a new unique children array
  public uniqueChildren = [...new Set(this.allChildren)];

  handleProductType(productType: string) {
    if(productType === this.productType){
      this.productType = '';
    }
    else {
      this.productType = productType;
    }
  }

  handleSearchSubmit() {
    const queryParams: { [key: string]: string | null } = {};
    if(!this.searchText && !this.productType){
      return
    }
    else {
      if (this.searchText) {
        queryParams['searchText'] = this.searchText.split(' ').join('-').toLowerCase();
      }
      if (this.productType) {
        queryParams['productType'] = this.productType;
      }
      this.router.navigate(['/shop/search'], { queryParams });
    }
  }
}
