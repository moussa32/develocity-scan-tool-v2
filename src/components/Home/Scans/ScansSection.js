import React, { useEffect, useState } from 'react'
import star from '../../../assets/images/star.png';
import last from '../../../assets/images/last.png';
import recent from '../../../assets/images/recent.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import HeaderCard from '../HeaderCard/HeaderCard';
import CardScans from '../Card/CardScans';
import { io } from "socket.io-client";
import { useTranslation } from 'react-i18next';
import {  useDispatch } from 'react-redux'
import {connectToio} from '../../../Services/SoketIO'
import { useSelector } from 'react-redux/es/exports';

const ScansSection = () => {
    const [popularScans, setPopularScans] = useState([]);
    const [recentScans, setRecentScans] = useState([]);
    const [lastScans, setLastScans] = useState([]);
    const pop=useSelector((state)=>state.connectSlice.popularScan)
    const { t } = useTranslation(["home"]);
    const lang = localStorage.getItem("i18nextLng")
    const dispatch = useDispatch()
    useEffect(() => {
        // const socket2=dispatch(connectToio())
        // const socket = io('https://api.develocity.finance');
        const socket = io('http://20.218.124.106:1885');
        // console.log('pop',pop)
       

        socket.on("popularScan", (data) => {
            setPopularScans(data);
            // console.log('data',data)
        })
        socket.on("highScore", (data) => {

            setRecentScans(data);
        }
        )
        socket.on("latestScan", (data) => {

            setLastScans(data);

        })

        return () => {
            socket.off("popularScan");
            socket.off("highScore");
            socket.off("latestScan");
            socket.close();
        }
    }, []);


    return (
        <div className="container" style={lang === "ar" ? { direction: "rtl" } : { direction: 'ltr' }}>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <HeaderCard image={star} title={t("home:popular_today")} />
                    <CardScans popularScans={popularScans} title={t("home:scans")} />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <HeaderCard image={last} title={t("home:last_scan")} />
                    <CardScans popularScans={lastScans} title={t("home:score")} />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <HeaderCard image={recent} title={t("home:highest_score")} />
                    <CardScans popularScans={recentScans} title={t("home:score")} />
                </Col>
            </Row>
            {/* <button onClick={()=>dispatch(connectToio())}>click</button> */}
        </div>
    )
}

export default ScansSection