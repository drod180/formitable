# Phase 5-6:

## Rails
### Models
* Fields

### Controllers
* Api::FieldsController (create, destroy, index, show, update)

### Views
* fields/index.json.jbuilder
* fields/edit.json.jbuilder

## Flux
### Views (React Components)
* FormCreator
  - FormCreatorButtons
  - FieldCreatorButtons
  - FieldCreatorSettings
  - FormCreatorSettings
  - FieldItemsindex
    - FieldItems


### Stores
* Field

### Actions
* ApiActions.recieveAllFieldsForForm -> triggered by ApiUtil
* ApiActions.recieveFieldForForm
* ApiActions.createFieldForForm
* ApiActions.removeFieldFromForm
* ApiActions.updateField
* FieldActions.fetchAllFields -> triggers ApiUtil
* FieldActions.fetchSingleField
* FieldActions.createField
* FieldActions.updateField
* FieldActions.destroyField

### ApiUtil
* ApiUtil.recieveAllFieldsForForm
* ApiUtil.recieveFieldForForm
* ApiUtil.createFieldForForm
* ApiUtil.removeFieldFromForm
* ApiUtil.updateField


## Gems/Libraries
