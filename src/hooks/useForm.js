import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  const reset = () => {
    setFormState(initialState);
  };

  return { formState, handleInputChange, reset, ...formState };
};
