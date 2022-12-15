import { List, Item, Button } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter);
  });

  return (
    <List>
      {filterContacts.map(({ id, number, name }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>
          <Button
            type="button"
            onClick={e => {
              dispatch(deleteContact(id));
            }}
          >
            Delete contact
          </Button>
        </Item>
      ))}
    </List>
  );
};
