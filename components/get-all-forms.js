'use client'
import { useEffect, useState } from 'react';

  function GetAllForms() {
  const [forms, setForms] = useState([]);
  const [loading,setloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/plc-modification');
      const data = await response.json();
      if(response.status !== 200){
        console.log("Error fetching data or no mysql connection");
        return;
      }
      setForms(data);
      setloading(false);
    }
    fetchData();
  }, []);

  if (loading){

    return <div>Loading...</div>
  }


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">All Forms</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Index</th>
              <th className="py-2 px-4 border-b border-gray-200">Employee ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Employee Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Request Date</th>
              <th className="py-2 px-4 border-b border-gray-200">PLC Tag</th>
              <th className="py-2 px-4 border-b border-gray-200">Description</th>
              <th className="py-2 px-4 border-b border-gray-200">Equipment Affected</th>
              <th className="py-2 px-4 border-b border-gray-200">Details of Modification</th>
              <th className="py-2 px-4 border-b border-gray-200">Reason for Modification</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.employee_id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.employee_name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.request_date}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.plc_tag}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.description}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.equipment_affected}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.details_of_modification}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.reason_for_modification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetAllForms;
