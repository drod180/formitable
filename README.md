## Minimum Viable Product

WooFu is a web application inspired by WuFoo built using Ruby on Rails
and React.js. WooFu allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create and edit forms in form creator
- [ ] View and delete forms in form manager
- [ ] Host form with unique URL


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

####[Phase 1][phase-one]
### Phase 1: Backend setup and User Authentication (.5 day)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

####[Phase 2-3][phase-two-three]
### Phase 2: Flux Architecture and Form CRUD (1.5 days)

**Objective:** Forms can be created, read, edited and destroyed through
the API.

- [ ] create `Form` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`FormsController`)
- [ ] jBuilder and HTML views for forms
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Forms can be created, read, updated and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each form component, building out the flux loop as needed.
  - [ ] `FormManager`
  - [ ] `FormManagerSearch`
  - [ ] `FormManagerFilters`
  - [ ] `FormsIndex`
  - [ ] `FormsIndexItems`
  - [ ] `FormCreator`
  - [ ] `FormCreatorButtons`
  - [ ] `FormCreatorSettings`

- [ ] save Forms to the DB when submitted

### Phase 4: Start Styling (1 day)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

####[Phase 5-6][phase-five-six]
### Phase 5: Flux Architecture and Fields CRUD (1.5 day)

**Objective:** Fields can be created, read, edited and destroyed through
the API.

- [ ] create `Field` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`FieldsController`)
- [ ] jBuilder and HTML views for fields
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 6: Flux Architecture and Router (1.5 days)

**Objective:** Forms can be read and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each field component, building out the flux loop as needed.
  - [ ] `FieldCreatorButtons`
  - [ ] `FieldCreatorSettings`
  - [ ] `FieldItemsindex`
  - [ ] `FieldItems`
- [ ] save fields to the DB when form is saved

####[Phase 7][phase-seven]
### Phase 7: Setup Search and Filtering for Forms (.5 Day)

**objective:** Enable searching and filtering in form manager

- [ ] Add reactive search bar that searches based on form title.
- [ ] Add filter functionality to last updated/creation date buttons

### Phase 8: Allow Swapping Fields Order (.5 day)

**objective:** Enable complex behavior of fields in forms.

- [ ] Add drag and drop functionality to fields.


### Phase 9: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.
- [ ] Add more field options.


### Bonus Features (TBD)
- [ ] Add an entries component
- [ ] Add a style component

[phase-one]: ./docs/phases/phase1.md
[phase-two-three]: ./docs/phases/phase2-3.md
[phase-five-six]: ./docs/phases/phase5-6.md
[phase-seven]: ./docs/phases/phase7.md
