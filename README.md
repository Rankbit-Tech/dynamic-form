
## What we have to build

1.Routing for home page and builder page.
2. `/` for home and `/builder/:id`. evert from has unique ID.
3.Create Droppable area where we can drop input types.
4.Every dropped input will be stored in state with schema.
5.Give options to config input with lable,helperText (Error) and validation.
6. It should be included TextFields, CheckBox, Radio and select inputs.
7.At the home page give button to create new form. and also list existing forms. (we can also generate link of forms to fill and store every response of perticular form).

## input schema

```json
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