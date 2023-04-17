import React, { useEffect, useState } from "react";
import star from "../../../assets/images/star.png";
import last from "../../../assets/images/last.png";
import recent from "../../../assets/images/recent.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import HeaderCard from "../HeaderCard/HeaderCard";
import CardScans from "../Card/CardScans";
import { useTranslation } from "react-i18next";
import { socket } from "../../../config/socket";
import { useDispatch, useSelector } from "react-redux";
import { changeLoadingStatus } from "../../../store/isPageLoaded";

const ScansSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [popularScans, setPopularScans] = useState(null);
  const [recentlyVerified, setRecentlyVerified] = useState(null);
  const [lastScans, setLastScans] = useState(null);
  const { t } = useTranslation(["home"]);
  const lang = localStorage.getItem("i18nextLng");
  const isPageLoaded = useSelector(state => state.isPageLoaded.status);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("popularScan", data => {
      setPopularScans(data);
      console.log(data);
    });
    socket.on("highScore", data => {
      setRecentlyVerified(data);
    });
    socket.on("latestScan", data => {
      setLastScans(data);
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    if (popularScans && recentlyVerified && lastScans && !isPageLoaded) {
      dispatch(changeLoadingStatus(true));
      setIsLoaded(true);
    }
  }, [popularScans, recentlyVerified, lastScans]);

  return (
    <div className="container" style={lang === "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
      {isLoaded && (
        <Row>
          <Col lg={4} md={6} sm={12}>
            <HeaderCard image={star} title={t("home:popular_today")} />
            <CardScans popularScans={popularScans} caption={t("home:scans")} />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <HeaderCard image={last} title={t("home:last_scan")} />
            <CardScans popularScans={lastScans} caption={t("home:price")} />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <HeaderCard image={recent} title={t("home:recently_verified")} />
            <CardScans popularScans={recentlyVerified} caption={t("home:score")} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ScansSection;
