import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { PlanetsService } from './services/planets.service';
import { PeopleService } from './services/people.service';
import { Person } from './models/person.model';


interface allPlanets {
  planets: Planets;
}


interface Planets {
  id: string;
  name: string;
}

interface Response {
  allPlanets : {
    Planets: Planets[];
  }
  
}

const GET_PLANETS = gql`
query planets {
  allPlanets {
    planets {
      id
      name
    }
  }
}
`;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ravn-Challenge-V2-Patrick';
  panelOpenState = false; 
  peoples:Person[]=[];
  loading:boolean=false;

  constructor(
    private apollo: Apollo,
    protected planetsService:PlanetsService,
    protected peopleService:PeopleService
    ) {}

  ngOnInit(): void {
    this.getAllPeople();
    this.loading=true;
    
  }

  public getPlanets() {
    this.planetsService.getAllPlanets().subscribe((data) => {
      console.log(data, data.data);
    });
  }
  

  public getPlanet(id:any) {
    this.planetsService.getPlanet(id).subscribe((data) => {
      console.log(data, data.data);
    });
  }

  public getAllPeople() {
    this.loading=true;
    this.peopleService.getPeoplebyBlock(5).subscribe((data) => {
      this.peoples=data.data.allPeople.people;
      this.loading=false;
    });
  }

}
