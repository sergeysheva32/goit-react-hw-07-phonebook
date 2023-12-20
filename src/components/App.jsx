import { Wrapper } from './Wrapper';
import { GlobalStyle } from './GlobalStyle';
import { useEffect } from 'react';
import { Section } from './Section';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';

import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Wrapper>
      <Section title="Add contact">
        <ContactForm />
      </Section>
      
      {contacts.length > 0 && 
        <Section title="Contacts" headerContent={<Filter />}>
          <ContactList />
        </Section>
      }

      <GlobalStyle />
    </Wrapper>
  );
};
