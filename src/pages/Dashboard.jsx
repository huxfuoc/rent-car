import React, { useState, useEffect } from 'react'
import 'src/css/Dashboard.scss'
import { Chart } from "react-google-charts";

import { useTranslation } from 'react-i18next'

const Dashboard = () => {

    const { t } = useTranslation("global")

    const [itoday, setNumber1] = useState(0);
    const [iyesterday, setNumber2] = useState(0);

    const [etoday, setNumber3] = useState(0);
    const [eyesterday, setNumber4] = useState(0);

    const [arrowChangeI, setDiv1Content] = useState('');
    const [arrowChangeE, setDiv2Content] = useState('');

    const [trendPercentageI, setIncomePercentage] = useState(0);
    const [trendPercentageE, setExpencesPercentage] = useState(0);

    useEffect(() => {
        const div1Content = document.getElementById('incomeToday').textContent;
        const div2Content = document.getElementById('incomeYesterday').textContent;

        const div3Content = document.getElementById('expencesToday').textContent;
        const div4Content = document.getElementById('expencesYesterday').textContent;

        setNumber1(parseFloat(div1Content.replace(/[^\d.-]/g, '')));
        setNumber2(parseFloat(div2Content.replace(/[^\d.-]/g, '')));
        setNumber3(parseFloat(div3Content.replace(/[^\d.-]/g, '')));
        setNumber4(parseFloat(div4Content.replace(/[^\d.-]/g, '')));
    }, []);

    const trendColorI = itoday < iyesterday ? 'red' : 'green';
    const trendColorE = etoday < eyesterday ? 'red' : 'green';

    useEffect(() => {
        if (itoday < iyesterday) {
            setDiv1Content('↓');
        } else {
            setDiv1Content('↑');
        }
    }, [itoday, iyesterday]);

    useEffect(() => {
        if (etoday < eyesterday) {
            setDiv2Content('↓');
        } else {
            setDiv2Content('↑');
        }
    }, [etoday, eyesterday]);


    useEffect(() => {
        const percentage = (itoday - iyesterday) / iyesterday * 100;
        setIncomePercentage(Math.abs(percentage).toFixed(1));
    }, [itoday, iyesterday]);

    useEffect(() => {
        const percentage = (etoday - eyesterday) / eyesterday * 100;
        setExpencesPercentage(Math.abs(percentage).toFixed(1));
    }, [etoday, eyesterday]);



    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    };

    const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(currentDateTime);

    const chartData = [
        ["Total", "Hire vs Cancel"],
        ["Total Hired", 11],
        ["Total Canceled", 2],
        ["Total Pending", 2],
    ];

    const chartOption = {
        pieHole: 0.7,
        pieSliceText: "none",
        legend: "none",
        backgroundColor: 'transparent',
        colors: ['#006AFF', '#FF2727', '#52C93F'],
        top: "-35px",
        enableInteractivity: "false"
    }

    return (
        <div className='content'>
            <div className='today-stats'>
                <h2>{t("dashboard.todaysStatistics")}</h2>
                <p id='callendar'>{formattedDateTime}</p>
                <div className='wrap-card-padding'>
                    <div className='income-wrap'>
                        <div className='wrap-header'>
                            <h3>{t("dashboard.income")}</h3>
                            <p id='p5'>{t("dashboard.today")}</p>
                        </div>
                        <div className='income'>
                            <h1 id='incomeToday'>$1000.00</h1>
                            <p id='trend' style={{ color: trendColorI }}>{arrowChangeI}{trendPercentageI}%</p>
                        </div>
                        <div className='compare'>
                            <p id='incomeYesterday'>{t("dashboard.compareTo")}  $2000 {t("dashboard.yesterday")}</p>
                            <p id='incomeLastweek'>{t("dashboard.lastWeek")} $12345.00</p>
                        </div>
                    </div>
                    <div className='expences-wrap'>
                        <div className='wrap-header'>
                            <h3>{t("dashboard.expenses")}</h3>
                            <p id='p5'>{t("dashboard.today")}</p>
                        </div>
                        <div className='income'>
                            <h1 id='expencesToday'>$ { }5660.00</h1>
                            <p id='trend' style={{ color: trendColorE }}>{arrowChangeE}{trendPercentageE}%</p>
                        </div>
                        <div className='compare'>
                            <p id='expencesYesterday'>{t("dashboard.compareTo")}  $5240 {t("dashboard.yesterday")}</p>
                            <p id='expencesLastweek'>{t("dashboard.lastWeek")} $10000.00</p>
                        </div>
                    </div>
                    <div className='chart-wrap'>
                        <div className='wrap-header'>
                            <h3>{t("dashboard.hireVsCancel")}</h3>
                            <p id='p5'>Today</p>
                        </div>
                        <div className='wrap-chart'>
                            <div className='donut-chart'>
                                <Chart
                                    chartType="PieChart"
                                    width={'100%'}
                                    height={'200px'}
                                    data={chartData}
                                    options={chartOption}
                                />
                            </div>
                            <div className="chart-legend">
                                <div className="item">
                                    <div className='legend-title'>
                                        <p className="dot blue"></p>
                                        <p className="label">{t("dashboard.totalHired")}</p>
                                    </div>
                                    <div className='legend-percent'>
                                        <p className="value">54%↑</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='legend-title'>
                                        <span className="dot green"></span>
                                        <p className="label">{t("dashboard.totalCanceled")}</p>
                                    </div>
                                    <div className='legend-percent'>
                                        <p className="value">20%↑</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className='legend-title'>
                                        <span className="dot red"></span>
                                        <p className="label">{t("dashboard.totalPending")}</p>
                                    </div>
                                    <div className='legend-percent'>
                                        <p className="value">26%↓</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard
