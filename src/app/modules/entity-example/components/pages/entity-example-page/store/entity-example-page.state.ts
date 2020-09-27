import { createEntityAdapter, EntityState } from '@ngrx/entity';


export const ENTITY_EXAMPLE_PAGE_STATE_SELECTOR_KEY = 'entityExamplePage';

/* Main data interface */
export interface ExampleEntity {
  id: number;
  name: string;
  selected: boolean
}


/* Entity Adapter */
export const exampleEntityAdapter = createEntityAdapter<ExampleEntity>()


export interface EntityExamplePageState {
  entities: EntityState<ExampleEntity>
};


const defaultExampleEntityState: EntityExamplePageState = {

  entities: {

    ids: [123],
    entities: {
      123: {
        id: 123,
        name: 'First example entity',
        selected: false
      }
    }
  }

};



export const initialState: EntityExamplePageState = exampleEntityAdapter.getInitialState(defaultExampleEntityState)
