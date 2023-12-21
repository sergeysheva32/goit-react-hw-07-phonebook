import { FaTrashAlt, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading, getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

import {
  ListIcon,
  ListBtn,
  ContactsTable,
  ContactsTableHead,
  ContactsTableRow,
  ContactsTableCeil,
  ContactsFlexCeil,
  Loading,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

    const filteredContacts = getFilteredContacts();


  return (
    <>
        <ContactsTable>
          <thead>
            <tr>
              <ContactsTableHead>Name</ContactsTableHead>
              <ContactsTableHead>Phone number</ContactsTableHead>
              <ContactsTableHead>
                Contacts ({contacts.length})
              </ContactsTableHead>
            </tr>
          </thead>

          <tbody>
          {isLoading ? (<Loading>Loading...</Loading>) : (<>

            {filteredContacts.map(contact => (
              <ContactsTableRow key={contact.id}>
              <ContactsFlexCeil>
                <ListIcon>
                  <FaUser size="20" color="white" />
                </ListIcon>
                {contact.name}
              </ContactsFlexCeil>
              <ContactsTableCeil>{contact.number}</ContactsTableCeil>
              <ContactsTableCeil>
                <ListBtn
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  <FaTrashAlt size="20" />
                </ListBtn>
              </ContactsTableCeil>
            </ContactsTableRow>
            ))}
            
          </>)}
          </tbody>
        </ContactsTable>
      
    </>
  );
};