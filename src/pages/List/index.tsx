import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const List: React.FC = () => {

  const options = [
    {value: 'João', label: 'João'},
    {value: 'Maria', label: 'Maria'},
    {value: 'José', label: 'José'},
  ];

  return (
    <ContentHeader title="Entradas" lineColor="#F7931B">
    <SelectInput options={ options } />
  </ContentHeader>
  );
}

export default List;