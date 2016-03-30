# Phase 2 - 3:

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* FormManager
  - FormManagerSearch
  - FormManagerFilters
  - FormsIndex
    - FormsIndexItems

### Stores
* Form

### Actions
* ApiActions.recieveFormsForUser -> triggered by ApiUtil
* ApiActions.recieveSingleForm
* ApiActions.removeFormFormUser
* ApiActions.createNewFormForUser
* FormAction.createForm -> triggers ApiUtil
* FormAction.removeForm
* FormAction.editForm

### ApiUtil
* ApiUtil.fetchAllForms
* ApiUtil.fetchSingleForm
* ApiUtil.createNote
* ApiUtil.editNote
* ApiUtil.destroyNote

## Gems/Libraries
* Flux Dispatcher (npm)
