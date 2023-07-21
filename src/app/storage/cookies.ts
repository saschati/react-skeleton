import Storage from '@/types/app/storage'
import ClientCookies from 'js-cookie'
import { COOKIES_SAME_SITE } from '@/config/constants/cookies'

class CookiesStorage implements Storage {
  set<T>(name: string, value: T, options: ClientCookies.CookieAttributes = {}): void {
    let _value = String(value)
    if (value instanceof Object) {
      _value = JSON.stringify(value)
    }

    ClientCookies.set(
      name,
      _value,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      Object.assign(
        { httpOnly: false, sameSite: COOKIES_SAME_SITE.LAX },
        options,
      ) as ClientCookies.CookieAttributes,
    )
  }

  has(name: string): boolean {
    return !!ClientCookies.get(name)
  }

  get<T, D>(name: string, defaultVal: D | null = null): T | D | null {
    const data = ClientCookies.get(name) || null

    if (data === null) {
      return defaultVal
    }

    try {
      return JSON.parse(data) as T
    } catch (e) {
      return data as T
    }
  }

  remove(name: string): void {
    ClientCookies.remove(name)
  }
}

export default CookiesStorage
