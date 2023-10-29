import dayjs from 'dayjs'

// Plugins
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

type DateUTCDateParams = Required<Parameters<typeof dayjs.utc>>

export const dateUtc = (date: DateUTCDateParams[0], format: DateUTCDateParams[1]) => {
  return dayjs(dayjs.utc(date, format)).tz(dayjs.tz.guess())
}

export default dayjs
