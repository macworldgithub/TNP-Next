import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {

  const dbconnection = await mysql.createConnection({
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}

type ResponseData = {
  items: mysql.QueryResult;
}

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    const result = await query({
      query: 'SELECT * FROM wp9p_actionscheduler_actions'
    });
    console.log("Result", result);

    return new NextResponse('Success', { status: 200 });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  try {
    // Your logic here
    // ...
    return new NextResponse<ResponseData>("Success", { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}