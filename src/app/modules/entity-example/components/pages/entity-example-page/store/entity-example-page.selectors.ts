import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityExamplePageState, ENTITY_EXAMPLE_PAGE_STATE_SELECTOR_KEY, exampleEntityAdapter } from './entity-example-page.state';

export const getExampleEntityPageState = createFeatureSelector<EntityExamplePageState>(ENTITY_EXAMPLE_PAGE_STATE_SELECTOR_KEY)

export const getExampleEntities =  createSelector(
  getExampleEntityPageState,
  (state) => state.entities
)

/* Extract the selectors from the Entity adapter */
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
  }  = exampleEntityAdapter.getSelectors(getExampleEntities)
