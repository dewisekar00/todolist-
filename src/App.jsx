import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';

export default function App() {
  const [items, setItems] = useState([]);

function handleAddItem(item){
  setItems([...items,item])
}
function handleClear(){
  setItems([])
}
function handleDeleteItem(id){
setItems((items) => items.filter((item)=> item.id !== id))
// intinya kecualikan id karena id tidak kefilter dan akan di hapus
// item.id !== id itu akan kefilter sedangakn item.id === id itu tidak di filter karena yang akan dihapus itu berdasarkan id
//logikannya adalah karena item.id === id itu ngga kefilter makanya dia itu ngga masuk filter,dan filter akan buat data baru dimana item.id itu ngga masuk ke data baru yg di filter
}

 function handleToggle(id){
  setItems((items) => items.map((item) => (item.id === id ? {...item, checked: !item.checked}: item))
    
    );

  
 }
  return (
   <div className="app">
    < Header />
   < Form onAddItem={handleAddItem} onClear={handleClear}/>
   <List items={items} onDeleteItem={handleDeleteItem} onToggle={handleToggle} />

   </div>
  )
}


