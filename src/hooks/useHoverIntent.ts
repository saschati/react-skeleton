import { useEffect } from 'react'
import HoverIntent from '@/utils/hoverIntent'
import useEffectEvent from './useEffectEvent'

const useHoverIntent = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  onEnter: () => void,
  onLeave: () => void,
  interval = 100,
  sensitivity = 0.1,
) => {
  const onEnterAction = useEffectEvent(onEnter)
  const onLeaveAction = useEffectEvent(onLeave)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const hoverIntent = new HoverIntent(
      ref.current,
      onEnterAction,
      onLeaveAction,
      interval,
      sensitivity,
    )

    return () => {
      hoverIntent.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sensitivity, interval])
}

export default useHoverIntent
