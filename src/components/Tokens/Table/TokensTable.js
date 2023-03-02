import React, { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import styles from "./TokenTable.module.css";
import "../../Token/WalletsTable/WalletsTable.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const TokensTable = ({ tokenList, isVerifyied }) => {
  let [arr, setArr] = useState([]);
  // console.log('true: ', isVerifyied)
  const navigate = useNavigate();
  const columns = [
    // {
    //     dataField: "hashNumber",
    //     text: "#",
    // },

    {
      dataField: "token",
      text: "token",

      formatter: (cell, row) => {
        return (
          <Link to={`/token/${row?.contractAddress}`} className="text-decoration-none" style={{ color: "#888888" }}>
            <div className={styles.container_token}>
              <div className="d-flex">
                <span className={styles.info}>
                  {row?.contractInfo?.logo ? (
                    <img src={row?.contractInfo?.logo} alt={row.token} />
                  ) : (
                    <div className={styles.icon_token_letter}>
                      <h6 className={styles.icon_token_text}>{row.contractInfo?.name.charAt(0)}</h6>
                    </div>
                  )}
                  <div className={`styles.name_sponserd`}>
                    <span className={styles.name}>{row.contractInfo?.name}</span>
                    {row?.contractScan === 0 && <span className={`py-1 px-2 me-2 ${styles.isScam}`}>Scam</span>}
                    {row?.sponsor && (
                      <div className={styles.ribbon}>
                        <span className={styles.sponsoredFlag}></span>
                      </div>
                    )}

                    {row?.sponsor && <span className={styles.sponsoredNote}>sponsered</span>}
                  </div>

                  {/* <img src={require('../../../assets/images/verification.png')} alt={row.token} style={{ width: '16px', height: '16px' }} /> */}
                </span>
                <span className="ms-2">
                  {
                    row.isNotListed ? (
                      <>
                        <span className=" me-3 d-inline-block" style={{ marginTop: "3px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="#9F4AE8"
                            className="bi bi-patch-check-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                          </svg>
                        </span>
                      </>
                    ) : null
                    // <span className={` me-3`} >
                    //     <svg
                    //         xmlns="http://www.w3.org/2000/svg"
                    //         width="14"
                    //         height="14"
                    //         fill="#DFDFE4"
                    //         className="bi bi-patch-check-fill"
                    //         viewBox="0 0 16 16"
                    //     >
                    //         <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    //     </svg>
                    // </span>
                  }
                </span>
              </div>
            </div>
          </Link>
        );
      },
    },
    //coin type
    {
      dataField: "category",
      text: "Category",
      formatter: (cell, row) => {
        return (
          <div className={styles.scans}>
            {row?.interest && (
              <div className={styles.scans}>
                <h6 className={styles.icon_token_text} style={{ color: "lightsalmon" }}>
                  BTC
                </h6>
              </div>
            )}
          </div>
        );
      },
    },
    {
      dataField: "score",
      text: "Score",
      formatter: (cell, row) => {
        return (
          <div
            style={
              row.contractScan.toFixed(0) >= 85
                ? {
                    color: "#EA3943",
                    backgroundColor: "rgba(234, 57, 67, .25)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "20px",
                    fontFamily: "SF Pro Display Medium",
                    fontSize: "12px",
                  }
                : row.contractScan.toFixed(0) <= 84 && row.contractScan.toFixed(0) >= 60
                ? {
                    color: "#F5A341",
                    backgroundColor: "rgba(245, 163, 65, .25)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "20px",
                    fontFamily: "SF Pro Display Medium",
                    fontSize: "12px",
                  }
                : {
                    color: "#16C784",
                    backgroundColor: "rgba(22, 199, 132, .25)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30px",
                    height: "20px",
                    fontFamily: "SF Pro Display Medium",
                    fontSize: "12px",
                  }
            }
          >
            {row.contractScan.toFixed(0)}
          </div>
        );
      },
    },
    {
      dataField: "scans",
      text: "Scans",
      sort: true,
      formatter: (cell, row) => {
        return (
          <div className={styles.scans}>
            {row?.interest && (
              <div className={styles.scans}>
                <h6 className={styles.icon_token_text}>{row?.interest}</h6>
              </div>
            )}
          </div>
        );
      },
    },

    // // {
    // //     dataField: "rank",
    // //     text: "Rank"
    // // },
    {
      dataField: "price",
      text: "Price",

      formatter: (cell, row) => {
        return (
          <div className={styles.sponsed}>
            {row?.contractInfo?.current_price && (
              <div className={styles.price}>
                <h6 className={styles.icon_token_text}>{row?.contractInfo?.current_price}</h6>
              </div>
            )}
          </div>
        );
      },
    },

    {
      dataField: "marketCap",
      text: "Market Cap",
      formatter: (cell, row) => {
        return (
          <div>
            {/* <span style={{ marginRight: '10px' }}>{row?.contractInfo?.market_cap?.toLocaleString("en-US")}</span> */}
            <span style={{ marginRight: "10px" }}>
              {Number(row?.contractInfo?.market_cap)?.toFixed(0).toLocaleString("en-US")}
            </span>
          </div>
        );
      },
    },
    {
      dataField: "totalSupply",
      text: "Total Supply",
      formatter: (cell, row) => {
        return (
          <div>
            {/* <span style={{ marginRight: '10px' }}>{Number(row.totalSupply)?.toLocaleString("en-US")}</span> */}
            <span style={{ marginRight: "10px" }}>
              {Number(row.contractInfo?.totalSupply)?.toLocaleString("en-US")}
            </span>
          </div>
        );
      },
    },
    // {
    //     dataField: "network",
    //     text: "Network",

    //     formatter: (cell, row) => {
    //         return (
    //             <div>
    //                 <img src={require('../../../assets/images/tron.png')} alt={row.token} style={{ width: '24px', height: '24px' }} />
    //                 <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.token}</span>
    //             </div>
    //         )
    //     }

    // },
    {
      dataField: "fullReport",
      text: "Full Report",
      formatter: (cell, row) => {
        return (
          // <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.contractInfo?.current_price}</span>
          <button
            className={`btn border-0 ${styles.btn_fullreport}`}
            onClick={() => navigate(`/token/${row?.contractAddress}`)}
          >
            <img
              src={require("../../../assets/images/arrowRight.png")}
              alt={row?.contractInfo?.name}
              style={{ width: "9px", height: "7px", marginLeft: "15px" }}
            />
          </button>
        );
      },
    },
  ];

  const filters = {
    all: tokenList => tokenList,
    verified: tokenList => tokenList?.filter(item => item.isNotListed),
    notVerified: tokenList => tokenList?.filter(item => !item.isNotListed),
  };
  function filteredTokenList() {
    if (isVerifyied == true) {
      setArr(filters["verified"](tokenList));
    } else if (isVerifyied == false) {
      setArr(filters["notVerified"](tokenList));
    } else {
      setArr(filters["all"](tokenList));
    }

    // console.log("arr", arr)
  }
  useEffect(() => {
    filteredTokenList();
  }, [isVerifyied]);
  // console.log("arr", arr)

  const rowClasses = row => {
    if (row?.sponsor) {
      return styles.sponsoredRow;
    } else if (row?.contractScan === 0) {
      return styles.scamRow;
    } else {
      return "";
    }
  };
  return (
    <div className="tokens_table">
      <BootstrapTable
        keyField="id"
        data={arr}
        columns={columns}
        hover={true}
        // striped={true}
        bordered={false}
        loading={true}
        alwaysShowAllBtns={true}
        rowClasses={rowClasses}
        sort={{ dataField: "scans", order: "asc" }}
      />
    </div>
  );
};

export default TokensTable;
