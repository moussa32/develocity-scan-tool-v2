import React, { useEffect } from "react";
import styles from "./Distribution.module.css";
import ReactApexChart from "react-apexcharts";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchDistribution } from "../../../store/FetchDistributionData";
import { useParams } from "react-router-dom";
import { Placeholder } from "../../common/Placeholder/Placeholder";
import { useTranslation } from "react-i18next";
import { ChartLoader } from "../../common/Placeholder/ChartLoader";
import HeaderText from "../HeaderText/HeaderText";
const Distribution = () => {
  const param = useParams();
  const contractAddress = param.contractAddress;
  const statusDist = useSelector(state => state.Dist.status);
  const dist = useSelector(state => state.Dist.data);
  const { t } = useTranslation(["token"]);
  const lang = localStorage.getItem("i18nextLng");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDistribution(contractAddress));
  }, [dispatch, contractAddress]);

  const distData = dist.result;

  // var options = {
  //   series: [
  //     distData ? Math.floor(distData.realholdersPercentage) : null,
  //      distData ? Math.round(distData.airdropHoldersPercentage) : null,
  //     distData ? Math.round(distData.shrinkHoldersPercentage): null
  //   ],
  //   labels:[t("token:Real_Holders") , t("token:Airdrop_holders") , t("token:Wallet_shrink")],
  //   dataLabels: {
  //     formatter: function (val) {
  //       return ("")
  //     }
  //   },
  //   chart: {
  //     type: 'donut',
  //   },
  //   responsive: [{
  //     breakpoint: 480,
  //     options: {
  //       chart: {
  //         width: 200
  //       }
  //     }
  //   }],
  //   legend: {
  //     show: false
  //   },
  //   tooltip: {
  //     enabled: false

  //   },
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         labels: {
  //           show: true,
  //           name: {
  //             show: true,
  //             fontSize: '22px',

  //             color: '#dfsda',
  //             offsetY: -10
  //           },
  //           value: {
  //             show: true,
  //             fontSize: '16px',

  //             color: undefined,
  //             offsetY: 8,
  //             formatter: function (val) {
  //               return `${val}%`
  //             }
  //           },
  //           total: {
  //             show: true,
  //             label: t("token:Total"),
  //             fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  //             color: '#373d3f',
  //             formatter: function (w) {
  //               return w.globals.seriesTotals.reduce((a, b) => {
  //                 const totalPercentage=parseInt(a)+parseInt(b);
  //                 return `${totalPercentage} %`
  //               }, 0)
  //             }
  //           }
  //         }
  //       }
  //     }
  //   },

  //   colors: ['#7BE1D9', '#4CD696', '#EC6666']
  // }

  var options = {
    series: [
      distData ? Math.floor(distData.realholdersPercentage) : null,
      distData ? Math.round(distData.airdropHoldersPercentage) : null,
      distData ? Math.round(distData.shrinkHoldersPercentage) : null,
    ],
    labels: [t("token:Real_Holders"), t("token:Airdrop_holders"), t("token:Wallet_shrink")],
    dataLabels: {
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
      dropShadow: {
        enabled: false,
        top: 10,
        left: 10,
        blur: 1,
        color: "#000",
        opacity: 0.45,
      },
      // formatter: function (val) {
      //   return val + "%"
      // }
    },

    legend: {
      show: true,
      position: "bottom",
    },
    tooltip: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        // customScale: 1.5,
        donut: {
          size: "40%",
          hollow: {
            margin: 15,
            size: "50%",
          },
          labels: {
            show: true,
            name: {
              show: false,
              fontSize: "22px",
              color: "#dfsda",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "16px",
              color: undefined,
              offsetY: 8,
              formatter: function (val) {
                return `${val}%`;
              },
            },
          },
        },
      },
    },
    // colors: ['#7BE1D9', '#4CD696', '#EC6666']
    colors: ["#F5A341", "#4CD696", "#EC6666"],
  };

  return (
    <>
      <div>
        <>
          <h1 className={styles.title}>{t("token:dist_title")}</h1>
          <h6 className={styles.secondTitle}>
            <div className={`text-muted  mt-3 ${lang === "ar" ? styles.title_rtl : styles.title_ltr}`}>
              <HeaderText nameHeader={t("token:holders_title")} title={t("token:holders_tooltip")} />
            </div>
          </h6>
        </>

        {statusDist === "success" && (
          <div className={styles.distChartDiv}>
            <div className={styles.chartInfo}>
              <div className={styles.infoRecord}>
                <div className={styles.infoTitle}>
                  <h6>
                    <FaCircle className={lang === "ar" ? styles.circleIconFour_rtl : styles.circleIconFour_ltr} />
                    {t("token:totalHolder")}
                  </h6>
                  <span className={styles.chartNumber}>{distData ? distData.totalHolder : null}</span>
                </div>
                {/* <p>{t("token:Wallets_with_small_amounts_after_selling")}</p> */}
              </div>
              <div className={styles.infoRecord}>
                <div className={styles.infoTitle}>
                  <h6>
                    <FaCircle className={lang === "ar" ? styles.circleIconOne_rtl : styles.circleIconOne_ltr} />
                    {t("token:Real_Holders")}
                  </h6>
                  <span className={styles.chartNumber}>{distData ? distData.realholders : null}</span>
                </div>
                <p>{t("token:The_actual_number_of_token_holders")} </p>
              </div>
              <div className={styles.infoRecord}>
                <div className={styles.infoTitle}>
                  <h6>
                    <FaCircle className={lang === "ar" ? styles.circleIconTwo_rtl : styles.circleIconTwo_ltr} />
                    {t("token:Airdrop_holders")}
                  </h6>
                  <span className={styles.chartNumber}>{distData ? distData.airdropHolders : null}</span>
                </div>
                <p>{t("token:sent_token")}</p>
              </div>
              <div className={styles.infoRecord}>
                <div className={styles.infoTitle}>
                  <h6>
                    <FaCircle className={lang === "ar" ? styles.circleIconThree_rtl : styles.circleIconThree_ltr} />
                    {t("token:Wallet_shrink")}
                  </h6>
                  <span className={styles.chartNumber}>{distData ? distData.shrinkHolders : null}</span>
                </div>
                <p>{t("token:Wallets_with_small_amounts_after_selling")}</p>
              </div>
            </div>
            <div className={styles.chart} id="chart">
              {/* <ReactApexChart options={options} series={options.series} type="pie" /> */}

              <ReactApexChart options={options} series={options.series} type="donut" width={300} />
            </div>
          </div>
        )}
        {statusDist === "loading" && (
          <div className={styles.distChartDiv}>
            <div className={styles.chartInfo}>
              <div className={styles.infoRecord}>
                <div className={styles.infoTitle}>
                  <h6>
                    <FaCircle className={styles.circleIconOne} />
                    real holders
                  </h6>
                  <span className={styles.chartNumber}>
                    <Placeholder styling={{ width: "50px", height: "20px" }} />{" "}
                  </span>
                </div>
                <p>The actual number of token holders </p>
              </div>
              <div className={styles.infoRecord}>
                <div className={styles.infoTitle}>
                  <h6>
                    <FaCircle className={styles.circleIconTwo} />
                    airdrop holders
                  </h6>
                  <span className={styles.chartNumber}>
                    <Placeholder styling={{ width: "50px", height: "20px" }} />{" "}
                  </span>
                </div>
                <p>Tokens are sent by token owner</p>
              </div>
              <div className={styles.infoRecord}>
                <div className={styles.infoTitle}>
                  <h6>
                    <FaCircle className={styles.circleIconThree} />
                    wallet shrink
                  </h6>
                  <span className={styles.chartNumber}>
                    <Placeholder styling={{ width: "50px", height: "20px" }} />{" "}
                  </span>
                </div>
                <p>wallets with small amounts after selling</p>
              </div>
              <div className={styles.infoRecord}>
                <div className={styles.infoTitle}>
                  <h6>
                    <FaCircle className={styles.circleIconThree} />
                    wallet shrink
                  </h6>
                  <span className={styles.chartNumber}>
                    <Placeholder styling={{ width: "50px", height: "20px" }} />{" "}
                  </span>
                </div>
                {/* <p>wallets with small amounts after selling</p> */}
              </div>
            </div>
            <div className={styles.chart} id="chart">
              {/* <Placeholder styling={ {width:'150px',height:'150px', borderRadius:'50%'}}/> */}
              <ChartLoader
                styling={{
                  outerwidth: "150px",
                  outerheight: "150px",
                  innerwidth: "110px",
                  innerheight: "110px",
                  bginner: "#fff",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {statusDist === "failed" && null}
    </>
  );
};

export default Distribution;
