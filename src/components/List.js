import React, {useState} from 'react';
import {MdOutlineDriveFileRenameOutline} from "react-icons/md";
import {RiDeleteBin6Line} from "react-icons/ri";
// import {BsCheckCircleFill} from "react-icons/bs";

const List = ({el}) => {
    const [block, setBlock] = useState(false)

    return (
        <div>
            <li className="flex justify-between align-center px-2 py-2 border-b text-gray-900  border-gray-200 rounded-t-lg dark:border-gray-900">
                {
                    block ? <input type="text" defaultValue={el.title} className="border rounded-2xl "/> : el.title
                }
                <div className="">
                    <button onClick={() => setBlock(!block)}
                        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br
                                                    focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <MdOutlineDriveFileRenameOutline/>
                        {/*<BsCheckCircleFill/>*/}

                      {/*<span className=""></span>*/}
                    </button>
                    <button
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br
                                                    focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <RiDeleteBin6Line/>
                    </button>
                </div>
            </li>
        </div>
    );
};

export default List;