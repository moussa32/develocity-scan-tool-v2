import HeaderText from "../HeaderText/HeaderText";
import { Placeholder } from "../../common/Placeholder/Placeholder";
import { useTranslation } from "react-i18next";
import styles from "./ListGroup.module.css";

const ListGroup = ({ listdata, title, info }) => {
  const { t } = useTranslation(["token"]);
  const lang = localStorage.getItem("i18nextLng");
  // دي كل الداتا اللي بترجع من api
  // if (listdata) {
  //     console.log("listdata", listdata);
  // listdata.addLiquidityPer
  // listdata.removeLiquidityPer
  // listdata.burnLiquidityPer
  // }
  let stylingdata = {
    width: "100px",
    height: "20px",
  };

  return (
    <>
      <div className={`${lang === "ar" ? styles.title_rtl : styles.title_ltr}`}>
        <HeaderText nameHeader={title} title={info} />
      </div>

      <div className={`${styles.listItemContainer} ${lang === "ar" ? styles.groupCard_rtl : styles.groupCard_ltr}`}>
        {listdata ? (
          <>
            {listdata.map((i, index) => (
              <div key={index} className={`d-flex justify-content-between ${styles.listItem} `}>
                {i.value || i.value == 0 ? (
                  <>
                    <span>{i.name}</span>
                    {title === t("token:slippage") && <span>{i.value}%</span>}
                    {title === t("token:gas_fee") && <span>${i.value}</span>}
                    {title === t("token:liquidity") && <span>{i.value}%</span>}
                  </>
                ) : (
                  <>
                    <Placeholder styling={stylingdata} />
                    <Placeholder styling={{ width: "50px", height: "20px" }} />
                  </>
                )}
              </div>
            ))}
          </>
        ) : (
          "There is no list data"
        )}
      </div>
    </>
  );
};

export default ListGroup;
