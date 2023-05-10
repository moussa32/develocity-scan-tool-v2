import React, { useEffect } from "react";
// import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import styles from "./TokenTable.module.css";
import "../../Token/WalletsTable/WalletsTable.css";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
// import TokenTable from "../../Token/TokenTable";
// import Table from "../../Table/Table";
import { Table, ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import ar_EG from "antd/es/locale/ar_EG";
import tr_TR from "antd/es/locale/tr_TR";
import en_US from "antd/es/locale/en_US";
import zh_CN from "antd/es/locale/zh_CN";
import es_ES from "antd/es/locale/es_ES";
import ru_RU from "antd/es/locale/ru_RU";

import { useCallback } from "react";

const TableFooter = ({ renderPerPage = 0, maxCount = 0 }) => {
  return (
    <div className={styles.tableFooter}>
      Showing {renderPerPage} out of {maxCount}
    </div>
  );
};

const TokensTable = ({ tokenList, isVerifyied }) => {
  const { i18n } = useTranslation();
  let [arr, setArr] = useState([]);
  const direction = i18n.dir();

  const getTableLocal = useCallback(() => {
    switch (i18n.language) {
      case "tr":
        return tr_TR;
      case "ar":
        return ar_EG;
      case "en":
        return en_US;
      case "ch":
        return zh_CN;
      case "ru":
        return ru_RU;
      case "es":
        return es_ES;

      default:
        return en_US;
    }
  }, [i18n]);
  console.log(getTableLocal());

  const navigate = useNavigate();
  // const columns = [
  //   // {
  //   //     dataField: "hashNumber",
  //   //     text: "#",
  //   // },

  //   {
  //     dataField: "token",
  //     text: "token",

  //     formatter: (cell, row) => {
  //       return (
  //         <Link to={`/token/${row?.contractAddress}`} className="text-decoration-none" style={{ color: "#888888" }}>
  //           <div className={styles.container_token}>
  //             <div className="d-flex">
  //               <span className={styles.info}>
  //                 {row?.contractInfo?.logo ? (
  //                   <img src={row?.contractInfo?.logo} alt={row.token} />
  //                 ) : (
  //                   <div className={styles.icon_token_letter}>
  //                     <h6 className={styles.icon_token_text}>{row.contractInfo?.name.charAt(0)}</h6>
  //                   </div>
  //                 )}
  //                 <div className={`styles.name_sponserd`}>
  //                   <span className={styles.name}>{row.contractInfo?.name}</span>
  //                   {row?.contractScan === 0 && <span className={`py-1 px-2 me-2 ${styles.isScam}`}>Scam</span>}
  //                   {row?.sponsor && (
  //                     <div className={styles.ribbon}>
  //                       <span className={styles.sponsoredFlag}></span>
  //                     </div>
  //                   )}

  //                   {row?.sponsor && <span className={styles.sponsoredNote}>sponsered</span>}
  //                 </div>

  //                 {/* <img src={require('../../../assets/images/verification.png')} alt={row.token} style={{ width: '16px', height: '16px' }} /> */}
  //               </span>
  //               <span className="ms-2">
  //                 {
  //                   row.isNotListed ? (
  //                     <>
  //                       <span className=" me-3 d-inline-block" style={{ marginTop: "3px" }}>
  //                         <svg
  //                           xmlns="http://www.w3.org/2000/svg"
  //                           width="14"
  //                           height="14"
  //                           fill="#9F4AE8"
  //                           className="bi bi-patch-check-fill"
  //                           viewBox="0 0 16 16"
  //                         >
  //                           <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
  //                         </svg>
  //                       </span>
  //                     </>
  //                   ) : null
  //                   // <span className={` me-3`} >
  //                   //     <svg
  //                   //         xmlns="http://www.w3.org/2000/svg"
  //                   //         width="14"
  //                   //         height="14"
  //                   //         fill="#DFDFE4"
  //                   //         className="bi bi-patch-check-fill"
  //                   //         viewBox="0 0 16 16"
  //                   //     >
  //                   //         <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
  //                   //     </svg>
  //                   // </span>
  //                 }
  //               </span>
  //             </div>
  //           </div>
  //         </Link>
  //       );
  //     },
  //   },
  //   //coin type
  //   {
  //     dataField: "category",
  //     text: "Category",
  //     formatter: (cell, row) => {
  //       return (
  //         <div className={styles.scans}>
  //           {row?.interest && (
  //             <div className={styles.scans}>
  //               <h6 className={styles.icon_token_text} style={{ color: "lightsalmon" }}>
  //                 BTC
  //               </h6>
  //             </div>
  //           )}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     dataField: "score",
  //     text: "Score",
  //     formatter: (cell, row) => {
  //       return (
  //         <div
  //           style={
  //             row.contractScan.toFixed(0) >= 85
  //               ? {
  //                   color: "#EA3943",
  //                   backgroundColor: "rgba(234, 57, 67, .25)",
  //                   display: "flex",
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   width: "30px",
  //                   height: "20px",
  //                   fontFamily: "SF Pro Display Medium",
  //                   fontSize: "12px",
  //                 }
  //               : row.contractScan.toFixed(0) <= 84 && row.contractScan.toFixed(0) >= 60
  //               ? {
  //                   color: "#F5A341",
  //                   backgroundColor: "rgba(245, 163, 65, .25)",
  //                   display: "flex",
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   width: "30px",
  //                   height: "20px",
  //                   fontFamily: "SF Pro Display Medium",
  //                   fontSize: "12px",
  //                 }
  //               : {
  //                   color: "#16C784",
  //                   backgroundColor: "rgba(22, 199, 132, .25)",
  //                   display: "flex",
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   width: "30px",
  //                   height: "20px",
  //                   fontFamily: "SF Pro Display Medium",
  //                   fontSize: "12px",
  //                 }
  //           }
  //         >
  //           {row.contractScan.toFixed(0)}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     dataField: "scans",
  //     text: "Scans",
  //     sort: true,
  //     formatter: (cell, row) => {
  //       return (
  //         <div className={styles.scans}>
  //           {row?.interest && (
  //             <div className={styles.scans}>
  //               <h6 className={styles.icon_token_text}>{row?.interest}</h6>
  //             </div>
  //           )}
  //         </div>
  //       );
  //     },
  //   },

  //   // // {
  //   // //     dataField: "rank",
  //   // //     text: "Rank"
  //   // // },
  //   {
  //     dataField: "price",
  //     text: "Price",

  //     formatter: (cell, row) => {
  //       return (
  //         <div className={styles.sponsed}>
  //           {row?.contractInfo?.current_price && (
  //             <div className={styles.price}>
  //               <h6 className={styles.icon_token_text}>{row?.contractInfo?.current_price}</h6>
  //             </div>
  //           )}
  //         </div>
  //       );
  //     },
  //   },

  //   {
  //     dataField: "marketCap",
  //     text: "Market Cap",
  //     formatter: (cell, row) => {
  //       return (
  //         <div>
  //           {/* <span style={{ marginRight: '10px' }}>{row?.contractInfo?.market_cap?.toLocaleString("en-US")}</span> */}
  //           <span style={{ marginRight: "10px" }}>
  //             {Number(row?.contractInfo?.market_cap)?.toFixed(0).toLocaleString("en-US")}
  //           </span>
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     dataField: "totalSupply",
  //     text: "Total Supply",
  //     formatter: (cell, row) => {
  //       return (
  //         <div>
  //           {/* <span style={{ marginRight: '10px' }}>{Number(row.totalSupply)?.toLocaleString("en-US")}</span> */}
  //           <span style={{ marginRight: "10px" }}>
  //             {Number(row.contractInfo?.totalSupply)?.toLocaleString("en-US")}
  //           </span>
  //         </div>
  //       );
  //     },
  //   },
  //   // {
  //   //     dataField: "network",
  //   //     text: "Network",

  //   //     formatter: (cell, row) => {
  //   //         return (
  //   //             <div>
  //   //                 <img src={require('../../../assets/images/tron.png')} alt={row.token} style={{ width: '24px', height: '24px' }} />
  //   //                 <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.token}</span>
  //   //             </div>
  //   //         )
  //   //     }

  //   // },
  //   {
  //     dataField: "fullReport",
  //     text: "Full Report",
  //     formatter: (cell, row) => {
  //       return (
  //         // <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.contractInfo?.current_price}</span>
  //         <button
  //           className={`btn border-0 ${styles.btn_fullreport}`}
  //           onClick={() => navigate(`/token/${row?.contractAddress}`)}
  //         >
  //           <img
  //             src={require("../../../assets/images/arrowRight.png")}
  //             alt={row?.contractInfo?.name}
  //             style={{ width: "9px", height: "7px", marginLeft: "15px" }}
  //           />
  //         </button>
  //       );
  //     },
  //   },
  // ];

  const newColumns = [
    {
      accessor: "id",
      text: "#",
      Cell: ({ row }) => {
        console.log(row.original);
      },
    },
    {
      accessor: "token",
      Header: "token",
      Cell: ({ row }) => {
        return (
          <Link
            to={`/token/${row.original?.contractAddress}`}
            className="text-decoration-none"
            style={{ color: "#888888" }}
          ></Link>
        );
      },
    },
    {
      accessor: "score",
      Header: "Score",
      Cell: ({ row }) => {
        return (
          <div
            style={
              row.original.contractScan.toFixed(0) >= 85
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
                : row.original.contractScan.toFixed(0) <= 84 && row.original.contractScan.toFixed(0) >= 60
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
            {row.original.contractScan.toFixed(0)}
          </div>
        );
      },
    },
    {
      accessor: "scans",
      Header: "Scans",
      sort: true,
      Cell: ({ row }) => {
        return <>{row.original?.interest && <>{row.original?.interest}</>}</>;
      },
    },
    {
      accessor: "price",
      Header: "Price",
      Cell: ({ row }) => {
        return <>{row.original?.contractInfo?.current_price && <>{row.original?.contractInfo?.current_price}</>}</>;
      },
    },
    {
      accessor: "marketCap",
      Header: "Market Cap",
      Cell: ({ row }) => {
        return (
          <>
            {/* <span style={{ marginRight: '10px' }}>{row?.contractInfo?.market_cap?.toLocaleString("en-US")}</span> */}
            {Number(row.original?.contractInfo?.market_cap)?.toFixed(0).toLocaleString("en-US")}
          </>
        );
      },
    },
    {
      accessor: "totalSupply",
      Header: "Total Supply",
      Cell: ({ row }) => {
        return <>{Number(row.original.contractInfo?.totalSupply)?.toLocaleString("en-US")}</>;
      },
    },
    {
      accessor: "network",
      Header: "Network",
      Cell: ({ row }) => <></>,
    },
    {
      accessor: "fullReport",
      Header: "Full Report",
      Cell: ({ row }) => {
        return (
          <button onClick={() => navigate(`/token/${row.original?.contractAddress}`)}>
            <img
              src={require("../../../assets/images/arrowRight.png")}
              alt={row.original?.contractInfo?.name}
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
  }
  useEffect(() => {
    filteredTokenList();
  }, [isVerifyied]);

  const rowClasses = row => {
    if (row?.sponsor) {
      return styles.sponsoredRow;
    } else if (row?.contractScan === 0) {
      return styles.scamRow;
    } else {
      return "";
    }
  };

  const handleFixedColumnDirection = useCallback(() => {
    if (direction === "rtl") {
      return "right";
    } else {
      return "left";
    }
  }, [direction]);

  console.log(handleFixedColumnDirection());

  const columns = [
    {
      title: "Token",
      dataIndex: "contractInfo",
      fixed: handleFixedColumnDirection(),
      filters: [{ text: "Verified Tokens", value: true }],
      onFilter: (value, record) => record.isNotListed === value,
      width: window.innerWidth < 400 ? 150 : 222,
      render: (value, record) => (
        <div className={styles.tokenRecord_tokenCell}>
          {value.logo ? (
            <img
              className={`${styles.tokenRecord_icon} ${
                direction === "rtl" ? styles.tokenRecord_icon_rtl : styles.tokenRecord_icon_ltr
              }`}
              src={value.logo}
              alt={value.name}
            />
          ) : (
            <span
              className={`${styles.tokenRecord_iconLetter} ${
                direction === "rtl" ? styles.tokenRecord_icon_rtl : styles.tokenRecord_icon_ltr
              }`}
            >
              {value.name.charAt(0)}
            </span>
          )}
          <h3 className={styles.tokenRecord_name}>{value.name}</h3>
          {record.isNotListed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#9F4AE8"
              viewBox="0 0 16 16"
              className={`${styles.tokenRecord_verifyIcon} ${
                direction === "rtl" ? styles.tokenRecord_verifyIcon_rtl : styles.tokenRecord_verifyIcon_ltr
              }`}
            >
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
          )}
        </div>
      ),
    },
    {
      title: "Score",
      dataIndex: "contractScan",
      width: 101,
      render: (value, record, index) => (
        <span
          className={`${styles.tokenRecord_score} ${
            value.toFixed() >= 85
              ? styles.tokenRecord_trustScore
              : value.toFixed() < 85 && value.toFixed() >= 60
              ? styles.tokenRecord_infoScore
              : styles.tokenRecord_dangerScore
          }`}
        >
          {value.toFixed()}
        </span>
      ),
      sorter: (a, b) => {
        return a.contractScan - b.contractScan;
      },
    },
    {
      title: "Scans",
      dataIndex: "interest",
      width: 95,
      sorter: (a, b) => {
        return a.interest - b.interest;
      },
    },
    {
      title: "Rank",
      width: 99,
      dataIndex: "rank",
    },
    {
      title: "Price",
      width: 136,
      dataIndex: "contractInfo",
      dataIndex: "contractInfo",
      render: value => {
        const numberConverter = new Intl.NumberFormat(i18n.language, { currency: "USD" }).format(value.current_price);
        return <>${numberConverter}</>;
      },
    },
    {
      title: "Market Cap",
      width: 160,
      dataIndex: "contractInfo",
      render: value => {
        const numberConverter = new Intl.NumberFormat(i18n.language, { currency: "USD" }).format(value.market_cap);
        return <>${numberConverter}</>;
      },
    },
    {
      title: "Total Supply",
      width: 136,
      dataIndex: "contractInfo",
      render: (value, record, index) => <>{value.totalSupply}</>,
    },
    {
      title: "Network",
      width: 85,
      dataIndex: "contractInfo",
      render: (value, record, index) => (
        <div className={styles.networkCell}>
          <img
            src={require("../../../assets/images/BSC.png")}
            alt={record.contractInfo.token}
            style={{ width: "16px", height: "16px" }}
          />
          <span>BSC</span>
        </div>
      ),
    },
    {
      title: "Full Report",
      width: 100,
      dataIndex: "contractAddress",
      render: (contractAddress, record) => (
        <>
          <Link className={styles.fullReport} to={`/token/${contractAddress}`}>
            <img
              src={require("../../../assets/images/arrowRight.png")}
              alt={record.contractInfo.name}
              style={{ width: "9px", height: "7px", marginLeft: "15px" }}
            />
          </Link>
        </>
      ),
    },
  ];

  return (
    <>
      {arr && arr.length > 0 && (
        <ConfigProvider locale={getTableLocal()}>
          <Table
            dataSource={arr}
            columns={columns}
            className="tokenListTable"
            scroll={{ x: window.innerWidth < 500 ? "100%" : "900px" }}
            footer={() => <TableFooter renderPerPage={10} maxCount={578} />}
          />
        </ConfigProvider>
      )}
      {/* <BootstrapTable
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
      /> */}
    </>
  );
};

export default TokensTable;
