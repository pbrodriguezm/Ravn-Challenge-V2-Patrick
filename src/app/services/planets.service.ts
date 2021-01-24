import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Planets } from '../models/planets.model';
import gql from 'graphql-tag';


interface allPlanets {
  planets: Planets;
}

interface Response {
  allPlanets : {
    Planets: Planets[];
  }
  
}


@Injectable({
  providedIn: 'root'
})
export class PlanetsService  {
  constructor(private apollo: Apollo) { }


/** Description:
 * Total of planets SW.
 * Funci{on que descarga total de planetas}
 */
public getAllPlanets() {
    const GET_PLANETS = gql`
    query planets {
      allPlanets {
        planets {
          id
          name
        }
      }
    }`;
    return this.apollo.watchQuery<any>({
      query: GET_PLANETS,
      variables: { pageSize: 5 },
    }).valueChanges;
}

public getPlanet(id: any) {
  const GET_PLANET = gql`
  query planets($first: Int) {
    allPlanets(first: $first) {
      planets {
        id
        name
      }
    }
  }
`;

//
  return this.apollo.watchQuery<any>({
    query: GET_PLANET,
    variables: {
      first: 10 
    },
  }).valueChanges;
}



}

