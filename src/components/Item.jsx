export default function Item({ item,onDeleteItem,onToggle}) {
    return (
      <li className="items"
      key={item.id}>
        <input
    type="checkbox"
    checked={item.checked}
        onChange={() => onToggle(item.id)}

    // Panggil onToggle saat checkbox diklik
  />
  
        <span style={item.checked ? { textDecoration: 'line-through' , color:'grey' } : {}}>
          {item.write}
        </span>
        <button onClick={()=> onDeleteItem(item.id)} class="icon-button delete-button" style={{ marginLeft: 'auto' }}><span class="material-icons">
delete
</span></button>
      </li>
    );
  }
  