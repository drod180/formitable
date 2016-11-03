# Formitable

Formitable is a web application that allows you to build custom forms. It is a clone of certain features of the Wufoo web application and uses Rails and React.js. You can find the site at www.form-i-table.com.

Make some forms at [form-i-table.com](http://www.form-i-table.com/)

###Login View:

![login]

###Manager View:

![manager]

###Builder View:

![builder]

###Technical Details:
* Formitable's form builder had two components that needed to work in concert. The [sidebar](./frontend/components/builder/builder_options.jsx) and the [form builder view](./frontend/components/builder/form_building_view.jsx). These components had to manage the forms, fields and choices data on the front end until the form was saved. This allowed for a user to exit out of the form without saving as a way to cancel any changes they made. Also, any changes made to the sidebar [field settings](./frontend/components/builder/field_settings.jsx) had to also update the fields in the form builder view. This required careful management of form_rank_id values for the fields and field_rank_id values for the choices. As a result the stores had to keep track of the id values and update them accordingly if ever one was deleted.

ex.

```javascript
function _removeField(field) {
	var removed = false;
	for (var i = 0; i < _fields.length; i++){
		if (removed) { _fields[i].form_rank_id--; }
		if (!removed && _fields[i].form_rank_id === field.form_rank_id) {
			removed = true;
      if (_fields[i].id) {
        _fieldIdsToDelete.push(_fields[i].id);
      }
			_fields.splice(i, 1);
			 i--;
		}
	}
```

###Features
* Sign up/in with email
* Form manager shows all the forms your account has built
* Can edit or delete any forms
* Can create any new forms
* Any number for fields can be added to a form
* Field type can be change if they have not been saved
* Field option (size/layout) can be modified
* Mulit-choice fields can have more choices added or removed
* Changes do not save unless form is saved

## To-Do:

- [X] Create viewable forms
- [ ] Host forms with unique URL
- [ ] OmniAuth
- [ ] PG Search
- [ ] Add User account page
- [ ] Allow for image upload for user account page

####[Original Design Docs][original-readme]
[original-readme]: ./original_design_doc.md


[login]: ./docs/images/login_page.png
[manager]: ./docs/images/form_manager.png
[builder]: ./docs/images/form_builder.png
