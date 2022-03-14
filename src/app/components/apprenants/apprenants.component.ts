import { Component, OnInit } from '@angular/core';
import {ApprenantsService} from "../../services/apprenants.service";
import {Apprenant} from "../../models/apprenant";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})
export class ApprenantsComponent implements OnInit {
  public apprenants: Apprenant[]=[];
  Search:string="";
  title = 'creer apprenant';
  nApprenant!:Apprenant;
  closeResult: string = '';


  formaddApp! : FormGroup;

  constructor(private router : Router,
    private service:ApprenantsService,
    private modalService: NgbModal ,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {

     this.formaddApp = this.formBuilder.group({
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
        this.apprenants=data;
        console.log(this.apprenants)

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
    this.nApprenant=this.formaddApp.value;
  console.log(this.nApprenant)
    this.service.addApp(this.nApprenant).subscribe(
      (data)=>{Swal.fire({title:"apprenant ajouter avec succés",icon:"success"});
      this.modalService.dismissAll();
      this.getAllApp()
      },error => Swal.fire({title:"apprenant deja existe",icon:"error"})

    )
  }


  get getformaddApp(){
    return this.formaddApp.controls;
  }

  go(id:any) {
    console.log(id)
    this.router.navigate(['comptApp/'+id])
  }
}
