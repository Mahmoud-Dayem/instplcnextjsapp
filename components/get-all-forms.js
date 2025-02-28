// export const dynamic = 'force-dynamic'
import { unstable_cache } from 'next/cache'
import pool from '@/app/lib/db';

const getPosts = unstable_cache(
  async () => {

    const [rows] = await pool.execute(`SELECT * FROM plc_modification_requests ORDER BY id desc`);
    
    return rows;
    // return await db.select().from(posts)
  },
  ['posts'],
  { revalidate: 100, tags: ['posts'] }
)
  
async function GetAllForms() {

      const forms = await  getPosts();
      




  return (
    <div className="flex flex-col justify-center mx-auto px-4 text-center mt-10">
      {/* <h1 className="text-1xl font-bold my-4">All Requests</h1> */}
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white ">
          <thead >
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
          <tbody >
            {forms.map((form, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.employee_id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{form.employee_name}</td>
                <td className="py-2 px-2 border-b border-gray-200">{form.request_date.split('T')[0]}</td>
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
