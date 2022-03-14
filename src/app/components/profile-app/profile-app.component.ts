import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apprenant } from 'src/app/models/apprenant';
import { ApprenantsService } from 'src/app/services/apprenants.service';
 
@Component({
  selector: 'app-profile-app',
  templateUrl: './profile-app.component.html',
  styleUrls: ['./profile-app.component.css']
})
export class ProfileAppComponent implements OnInit {
  id: any;
  apprenant!: Apprenant;

  constructor(private route:ActivatedRoute,private  service: ApprenantsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
   this.service.getById(this.id).subscribe(
      data=>{
        this.apprenant=data;

        console.log(this.apprenant);
        
      }
    )


  }

}
