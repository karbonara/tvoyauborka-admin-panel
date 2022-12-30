import { useState, useMemo } from "react";
import RequestClients from "../request-clients/RequestClients";
import "./RequestUser.scss";

const RequestUser = () => {

  const clientsArray = [
    {
      name: 'Tishka',
      price: 2999,
      adress: 'Москва улица дом',
      number: '8999999',
      orders: [
        {
          order: 'Клининг 2500'
        },
        {
          order: 'Клининг 500'
        }
      ]
    },
    {
      name: 'VJ LINK',
      price: 999,
      adress: 'Москва улица дом 54',
      number: '8916928403',
      orders: [
        {
          order: 'Клининг 1500'
        },
        {
          order: 'Клининг 500'
        },
        {
          order: 'Клининг 500'
        }
      ]
    },
    {
      name: 'Sergey Simonov',
      price: 5999,
      adress: 'Москва улица дом 54',
      number: '89180298371',
      orders: [
        {
          order: 'Клининг 9500'
        },
        {
          order: 'Клининг 2200'
        },
        {
          order: 'Клининг 6500'
        },
        {
          order: 'Клининг 3500'
        }
      ]
    },
  ];

  const [selectedSort, setSelecttedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedUsers = useMemo(() => {
    if (selectedSort) {
      return [...clientsArray].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return clientsArray;
  }, [selectedSort, clientsArray]);

  const sortedAndSearch = useMemo(() => {
    return sortedUsers.filter(users => users.number.includes(searchQuery));
  }, [searchQuery, sortedUsers]);

  return (
    <div className="search">
      <div className="search__container">
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" placeholder="Введите телефон" />
      </div>
      {
        sortedAndSearch.length
          ?
          <RequestClients sortedUsers={sortedAndSearch} />
          :
          <h1 style={{ textAlign: 'center' }}>Пользователи не найдены</h1>
      }
    </div>
  );
}

export default RequestUser;