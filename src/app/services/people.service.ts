import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';
import { Person } from '../models/person.model';


/**
  * ==== Service People ====
  * allPeople(
  * after: String
  * first: Int
  * before: String
  * last: Int
  * ): 
  * return PeopleConnection  IS  people list type:Person
 */

@Injectable({
  providedIn: 'root'
})


export class PeopleService {

  constructor(private apollo: Apollo) { }


/** Description:
 * Total of Personas.
 */
public getAllPeople() {
    const GET_PEOPLE = gql`
    query people {
      allPeople {
        people {
          id
          name
          gender
          skinColor
        }
      }
    }`;
    return this.apollo.watchQuery<any>({
      query: GET_PEOPLE,
      variables: { pageSize: 5 },
    }).valueChanges;
}



/**
 * @param block size persons for block / cantidad de personas por bloque
 * 2021/01/23 Patrick Rodriguez
 */

public getPeoplebyBlock(block:any=5) {
  const GET_PEOPLE = gql`
  query people($first: Int) {
    allPeople(first: $first) {
      people {
        id
        name
        gender
        skinColor
      }
    }
  }
`;

  return this.apollo.watchQuery<any>({
    query: GET_PEOPLE,
    variables: {
      first: block
    },
  }).valueChanges;
}



}

