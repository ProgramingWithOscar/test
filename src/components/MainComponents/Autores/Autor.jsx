// eslint-disable-next-line react/prop-types

import { useState, useEffect } from "react";


// eslint-disable-next-line react/prop-types
const AutorInformation = ({title }) => {

  const [dates, setDates] = useState(null);

  useEffect(() => {
      const fetchUsers = async () => {
          // eslint-disable-next-line no-useless-catch
          try {
              const response = await fetch("https://rickandmortyapi.com/api/character");
              const data = await response.json();
              const firstThreeCharacters = data.results.slice(0, 3);

             setDates(firstThreeCharacters);
          } catch (error) {
              throw error;
          }
      }

      fetchUsers();
  }, [])
  
    return (
      <div>
      <div className="p-4 flex flex-col  bg-[#F2F2F2] m-2 rounded-lg shadow-md">
      <div className="flex justify-between">
      <h1 className="font-medium text-2xl">{title}</h1>
      <button className="bg-[#E6EDE5] text-[#7DA870] px-2 rounded-md">Ver Todo</button>
      </div>
        {
            
            // eslint-disable-next-line react/prop-types
            dates ? dates.map((user, index) => (
          
            <div key={index} className=" grid mt-2 py-2 px-2 grid-cols-3 ">
            <div className="col-span-2 flex gap-6">
            <img className=" w-[40px] h-[40px] object-cover rounded-lg" src={user.image} alt="hola" />

                <div className="col-span-1">
              <span className="font-medium">{user.name}</span>
              <p className="text-gray-600"> {}</p>
             
              <hr className="mt-2"></hr>
              
              </div>
            </div>
              
              <div className="col-span-1 ml-4">
                Status
                <span className=" text-[20px] font-medium ml-4">{user.status }</span>
              </div>
            </div>

                      
        )): <div>Cragando</div>}
        </div>
      </div>
    );
  };
  
  export default AutorInformation;