import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-chef-dashboard',
  templateUrl: './chef-dashboard.component.html',
  styleUrls: ['./chef-dashboard.component.css']
})
export class ChefDashboardComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

}
