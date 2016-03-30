# Flux Stores

### FormStore

Holds persisted form data for a user

##### Actions:
- `recieveFormsForUser`
- `recieveSingleForm`
- `createNewFormForUser`
- `removeFormFormUser`

##### Listeners:
- `FormsIndex`
- `FormCreator`

### FieldStore

Holds persisted data about each field for a form

##### Actions:
- `recieveAllFieldsForForm`
- `recieveFieldForForm`
- `createFieldForForm`
- `removeFieldFromForm`
- `updateField`

##### Listeners:
- `FieldItems`
- `FieldCreatorSettings`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `FormManagerSearch`
