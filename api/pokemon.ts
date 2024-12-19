import axios, { AxiosResponse } from "axios";

export interface Result {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export async function getPokemonsApi(nextUrl: string) {
  try {
    // Limit the amount of pokemon to 20
    const url = `${process.env.EXPO_PUBLIC_API_HOST}/pokemon?limit=20&offset=0`;
    // Fetch the data
    const response: AxiosResponse<PokemonResponse> = await axios(
      nextUrl || url,
    );
    // Convert the result to json data
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByURLApi(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemonDetailsApi(id: string) {
  try {
    const url = `${process.env.EXPO_PUBLIC_API_HOST}/pokemon/${id}`;

    const response: AxiosResponse<PokemonResponse> = await axios(url);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
