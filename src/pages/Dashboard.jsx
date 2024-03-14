import React, { useState, useEffect } from 'react'
import '../css/Dashboard.scss'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);
const Dashboard = () => {


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
        if (itoday < iyesterday) {
            setDiv2Content('↓');
        } else {
            setDiv2Content('↑');
        }
    }, [itoday, iyesterday]);


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

    // const data = {
    //     labels: ['Total Hired', 'Total Canceled', 'Total Pending'],
    //     datasets: [
    //         {
    //             data: [54, 20, 26],
    //             backgroundColor: [
    //                 '#006AFF',
    //                 '#52C93F',
    //                 '#FF2727',
    //             ],
    //             borderColor: [
    //                 '#006AFF',
    //                 '#52C93F',
    //                 '#FF2727',
    //             ],
    //             borderWidth: 1,
    //         },
    //     ],
    // }
    // const CSSPie = {
    //     cutout: '70%',
    //     responsive: true,
    //     maintainAspectRatio: false, // Giá trị phần trăm, tùy chỉnh để làm mỏng lại biểu đồ
    // };

    return (
        <div className='content'>
            <div className='today-stats'>
                <h2>Todays Statistics</h2>
                <p id='callendar'>{formattedDateTime}</p>
                <div className='wrap-card-padding'>
                    <div className='income-wrap'>
                        <div className='wrap-header'>
                            <h3>Income</h3>
                            <p id='p5'>Today</p>
                        </div>
                        <div className='income'>
                            <h1 id='incomeToday'>$ { }1000.00</h1>
                            <p id='trend' style={{ color: trendColorI }}>{arrowChangeI}{trendPercentageI}%</p>
                        </div>
                        <div className='compare'>
                            <p id='incomeYesterday'>Compare to  $5000{ } yesterday</p>
                            <p id='incomeLastweek'>Last week ${ }12345.00</p>
                        </div>
                    </div>
                    <div className='expences-wrap'>
                        <div className='wrap-header'>
                            <h3>Expences</h3>
                            <p id='p5'>Today</p>
                        </div>
                        <div className='income'>
                            <h1 id='expencesToday'>$ { }5660.00</h1>
                            <p id='trend' style={{ color: trendColorE }}>{arrowChangeE}{trendPercentageE}%</p>
                        </div>
                        <div className='compare'>
                            <p id='expencesYesterday'>Compare to  $5240{ } yesterday</p>
                            <p id='expencesLastweek'>Last week ${ }12345.00</p>
                        </div>
                    </div>
                    <div className='chart-wrap'>
                        <div className='wrap-header'>
                            <h3>Hire vs Cancel</h3>
                            <p id='p5'>Today</p>
                            {/* <div className='donut-chart'>
                                <Doughnut data={data} options={CSSPie} width={200} height={200} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard
