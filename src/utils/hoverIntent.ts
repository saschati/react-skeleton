export default class HoverIntent {
  private isOverElement: boolean = false

  private prevX: number = 0
  private prevY: number = 0
  private prevTime: number = 0

  private lastX: number = 0
  private lastY: number = 0
  private lastTime: number = 0

  private isHover: boolean = false
  private checkSpeedInterval: NodeJS.Timer | null = null

  constructor(
    private elem: HTMLElement,
    private enter: (this: HTMLElement) => void,
    private leave: (this: HTMLElement, event: MouseEvent) => void,
    private interval: number = 100,
    private sensitivity: number = 0.1,
  ) {
    this.sensitivity = sensitivity
    this.interval = interval
    this.elem = elem
    this.enter = enter
    this.leave = leave

    elem.addEventListener('mouseenter', this.onMouseEnter)
    elem.addEventListener('mouseleave', this.onMouseLeave)
  }

  public destroy = (): void => {
    this.elem.removeEventListener('mousemove', this.onMouseMove)
    this.elem.removeEventListener('mouseenter', this.onMouseEnter)
    this.elem.removeEventListener('mouseleave', this.onMouseLeave)
  }

  private onMouseEnter = (event: MouseEvent): void => {
    if (this.isOverElement) {
      // Ігноруємо подію над елементом, оскільки ми вже вимірюємо швидкість
      return
    }

    this.isOverElement = true

    // Після кожного руху вимірюємо дистанцію
    // між попередніми та поточними координатами курсору
    // якщо швидкість менша за sensivity, то вона вважається повільною

    this.prevX = event.pageX
    this.prevY = event.pageY
    this.prevTime = Date.now()

    this.elem.addEventListener('mousemove', this.onMouseMove)

    this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval)
  }

  private onMouseLeave = (event: MouseEvent): void => {
    // Якщо пішли з елемента
    if (!event.relatedTarget || !this.elem.contains(event.relatedTarget as Node)) {
      this.isOverElement = false

      this.elem.removeEventListener('mousemove', this.onMouseMove)
      clearInterval(this.checkSpeedInterval as NodeJS.Timer)

      if (this.isHover) {
        // Якщо була зупинка руху на елементі
        this.leave.call(this.elem, event)
        this.isHover = false
      }
    }
  }

  private onMouseMove = (event: MouseEvent): void => {
    this.lastX = event.pageX
    this.lastY = event.pageY
    this.lastTime = Date.now()
  }

  private trackSpeed = (): void => {
    let speed

    if (!this.lastTime || this.lastTime === this.prevTime) {
      // Курсор не рухався
      speed = 0
    } else {
      speed =
        Math.sqrt(Math.pow(this.prevX - this.lastX, 2) + Math.pow(this.prevY - this.lastY, 2)) /
        (this.lastTime - this.prevTime)
    }

    if (speed < this.sensitivity) {
      clearInterval(this.checkSpeedInterval as NodeJS.Timer)

      this.isHover = true
      this.enter.call(this.elem)
    } else {
      // Швидкість висока, запам'ятовуємо нові координати
      this.prevX = this.lastX
      this.prevY = this.lastY
      this.prevTime = this.lastTime
    }
  }
}
