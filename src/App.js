import './App.css';
import React, {useState} from "react";
import uniqid from "uniqid"
import {RiDeleteBin6Line} from "react-icons/ri";
import {MdOutlineDriveFileRenameOutline} from "react-icons/md";
import List from "./components/List";

function App() {

    const [value, setValue] = useState("")
    const [task, setTask] = useState([])
    const [block, setBlock] = useState([])

    const getValue = () => {
        let newList = {
            id: uniqid(),
            title: value
        }
        setTask([...task, newList])
    }


    return (
        <div id="todo">
            <div className="App ">
                <h1 className="text-5xl text text-center">Crud</h1>
                <div className="ml-96 ">
                    <div className="w-[36%]  ml-36">
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                                    </path>
                                </svg>
                            </div>
                            <input type="search" id="default-search" onChange={(e) => setValue(e.target.value)}
                                   className="block w-[100%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 outline-none
                                rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search Mockups, Logos..." required/>
                            <button onClick={getValue} type="submit"
                                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                                 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-emerald-600 dark:hover:bg-cyan-600
                                  dark:focus:ring-blue-800">Search
                            </button>
                        </div>
                    </div>
                    <div className="my-12">
                        <ul style={{borderRadius: "10px", margin: "20px 10%",}}
                            className="w-[50%] text-yellow-50 font-medium text text-gray-900 bg-white border-gray">
                            {
                                task.map(el => <List el={el} value={value}/>)
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
