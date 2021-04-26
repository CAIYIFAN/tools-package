import React, { useEffect, useState } from 'react';

const animationArr: Array<number> = []

interface CountDownProps {
    startTime: number;
}

export default function CountDown(props: CountDownProps):JSX.Element {
    const { startTime } = props
    const [time, setTime] = useState(startTime)

    // num 为剩余时间
    function countDown(num: number) {
        window.requestAnimationFrame = window.requestAnimationFrame || 
        function (callback) {
            //为了使setTimteout的尽可能的接近每秒60帧的效果
            window.setTimeout(callback, 1000 / 60);
        };
            
        window.cancelAnimationFrame = window.cancelAnimationFrame || 
        function (id) {
            //为了使setTimteout的尽可能的接近每秒60帧的效果
            window.clearTimeout(id);
        }
        let date: number = new Date().valueOf();
        let id: number
        const count = function () {
            const now: number = new Date().valueOf();
            if(now - date <1000) {
                id = requestAnimationFrame(count);
                animationArr.push(id)
            } else {
                if (num >= 0) {
                    setTime(num--)
                    date = new Date().valueOf();
                    id = requestAnimationFrame(count);
                    animationArr.push(id)
                }
            }
        }
        id = requestAnimationFrame(count)
        animationArr.push(id)
    }
    
    useEffect(() => {
        countDown(startTime - 1)
        return ()=> {
            animationArr.forEach((item) => {
                cancelAnimationFrame(item)
            })
        }
    },[])

    return (
        <span>
            {time}
        </span>
    )
}