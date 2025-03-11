import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const [work, setWork] = useState('')
    const [todos, setTodos] = useState([])

    const handleAdd = () => {
        if(todos?.some(item => item.id === work.replace(/ /g, ''))){
            toast.error('Công việc này đã được thêm vào trước đó')
        }else{
            toast.success('Thêm công việc thành công')
            setTodos(prev => [...prev, { id: work.replace(/ /g, ''), job: work }])
            setWork('')
        }
    }
    console.log(todos);


    const handleDelete = (id) => {
        setTodos(prev => prev.filter(item => item.id !== id))
        toast.success('Xóa công việc thành công')
    }
    return (
        <>
            <div className="flex flex-col gap-8 h-screen justify-center items-center">

                <div className="flex gap-8">
                    <input type="text" className="outline-none border border-blue-600 px-4 py-2 w-[400px]" value={work} onChange={e => setWork(e.target.value)} />
                    <button type="button" onClick={handleAdd} className="outline-none px-4 py-2 bg-blue-500 rounded-mb text-white">Add</button>
                </div>
                <div>
                    <h3 className="font-bold text-x1">Content:</h3>
                    <div>
                        <ul>
                            {todos?.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <span className="my-2">{item.job}</span>
                                        <span onClick={() => handleDelete(item.id)} className="my-2 cursor-pointer p-2">X</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>

    );
}

export default App;