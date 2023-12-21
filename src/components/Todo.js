import React,{useState} from "react";
import Data from "../utils/Data";
const Todo =()=>{
    const [text,setText] = useState("")
    const [data,setData] = useState(Data);
    const removeElement = (index) => {
    const newFruits = data.filter((_, i) => i !== index);
    setData(newFruits);
};
    
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Write a Task
              </label>
              <div className="mt-2">
                <input
                  id="Tasks"
                  name="Tasks"
                  type="Tasks"
                  placeholder="Add a Task"
                  value = {text} 
                  onChange={(e)=>{
                    if(e.target.value.length!==0){
                        setText(e.target.value);
                    }
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={
                    ()=>{
                        if(text.length!==0){
                        setData([...data,text]);
                        setText("");
                        }
                    }   
                }
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add
              </button>
            </div>
            <div className="">
                <ul className="divide-y divide-gray-100">
                {data.map((person,index) => (
                    <li>
                    <div key={index}className="min-w-0 justify-between">
                        <div class="flex justify-between">
                        <p class="mr-2">{person}</p>
                        <button
                        onClick={()=>{
                            removeElement(index);
                            setText(data[index]);
                        }}
                        class="bg-indigo-600 px-3 py-1.5 text-white rounded">
                            Edit
                        </button >
                        <button 
                        onClick={()=>{
                            removeElement(index);
                        }}
                        class="bg-indigo-600 px-3 py-1.5 text-white rounded">Delete</button>
                        </div>
                    </div> 
                    </li>
                ))}
                </ul>
            </div>
          </div>

    );
}

export default Todo;