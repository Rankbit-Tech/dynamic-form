
## What we have to build

- Routing for home page and builder page.
- `/` for home and `/builder/:id`. every form has unique ID.
- Create Droppable area where we can drop input types.
- Every dropped input will be stored in state with schema.
- Give options to config input with lable,helperText (Error) and validation.
- It should be included TextFields, CheckBox, Radio and select inputs.
- At the home page give button to create new form. and also list existing forms. (we can also generate link of forms to fill and store every response of perticular form).

## input schema

```javascript
{
    id:123,
    type:"TextField",
    extraAttributes:{
        label,
        helperText,
        required,
        placeholder
    }
}

```