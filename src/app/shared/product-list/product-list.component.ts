import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  DataService,
  pageSelection,
  apiResultFormat,
  routes,
  SidebarService,
  api_Response,
  apiResultasyncpipe,
} from 'src/app/core/core.index';
import {  productList } from 'src/app/shared/model/page.model';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import Swal from 'sweetalert2';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { AddProductComponent } from '../add-product/add-product.component';
import {  Observable } from 'rxjs';
// import { ProductRoutingModule } from '../product-routing.module';

// interface asyncData {
//   data: {
//     product: string;
//     SKU: string;
//     category: string;
//     brand: string;
//     price: string;
//     unit: string;
//     qty: string;
//     createdBy: string;
//     isSelected: boolean;
//     img1: string;
//     img2: string;
//     sNo:number
//   }[]; 
//   // data: [];
//   SKU: string;
//   brand: string;
//   category: string;
//   createdBy: string;
//   img1: string;
//   img2: string;
//   isSelected: boolean;
//   price: string;
//   product: string;
//   qty: string;
//   sNo: number;
//   unit: string;
//   // id: string
// }

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  bsModalRef?: BsModalRef;
  id: boolean = false;
  // edit_Data!: asyncData;
  produt_List?: productList;

  // Observable variable for async pipe
  table_Data$!: Observable<apiResultasyncpipe>;


  initChecked = false;
  selectedValue1 = '';
  selectedValue2 = '';
  selectedValue3 = '';
  selectedValue4 = '';
  selectedValue5 = '';
  selectedValue6 = '';
  selectedValue7 = '';
  selectedValue8 = '';
  selectedValue9 = '';
  selectedValue10 = '';
  selectedValue11 = '';
  selectedValue12 = '';
  selectedValue13 = '';
  selectedValue14 = '';
  selectedValue15 = '';
  selectedValue16 = '';
  selectedValue17 = '';
  selectedValue18 = '';
  selectedValue19 = '';
  selectedValue20 = '';
  selectedValue21 = '';
  selectedValue22 = '';
  selectedValue23 = '';
  selectedValue24 = '';
  selectedValue25 = '';
  selectedValue26 = '';

  public routes = routes;
  // pagination variables
  public tableData: Array<api_Response> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<api_Response>;
  public searchDataValue = '';
  //** / pagination variables

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private router: Router,
    private sidebar: SidebarService,
    private modalService: BsModalService
  ) {
    this.data.getDataTable().subscribe((apiRes: apiResultFormat) => {
      this.totalData = apiRes.totalData;
      console.log(apiRes);
      console.log(this.totalData);
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.productList) {
          this.getTableData({
            skip: res.skip, limit: this.totalData,
           
          });
          this.pageSize = res.pageSize;
        }
      });
    });

    this.data.getProductList().subscribe((apiRes: apiResultFormat) => {
      console.log(apiRes);
      console.log(apiRes.data);
      const new_data = apiRes
      console.log(new_data);

    })

    this.table_Data$ = this.data.getProductList()
    // .pipe(
    //   map((res:asyncData) => {
    //     console.log(res);
    //     return res
    //   })
    // )

    console.log(this.table_Data$);
  }

  ngOnInit():void {
    console.log();
  }

  //this mehtod for edit form
  openModalWithComponent(SKU: api_Response):void {
    console.log(SKU);
   

    const initialState: ModalOptions = {
      initialState: {
        type: "edit",
        title: 'Edit Product',
        data: SKU,
        btn_Disable: true,
      },
      class: 'modal-lg',
    };
    this.bsModalRef = this.modalService.show(AddProductComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';

    this.bsModalRef.onHidden?.subscribe((response) => {
      console.log("oooooooo");
      console.log(response);
      console.log("oooooooo");

    }) 
    // return initialState
  }

  // This method for Add form
  openModalWithComponent_For_AddForm(id: boolean) {
    console.log(id);

    const initialState: ModalOptions = {
      initialState: {
        type: "add",
        title1: 'Add Product',
        form_data: null,
       
      },
      class: 'modal-lg',
    };
    this.bsModalRef = this.modalService.show(AddProductComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  private getTableData(pageOption: pageSelection):void {
    this.data.getProductList().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      console.log(apiRes);
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      console.log(this.totalData);
      apiRes.data.map((res: api_Response, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<api_Response>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  public filter = false;
  openFilter() {
    this.filter = !this.filter;
  }
  confirmColor() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: ' btn btn-success',
        cancelButton: 'me-2 btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        confirmButtonText: 'Yes, delete it!',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  }
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
}
