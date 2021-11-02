import { Injectable } from '@angular/core';
import {Item} from "../dto/item";
import {Observable} from "rxjs";
import {DUMMY_DATA} from "../dummy-data";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAllItems(): Array<Item>{
    return DUMMY_DATA;
  }
}
