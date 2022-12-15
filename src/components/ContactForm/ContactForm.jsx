import { useState } from 'react';
import {
  Input,
  Form,
  Label,
  Button,
  Section,
  Title,
  FormField,
} from './ContactForm.styled';
import { addContact } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      alert(`${name} is already in contact`);
    else {
      return dispatch(addContact({ name, number }));
    }
  };

  return (
    <Section>
      <Title>PhoneBook</Title>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
          <Label>Name</Label>
        </FormField>
        <FormField>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
          <Label>Number</Label>
        </FormField>
        <FormField>
          <Button type="submit">Add Contact</Button>
        </FormField>
      </Form>
    </Section>
  );
};

export default ContactForm;
