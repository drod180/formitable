# Schema Information

## forms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
public      | boolean   | not null, default: true

## fields
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null
label       | string    | not null
form_rank_id| integer   | not null
form_id     | integer   | not null, foreign key (references forms), indexed
option      | string    |

## multiChoice
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, default: false
selected    | boolean   | not null
field_id    | integer   | not null, foreign key (references forms), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
