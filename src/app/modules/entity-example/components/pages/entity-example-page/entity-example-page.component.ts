import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Selectors from './store/entity-example-page.selectors';
import { ExampleEntity } from './store/entity-example-page.state';
import * as Actions from './store/entity-example-page.actions';

@Component({
  selector: 'app-entity-example-page',
  templateUrl: './entity-example-page.component.html',
  styleUrls: ['./entity-example-page.component.scss']
})
export class EntityExamplePageComponent implements OnInit {


  public entities$: Observable<ExampleEntity[]>


  constructor(
    public store$: Store<any>
  ) {
  }


  ngOnInit(): void {
    this.entities$ = this.store$.select(Selectors.selectAll)
  }


  addEntity(): void {
    const newEntity: ExampleEntity = {
      id: Math.floor(Math.random() * 10000),
      name: Math.random().toString(36).substring(7),
      selected: false
    }
    this.store$.dispatch(Actions.CREATE({entity: newEntity}))
  }


  updateEntity(entry: ExampleEntity): void {
    this.store$.dispatch(Actions.UPDATE({changes: {...entry, selected: !entry.selected}}))
  }


  deleteEntity(entry: ExampleEntity): void {
    this.store$.dispatch(Actions.DELETE({id: entry.id }))
  }
}
