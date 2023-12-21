import { AiOutlineUserAdd } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  LabelContainer,
  Label,
  InputContainer,
  Input,
  Button,
} from './ContactForm.styled';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const id = nanoid();
    const newContact = { id, name, number };
    const form = e.target;
    form.reset();
    if (
      contacts.find(contact => contact.name.toLowerCase() ===
        name.toLowerCase())
    ) {
      alert(`${newContact.name} already exists!`);
    } else {
      dispatch(addContact(newContact));
      }

  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <LabelContainer>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={contacts.name}
            onChange={e => setName(e.target.value)}
            required
          ></Input>
          <Label htmlFor="name"></Label>
        </LabelContainer>

        <LabelContainer>
          <Input
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={contacts.number}
            onChange={e => setNumber(e.target.value)}
          ></Input>
          <Label></Label>
        </LabelContainer>
      </InputContainer>
      <Button type="submit">
        <AiOutlineUserAdd />
        Add contact
      </Button>
    </Form>
  );
};