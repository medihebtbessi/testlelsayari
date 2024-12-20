import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  stageForm ! : FormGroup;
  addStage(){
    console.log(this.stageForm.value);
    this.service.addProd(this.stageForm.value).subscribe({
      next:(res=>{

      })
    });
  }

  constructor(private fb:FormBuilder,private service:ProductsService) {
  }
  ngOnInit(): void {
    this.stageForm=this.fb.group({
      id:[null,[Validators.required]],
      name:[''],
      description:['',[Validators.required]],
      price:[0,[Validators.min(0)]],
      available:[true],
      likes:[[]]
    })
  }

}
