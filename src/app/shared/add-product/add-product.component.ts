import { ChangeDetectorRef, Component, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import {  FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest, Subscription } from 'rxjs';
import { DataService, SidebarService, api_Response,  routes } from 'src/app/core/core.index';


interface data {
  value: string;
}
// interface add_Form {
//   // SKU:string;
//   product : string;
//   brand: string;
//   category: string;
//   // createdBy:string;
//   // img1: string;
//   // img2:string;
//   // isSelected:false;
//   description:string;
//   itemCode:string | number;
//   // price:string | number ;
//   // qty:number;
//   // unit: string;
// }
export  interface product_Types {
  // data: [];
  SKU:string ;
  brand:string ;
  category:string;
  createdBy:string;
  img1: string;
  img2:string;
  isSelected:boolean;
  price:string;
  product:string;
  qty:string;
  sNo:number;
  unit: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  
  add_Product_Form!: FormGroup; 
  closeBtnName?: string;
  isCollapsed: boolean = false;
  value :unknown | string ;
  data! : api_Response;   // in this variable data comes from produt-list with the help of ngx bootstrap model  
  edit_Data!: product_Types;
  btn_Disable? : boolean  ;
  title?: string ;
  title1?:string ; 
  type!:string ; 
  form_data?: object;

  

  messages: string[] = [];

  subscriptions: Subscription = new Subscription();

  isProductVisible: boolean = true;
  isProductVisible1: boolean = true;
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';
  public selectedValue8 = '';
  public selectedValue9 = '';
  public selectedValue10 = '';
  public selectedValue11 = '';

  selectedList1: data[] = [
    { value: 'Choose' },
    { value: 'Thomas' },
    { value: 'Rasmussen' },
    { value: 'Fred john' },
  ];
  selectedList2: data[] = [
    { value: 'Choose' },
    { value: 'Legendary' },
    { value: 'Determined' },
    { value: 'Sincere' },
  ];
  // Category
  selectedList3: data[] = [
    { value: 'Choose' },
    { value: 'Laptop' },
    { value: 'Electronics' },
    { value:'Shoe'},
    { value:'Speaker'},
    { value:'Furnitures'},
    { value:'Bags'},
    { value:'Phone'},
    { value:'Chairs'},
  ];
  selectedList4: data[] = [
    { value: 'Choose' },
    { value: 'Lenovo' },
    { value: 'Electronics' },
  ];
  selectedList5: data[] = [
    { value: 'Choose' },
    { value: 'Fruits' },
    { value: 'Computers' },
    { value: 'Shoes' },
  ];
  // Brand
  selectedList6: data[] = [
    { value: 'Nike' },
    { value: 'Lenovo' },
    { value: 'Apple' },
    { value: 'Woodmart' },
    { value: 'Versace' },
    { value: 'Iphone' },
    { value: 'Bently' },
    { value: 'Bolt' },
  ];
  selectedList7: data[] = [
    { value: 'Choose' },
    { value: 'Kg' },
    { value: 'Pc' },
  ];
  selectedList8: data[] = [{ value: 'Exclusive' }, { value: 'Sales Tax' }];
  selectedList9: data[] = [
    { value: 'Choose' },
    { value: 'Percentage' },
    { value: 'Cash' },
  ];
  selectedList10: data[] = [
    { value: 'Choose' },
    { value: 'Percentage' },
    { value: 'Cash' },
  ];
  selectedList11: data[] = [
    { value: 'Choose' },
    { value: 'Code34' },
    { value: 'Code35' },
    { value: 'Code36' },
  ];
  selectedList12: data[] = [
    { value: 'Choose' },
    { value: 'Code34' },
    { value: 'Code35' },
    { value: 'Code36' },
  ];

  public event:EventEmitter<unknown> = new EventEmitter() 


  constructor( private sidebar: SidebarService ,
               private fb:FormBuilder,
               private modalService: BsModalService,
               public bsModalRef: BsModalRef,
               private data_s: DataService ,
               private changeDetection: ChangeDetectorRef
               
  ) { 
    this.add_Product_Form = this.fb.group({
      brand: ['',[Validators.required, ]],
      category: ['',[Validators.required]],
      product: ['',[Validators.required,Validators.maxLength(255)]],
      description: ['',[Validators.required,Validators.maxLength(255)]],
      itemCode: ['',[Validators.required,Validators.maxLength(255),]],
       
     }) 
   }

  ngOnInit() {
   
      //  this.triggerEvent(this.data)
    // this.openModal()


       this.add_Product_Form.patchValue({
        product :this.data.product,
        brand: this.data.brand,
        category: this.data.category,
  })
        console.log(this.data);

       
         console.log(this.type);
 
         if(this.type ==  "add") {
           console.log(this.type);
         }
         else {
          this.add_Product_Form.controls['category'].disable()
          this.add_Product_Form.controls['brand'].disable()
         }
  }

  //  triggerEvent(item :product_Types){
  //    this.event.emit(item)
  //    console.log(item);
      
  //        console.log(this.btn_Disable);
      

  //     //  this.data_s.getProductList().subscribe((apiRes:apiResultFormat) => {
  //     //   console.log(apiRes);
  //     //   console.log(this.data, typeof(this.data));
  //     //   console.log(apiRes.data);
  //     //   apiRes.data.map((new_Data :api_Response) => {
  //     //     console.log(new_Data.SKU, typeof(new_Data.SKU));
  //     //       //  const dataa : string = this.data
  //     //       //  const sku_data : string = new_Data.SKU
  //     //       //  console.log(dataa , sku_data);
  //     //       if( this.data == new_Data){
  //     //            console.log(this.data);
  //     //            console.log(new_Data);
  //     //             }
          
  //     //   })
  //     //  })
      
  //  } 
   
  
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }
  public image: boolean[] = [true, true, true];

  public removeImg(index: number) {
    this.image[index] = !this.image[index];
  }

  openModal(template: TemplateRef<void>){
    console.log(template);
   
  }

  submit( ){
    // this.openModal(template<void>)
    // console.log(template);
    if(this.add_Product_Form.valid){
       console.log(this.add_Product_Form.value);
       this.form_data 
       console.log(this.form_data);
       
       const _combine = combineLatest([
        this.modalService.onShow,
        this.modalService.onShown,
        this.modalService.onHide,
        this.modalService.onHidden
      ]).subscribe(() => this.changeDetection.markForCheck());
  
      console.log(_combine);
      this.subscriptions.add(
        this.modalService.onShow.subscribe(() => {
          this.messages.push(`onShow event has been fired`);
          console.log(this.messages);
        })
      );
    }
    else{
      this.add_Product_Form.markAllAsTouched()
    }
  }
}
