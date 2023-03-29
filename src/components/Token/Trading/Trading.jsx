import { useSelector } from "react-redux";
import ListGroup from "../ListGroupReuse/ListGroup";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export function Trading() {
  const buySellBSCapi = useSelector(state => state.GetBuySellBSCdata.data);
  const statusBSCapi = useSelector(state => state.GetBuySellBSCdata.status);

  const { t } = useTranslation(["token"]);

  const buySellBSCdata = buySellBSCapi.result;

  const data = useMemo(
    () => [
      {
        name: t("token:buy"),
        value: buySellBSCdata ? buySellBSCdata.buyGasFeeUSD : null,
      },
      {
        name: t("token:sell"),
        value: buySellBSCdata ? buySellBSCdata.sellGasFeeUSD : null,
      },
      {
        name: t("token:gas"),
        value: buySellBSCdata ? buySellBSCdata.tranferGasFeeUSD : null,
      },
    ],
    [buySellBSCdata]
  );

  if (statusBSCapi === "failed") return "";

  return (
    <>
      {(statusBSCapi === "success" || statusBSCapi === "loading") && (
        <>
          <div className="col-12 col-md-6" style={{ flex: "0 1 100%" }}>
            <h2 style={{ fontFamily: "SF Pro Display Medium", fontSize: "26px", color: "#888888", marginBottom: 0 }}>
              {t("token:trading")}
            </h2>
            <ListGroup listdata={data} title={t("token:gas_fee")} info={t("token:infoDescription.gasFeeInfo")} />
          </div>
        </>
      )}
    </>
  );
}
