// import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Table, ConfigProvider } from "antd";
// import { useTranslation } from "react-i18next";
// import ar_EG from "antd/es/locale/ar_EG";
// import tr_TR from "antd/es/locale/tr_TR";
// import en_US from "antd/es/locale/en_US";
// import zh_CN from "antd/es/locale/zh_CN";
// import es_ES from "antd/es/locale/es_ES";
// import ru_RU from "antd/es/locale/ru_RU";
import styles from "./TokensTables.module.css";
import { getNetworkDetails } from "@/shared/util/tokenSupportedNetworks";

// const TableFooter = ({ renderPerPage = 0, maxCount = 0 }) => {
//   return (
//     <div className={styles.tableFooter}>
//       Showing {renderPerPage} out of {maxCount}
//     </div>
//   );
// };

const TokensTable = ({
  tokenList,
  isVerifyied,
  counts,
  onChangePage,
  currentPage,
}) => {
  // let [arr, setArr] = useState([]);
  const [renderedItems, setRenderedItems] = useState(50);
  const navigate = useNavigate();

  console.log(getNetworkDetails(tokenList[0]?.network?.name));

  //   const { i18n } = useTranslation();
  //   const direction = i18n.dir();

  //   const getTableLocal = useCallback(() => {
  //     switch ('en') {
  //       case "tr":
  //         return tr_TR;
  //       case "ar":
  //         return ar_EG;
  //       case "en":
  //         return en_US;
  //       case "ch":
  //         return zh_CN;
  //       case "ru":
  //         return ru_RU;
  //       case "es":
  //         return es_ES;

  //       default:
  //         return en_US;
  //     }
  //   }, [i18n]);

  // const filters = {
  //   all: (tokenList) => tokenList,
  //   verified: (tokenList) => tokenList?.filter((item) => item.isNotListed),
  //   notVerified: (tokenList) => tokenList?.filter((item) => !item.isNotListed),
  // };
  // function filteredTokenList() {
  //   if (isVerifyied == true) {
  //     setArr(filters["verified"](tokenList));
  //   } else if (isVerifyied == false) {
  //     setArr(filters["notVerified"](tokenList));
  //   } else {
  //     setArr(filters["all"](tokenList));
  //   }
  // }
  // useEffect(() => {
  //   filteredTokenList();
  // }, [isVerifyied]);

  const columns = [
    {
      title: "Token",
      dataIndex: "contractInfo",
      // fixed: "left",
      // filters: [{ text: "Verified Tokens", value: true }],
      onFilter: (value, record) => record.isNotListed === value,
      // width: window.innerWidth < 400 ? 150 : 222,
      render: (value, record) => (
        <div className={`${styles.tokenRecord_tokenCell} gap-2`}>
          {value?.logo ? (
            <img
              className={`${styles.tokenRecord_icon} ${styles.tokenRecord_icon_ltr} w-7 h-7 flex-[0_0_28px]`}
              src={value?.logo}
              alt={value?.name}
            />
          ) : (
            <span
              className={`${styles.tokenRecord_iconLetter} ${styles.tokenRecord_icon_ltr} w-7 h-7 flex-[0_0_28px]`}
            >
              {value?.name?.charAt(0)}
            </span>
          )}
          <h3 className={styles.tokenRecord_name}>{value?.name}</h3>
          {record?.isNotListed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#9F4AE8"
              viewBox="0 0 16 16"
              className={`${styles.tokenRecord_verifyIcon} ${styles.tokenRecord_verifyIcon_ltr}`}
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
      render: (value) => (
        <span
          className={`${styles.tokenRecord_score} ${
            value?.toFixed() > 85
              ? styles.tokenRecord_trustScore
              : value?.toFixed() <= 85 && value?.toFixed() >= 60
              ? styles.tokenRecord_infoScore
              : styles.tokenRecord_dangerScore
          }`}
        >
          {value.toFixed()}
        </span>
      ),
      sorter: (a, b) => {
        return a?.contractScan - b?.contractScan;
      },
    },
    {
      title: "Scans",
      dataIndex: "interest",
      width: 95,
      render: (value, record, index) => {
        return <>{value}</>;
      },
      sorter: (a, b) => {
        return a?.interest - b?.interest;
      },
    },
    // {
    //   title: "Rank",
    //   width: 99,
    //   dataIndex: "rank",
    //   render: (value) => {
    //     return <div># {value}</div>;
    //   },
    // },
    {
      title: "Price",
      width: 136,
      dataIndex: "contractInfo",
      dataIndex: "contractInfo",
      sorter: (a, b) => {
        return a?.contractInfo.current_price - b?.contractInfo.current_price;
      },
      render: (value) => {
        const numberConverter = new Intl.NumberFormat("en", {
          currency: "USD",
        }).format(value?.current_price);
        return <>${numberConverter}</>;
      },
    },
    {
      title: "Market Cap",
      width: 160,
      dataIndex: "contractInfo",
      sorter: (a, b) => {
        return a?.contractInfo.market_cap - b?.contractInfo.market_cap;
      },
      render: (value) => {
        const numberConverter = new Intl.NumberFormat("en", {
          currency: "USD",
        }).format(value?.market_cap);
        return <>${numberConverter}</>;
      },
    },
    {
      title: "Total Supply",
      width: 136,
      dataIndex: "contractInfo",
      render: (value, record, index) => (
        <>{Number(value?.totalSupply).toFixed(2)}</>
      ),
    },
    {
      title: "Network",
      width: 85,
      dataIndex: "contractInfo",
      render: (value, record, index) => (
        <div className={styles.networkCell}>
          {record?.network ? (
            <img
              className="w-4 h-4 rounded-full"
              src={getNetworkDetails(record?.network?.name)?.icon}
            />
          ) : null}

          <span>{getNetworkDetails(record?.network?.name)?.shortName}</span>
        </div>
      ),
    },
    {
      title: "Full Report",
      width: 100,
      dataIndex: "contractAddress",
      render: (contractAddress, record) => (
        <>
          <Link
            className={styles.fullReport}
            to={`/token/${
              getNetworkDetails(record?.network?.name)?.shortName
            }/${record?.contractInfo?.contractAddress}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.56"
              height="7.75"
              viewBox="0 0 9.56 7.75"
            >
              <path
                id="noun-arrow-3078248"
                d="M4.649,6.7,6.734,4.617H0V3.134H6.669L4.584,1.049,5.632,0,9.56,3.888,5.7,7.75Z"
                fill="#888"
                fill-rule="evenodd"
              />
            </svg>
          </Link>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="pb-10">
        {tokenList && tokenList.length > 0 && (
          <ConfigProvider direction="ltr">
            <Table
              bordered={false}
              dataSource={tokenList}
              columns={columns}
              pagination={{
                showSizeChanger: false,
                current: currentPage,
                showQuickJumper: false,
                defaultPageSize: 5,
                size: 5,
                onChange: (page) => onChangePage(page),
                total: counts,
              }}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) =>
                    navigate(
                      `/token/${
                        getNetworkDetails(record?.network?.name)?.shortName
                      }/${record?.contractInfo?.contractAddress}`
                    ),
                };
              }}
              className="tokenListTable"
              scroll={{ x: window.innerWidth < 500 ? "100%" : "900px" }}
              // footer={() => (
              //   <TableFooter
              //     renderPerPage={renderedItems}
              //     maxCount={tokenList.length}
              //   />
              // )}
            />
          </ConfigProvider>
        )}
      </div>
    </>
  );
};

export default TokensTable;
