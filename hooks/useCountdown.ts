import { useInterval } from "@reactuses/core"
import { useEffect, useState } from "react"

function padZero(time: number): string {
    return `${time}`.length < 2 ? `0${time}` : `${time}`
}

export function getDHMSTime(timeDiff: number): [string, string, string, string] {

    if (timeDiff <= 0) {
        return ['00', '00', '00', '00']
    }
    if (timeDiff > 100 * 3600) {
        return ['99', '99', '59', '59']
    }
    const day = Math.floor(timeDiff / (3600 * 24))
    const hour = Math.floor(timeDiff / 3600 - 24)
    const minute = Math.floor((timeDiff - Math.floor(timeDiff / 3600) * 3600) / 60)
    const second = timeDiff - Math.floor(timeDiff / 3600) * 3600 - minute * 60

    return [padZero(day), padZero(hour), padZero(minute), padZero(second)]
}

export const useCountDown = (
    time: number,
    callback?: () => void,
) => {
    const [remainTime, setRemainTime] = useState(time)
    const [delay, setDelay] = useState<number | null>(1000)

    useInterval(() => {
        if (remainTime <= 0) {
            setDelay(null)
            return
        }
        setRemainTime(remainTime - 1)
    }, delay)

    useEffect(() => {
        if (time > 0 && remainTime <= 0) {
            callback && callback()
        }
    }, [callback, remainTime, time])

    const [day, hour, minute, secoud] = getDHMSTime(remainTime)

    return [day, hour, minute, secoud] as const
}