export interface Enviroment {
  baseUrl: string
  apiUrl: string
}

const env: Enviroment = {
  baseUrl: import.meta.env.VITE_APP_URL as string,
  apiUrl: import.meta.env.VITE_API_URL as string,
}

export default env
