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
import { convertFromScientificNotation } from "../../../util/scientificNotation";
import SpacialNumber from "../../common/SpacialNumber";

const toFixed = number => Math.round(number);

const ScansSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [popularScans, setPopularScans] = useState(null);
  const [recentlyVerified, setRecentlyVerified] = useState(null);
  const [lastScans, setLastScans] = useState(null);
  const { t } = useTranslation(["home", "common"]);
  const lang = localStorage.getItem("i18nextLng");
  const isPageLoaded = useSelector(state => state.isPageLoaded.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleSocketPopularScan = data => {
      setPopularScans(data);
    };
    const handleSocketHighScore = data => {
      setRecentlyVerified(data);
    };

    const handleSocketLatestScan = data => {
      setLastScans(data);
    };

    socket.on("popularScan", handleSocketPopularScan);
    socket.on("highScore", handleSocketHighScore);
    socket.on("latestScan", handleSocketLatestScan);
    return () => {
      socket.off("popularScan", handleSocketPopularScan);
      socket.off("highScore", handleSocketHighScore);
      socket.off("latestScan", handleSocketLatestScan);
    };
  }, [socket]);

  useEffect(() => {
    if (popularScans && recentlyVerified && lastScans && !isPageLoaded) {
      dispatch(changeLoadingStatus(true));
      setIsLoaded(true);
    }
    return () => dispatch(changeLoadingStatus(false));
  }, [popularScans, recentlyVerified, lastScans]);

  const handleColumnValue = value => {
    const stringNumber = value.toString();
    if (stringNumber.includes("e")) {
      const { zeroCounts, numbersAfterZero, parsedNumber } = convertFromScientificNotation(stringNumber);
      return <SpacialNumber numbersAfterZero={numbersAfterZero} zeroCounts={zeroCounts} parsedNumber={parsedNumber} />;
    } else {
      if (Number(value) > 0) {
        return Number(value).toFixed(4).toString();
      } else {
        return stringNumber;
      }
    }
  };

  return (
    <div className="container" style={lang === "ar" ? { direction: "rtl" } : { direction: "ltr" }}>
      {isLoaded && (
        <Row>
          <Col lg={4} md={6} sm={12}>
            <HeaderCard image={star} title={t("home:popular_today")} />
            <CardScans
              data={popularScans}
              caption={t("home:scans")}
              colSelector="Scans"
              colValueHandler={toFixed}
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <HeaderCard image={last} title={t("home:last_scan")} />
            <CardScans
              data={lastScans}
              caption={t("home:price")}
              colSelector="price"
              colValueHandler={handleColumnValue}
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <HeaderCard image={recent} title={t("common:recently_verified")} />
            <CardScans
              data={recentlyVerified}
              caption={t("home:score")}
              colSelector="score"
              colValueHandler={toFixed}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ScansSection;
