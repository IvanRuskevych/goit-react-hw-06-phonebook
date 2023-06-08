import { nanoid } from 'nanoid';

import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(filter);

  const normolizedFilter = filter.toLowerCase().trim();
  const list = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFilter)
  );
  console.log(list);

  return (
    <ul>
      {list.map(contact => {
        return <Contact item={contact} key={nanoid(5)} />;
      })}
    </ul>
  );
}

export default ContactsList;