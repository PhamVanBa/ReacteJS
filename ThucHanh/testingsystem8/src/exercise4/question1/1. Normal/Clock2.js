import React, { useState } from "react";
import styled from 'styled-components'

function Clock2() {

    const [time, setTime] = useState("");
    const [ampm, setampm] = useState("");

    const updateTime = function () {
        let dateInfo = new Date();
        let hour = 0;

        /* Lấy giá trị của giờ */
        if (dateInfo.getHours() === 0) {
            hour = 12;
        } else if (dateInfo.getHours() > 12) {
            hour = dateInfo.getHours() - 12;
        } else {
            hour = dateInfo.getHours();
        }

        /* Lấy giá trị của phút */
        let minutes =
            dateInfo.getMinutes() < 10
                ? parseInt("0" + dateInfo.getMinutes())
                : dateInfo.getMinutes();

        /* Lấy gía trị của giây */
        let seconds =
            dateInfo.getSeconds() < 10
                ? "0" + dateInfo.getSeconds()
                : dateInfo.getSeconds();

        /* Định dạng ngày */
        let ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";

        /* Cập nhật state */
        setampm(ampm)
        setTime(`${hour}:${minutes}:${seconds}`);
    };

    setInterval(function () {
        updateTime();
    }, 1000);

    const Time = styled.div`
        width: 100px;
        background-color: blue;
        border-radius: 20px;
        color: white;
        margin: 2;
        padding: 20px;
        margin-left:10px;
        margin-top 10px;
    `;

    return (
        <Time>
            <span>{time}</span>
            <span>{ampm}</span>
        </Time>
    );
}

export default Clock2;