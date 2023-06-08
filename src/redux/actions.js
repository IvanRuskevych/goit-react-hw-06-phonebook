import { nanoid } from 'nanoid';
import { ACTION_TYPE } from './constants';

export const getFilterValue = value => {
  return {
    type: ACTION_TYPE.getFilterValue,
    payload: value,
  };
};

export const addContacts = (name, number) => {
  console.log(name);
  console.log(number);
  return {
    type: ACTION_TYPE.addContacts,
    pyaload: { id: nanoid(5), name, number },
  };
};

export const deleteContacts = contactId => {
  return {
    type: ACTION_TYPE.deleteContacts,
    payload: contactId,
  };
};
//
