import { Component, OnInit } from '@angular/core';
import {ApprenantsService} from "../../services/apprenants.service";
import {FormateursService} from "../../services/formateurs.service";
import {Formateur} from "../../models/formateur";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Apprenant} from "../../models/apprenant";

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  formateurs: Formateur[]=[];
  Search: string='';
  title = 'creer formateur';
   closeResult: string = '';
  formaddF! : FormGroup;
   nFormateur!: Formateur;

  constructor(private service:FormateursService,private modalService: NgbModal , public formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formaddF = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      lastname:    ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      tel: ["", [Validators.required]],
      password: ["", [Validators.required]],

      //  apprenant : new FormControl(apprenant);
    });
    this.getAllApp();
  }
  getAllApp(){
    this.service.getall().subscribe(
      data=>{
        this.formateurs=data;
        console.log(this.formateurs)

      },error => console.log(error)

    )
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSubmit(){
    this.nFormateur=this.formaddF.value;
    console.log(this.nFormateur)
    this.service.addF(this.nFormateur).subscribe(
      (data)=>{Swal.fire({title:"formateur ajouter avec succés",icon:"success"})
      this.modalService.dismissAll();
      this.getAllApp()
      },error => Swal.fire({title:"formateur deja existe",icon:"error"})

    )
  }


  get getformaddF(){
    return this.formaddF.controls;
  }
}
