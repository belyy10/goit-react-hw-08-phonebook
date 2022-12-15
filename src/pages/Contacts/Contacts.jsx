import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operation';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Container, ContactsContainer } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contact = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <ContactsContainer>
        {contact.length > 0 ? (
          <>
            <h1>Contacts</h1>
            <Filter />
          </>
        ) : (
          <div>
            <img
              src="https://d3pbdh1dmixop.cloudfront.net/readdle/Blog/transfer-contacts-from-iphone-to-iphone/transfer%20contacts%20from%20iphone%20to%20iphone.png"
              alt="addContact"
              width={320}
              height={250}
            />
            <h3>Add new Contact</h3>
          </div>
        )}
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
      </ContactsContainer>
    </Container>
  );
}
