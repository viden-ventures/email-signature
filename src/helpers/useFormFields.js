import { useState } from "react";
import LocalStorage from './LocalStorage';

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      LocalStorage.setItem(event.target.id, event.target.value);
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}