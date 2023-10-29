export interface Enviroment {
  baseUrl: string
  apiUrl: string
  routeBaseName: string
}

const env: Enviroment = {
  baseUrl: import.meta.env.VITE_APP_URL as string,
  apiUrl: import.meta.env.VITE_API_URL as string,
  routeBaseName: (import.meta.env.VITE_APP_ROUTER_BASE_NAME || '/') as string,
}

export default env
