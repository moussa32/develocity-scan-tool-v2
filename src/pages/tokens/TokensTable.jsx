// import { useEffect } from "react";
import { Link } from "react-router-dom";
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

const TableFooter = ({ renderPerPage = 0, maxCount = 0 }) => {
  return (
    <div className={styles.tableFooter}>
      Showing {renderPerPage} out of {maxCount}
    </div>
  );
};

const TokensTable = ({
  tokenList,
  isVerifyied,
  counts,
  onChangePage,
  currentPage,
}) => {
  // let [arr, setArr] = useState([]);
  const [renderedItems, setRenderedItems] = useState(50);

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
      fixed: "left",
      filters: [{ text: "Verified Tokens", value: true }],
      onFilter: (value, record) => record.isNotListed === value,
      width: window.innerWidth < 400 ? 150 : 222,
      render: (value, record) => (
        <div className={styles.tokenRecord_tokenCell}>
          {value?.logo ? (
            <img
              className={`${styles.tokenRecord_icon} ${styles.tokenRecord_icon_ltr}`}
              src={value?.logo}
              alt={value?.name}
            />
          ) : (
            <span
              className={`${styles.tokenRecord_iconLetter} ${styles.tokenRecord_icon_ltr}`}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.183"
            height="16.185"
            viewBox="0 0 16.183 16.185"
          >
            <g
              id="Binance_Coin_BNB_"
              data-name="Binance Coin (BNB)"
              transform="translate(0)"
            >
              <path
                id="Binance_Coin_BNB_2"
                data-name="Binance Coin (BNB)"
                d="M15.941,10.05A8.089,8.089,0,1,1,10.048.242a8.09,8.09,0,0,1,5.893,9.808h0Z"
                transform="translate(0 0)"
                fill="#2b2e35"
              />
              <path
                id="Binance_Coin_BNB_3"
                data-name="Binance Coin (BNB)"
                d="M2.095,7.528l0,0L3.323,6.3h0l2.11,2.11L7.544,6.3,8.773,7.526h0L5.433,10.866ZM8.41,5.434,9.638,4.206l1.228,1.228L9.638,6.661ZM0,5.433,1.228,4.2,2.456,5.433,1.228,6.661ZM5.433,2.456l-2.11,2.11h0L2.095,3.338,5.433,0,8.772,3.339,7.544,4.567Z"
                transform="translate(2.587 2.731)"
                fill="#fcc513"
              />
              <path
                id="Binance_Coin_BNB_4"
                data-name="Binance Coin (BNB)"
                d="M2.474,1.237h0L1.238,0,.323.914h0l-.105.105L0,1.236l0,0,0,0L1.238,2.476,2.475,1.238h0"
                transform="translate(6.855 6.854)"
                fill="#fcc513"
              />
            </g>
          </svg>

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
                defaultPageSize: 5,
                size: 5,
                onChange: (page) => onChangePage(page),
                total: counts,
              }}
              className="tokenListTable"
              scroll={{ x: window.innerWidth < 500 ? "100%" : "900px" }}
              footer={() => (
                <TableFooter
                  renderPerPage={renderedItems}
                  maxCount={tokenList.length}
                />
              )}
            />
          </ConfigProvider>
        )}
      </div>
    </>
  );
};

export default TokensTable;
