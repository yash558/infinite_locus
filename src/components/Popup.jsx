import { useEffect, useState } from "react";
import axios from "axios";

function Popup() {
  const mail = "abc@gmail.com"
  const [id,setText] = useState("");
  const HandleSubmit = async() => {
    try {
        console.log(mail)
        console.log(id)
        const send = {mail, id}
        const response = await axios.post('http://10.178.22.225:5000/model', send)
        const data1=response.data
        const data = data1['mood']
        console.log(data);
        console.log(typeof data)
        const a=0
        alert(data);
        if(data==a)
            {
              alert("suicide");
            }
            else if(data==1 || data==2)
            {
              alert("sad");
            }
            else if(data==7)
            {
              alert("anxiety");
            }    
            else
            {
              alert("happy");
            }         
    }catch (error) {
        console.error(error.response);
    }

}
  return (
    <div className="flex items-center justify-center h-screen ">
      <form className="w-[1000px] h-[600px] max-w-md mt-20 mx-auto bg-white p-8 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dayFeedback">
            How was your day?
    
          </label>
          <input
            className=" h-[400px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            id="dayFeedback"
            type="text"
            placeholder="Enter your feedback here"
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={
              HandleSubmit 
            }
          >
            Submit
          </button>
          <button
            className="ml-4 border text-teal-500 hover:text-teal-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"

          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Popup;
