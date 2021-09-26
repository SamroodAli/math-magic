import { useState } from 'react';

export default () => {
  const [activeItem, setActiveItem] = useState('Home');
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return [activeItem, handleItemClick];
};
