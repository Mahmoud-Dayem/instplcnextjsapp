// app/api/plc-modification/route.js
import pool from '../../lib/db';


export async function POST(req) {
  const { 
    employee_id, 
    employee_name, 
    request_date, 
    plc_tag, 
    description, 
    equipment_affected, 
    details_of_modification, 
    reason_for_modification 
  } = await req.json();

  try {
    const [result] = await pool.execute(
      `INSERT INTO plc_modification_requests 
      (employee_id, employee_name, request_date, plc_tag, description, equipment_affected, details_of_modification, reason_for_modification)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [employee_id, employee_name, request_date, plc_tag, description, equipment_affected, details_of_modification, reason_for_modification]
    );

    return new Response(JSON.stringify({ id: result.insertId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ error: 'Failed to store data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}


export async function GET(req) {
  try {
    const [rows] = await pool.execute(`SELECT * FROM plc_modification_requests ORDER BY id desc`);

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ error: 'Failed to retrieve data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

