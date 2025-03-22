"use server";

import { HttpMethods } from '@/interface/utils.interface';

export default async function APICall<T, R>(
  url: string, 
  method: HttpMethods, 
  body?: any
): Promise<T>{

  try {
    const result = await fetch(url, {
      method,
      credentials: "include",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      }
    })

    const response = await result.json();
    return response as T;
  }

  catch (error) {
    throw error as R;
    // throw error as R;
    // return error as R
  }

}
