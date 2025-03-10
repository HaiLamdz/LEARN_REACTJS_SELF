import { useState } from "react";
function App() {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos(prev => [...prev, {id: work.replace(/ /g, ''), job: work}])

  }
  console.log(todos);

  return (
    <div className="flex flex-col gap-8 h-screen justify-center items-center">
      
        <div className="flex gap-8">
          <input type="text" className="outline-none border border-blue-600 px-4 py-2 w-[400px]" value={work} onChange={e => setWork(e.target.value)}/>
          <button type="button" onClick={handleAdd} className="outline-none px-4 py-2 bg-blue-500 rounded-mb text-white">Add</button>
        </div>
        <div>
          <h3 className="font-bold text-x1">Content:</h3>
          <div>
            <ul>
              {todos?.map((item, index) => {
                return (
                  <li key={index}>{item.job}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

  );
}

export default App;
