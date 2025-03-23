"use server";

import { HttpMethods } from '@/interface/utils.interface';
import { cookies } from 'next/headers';

export default async function APICall<T, R>( url: string,  method: HttpMethods, header?: {},  body?: any ): Promise<T>{

  const cookieStore = await cookies();
  const authToken = cookieStore.get("access-token")?.value;

  try {
    const result = await fetch(url, {
      method,
      credentials: "include",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Cookie": `access-token=${authToken}`,  // Ensure cookie is included
        ...header
      }
    })

    const response = await result.json();
    console.log("response", response);
    return response as T;
  }

  catch (error) {
    console.error(error)
    throw error as R;
  }

}
