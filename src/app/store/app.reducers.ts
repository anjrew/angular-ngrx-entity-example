import { ActionReducerMap } from '@ngrx/store';
import { entityExamplePageReducer } from '../modules/entity-example/components/pages/entity-example-page/store/entity-example-page.reducer';
import { AppState } from './app.state';





export const reducers: ActionReducerMap<AppState> = {
  entityExamplePage: entityExamplePageReducer
}
