import { useState } from "react"

export default function Form ({onAddItem, onClear}){
const[write, setWrite] = useState('')

  function handleSubmit(e){
    if (!write) return;
    e.preventDefault();

    const newWrite = {write, checked: false, id: Date.now() }
    onAddItem(newWrite)
    console.log(newWrite)
  setWrite('')
}

    return(
<>
<div class="container d-flex flex-column flex-sm-row">
  <form class="row g-3 mx-auto" onSubmit={handleSubmit}>
    <div class="col-auto">
      <input type="text" class="form-control my-custom-input"  id="list" placeholder="write here.." value={write} onChange={(e) => setWrite(e.target.value)}/>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-custom">Add</button>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-custom" onClick={onClear}>Delete all</button>
    </div>
  </form>
</div>


</>
)
}