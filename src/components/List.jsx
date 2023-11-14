import Item from './Item';

export default function List({ items, onDeleteItem,onToggle }) {
    return (
      <div className="toDoList">
        
        <ul className="list-items">
          {items.map((item) => (
            <Item item={item} 
            key={item.id} 
            onDeleteItem={onDeleteItem} 
            onToggle={onToggle}/>
          ))}
        </ul>
      </div>
    );
  }
  