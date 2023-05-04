import { useSelector } from "react-redux";
import ListGroup from "../ListGroupReuse/ListGroup";
import { useTranslation } from "react-i18next";
import styles from "./LiquidityList.module.css";
import { useMemo } from "react";

export function LiquidityList() {
  const bscLiquidityScan = useSelector(state => state.bscLiquidityScan.bscLiquidity);
  const statusLiquidity = useSelector(state => state.bscLiquidityScan.loading);
  const { t } = useTranslation(["token", "common"]);

  // const bscLiquiditydata=bscLiquidityScan?.result
  const data = useMemo(
    () => [
      {
        name: t("token:burned_liquidity"),
        value: bscLiquidityScan ? Number(bscLiquidityScan.burnLiquidityPer).toFixed(2) : null,
      },
      {
        name: t("token:added_liquidity"),
        value: bscLiquidityScan ? Number(bscLiquidityScan.addLiquidityPer).toFixed(2) : null,
      },
      {
        name: t("token:removed_liquidity"),
        value: bscLiquidityScan ? Number(bscLiquidityScan.removeLiquidityPer).toFixed(2) : null,
      },
    ],
    [bscLiquidityScan]
  );

  if (statusLiquidity === false) return "";

  return (
    <>
      {(statusLiquidity === "success" || statusLiquidity === true) && (
        <div className="col-12 col-md-6" style={{ flex: "0 1 100%" }}>
          <h2 style={{ fontFamily: "SF Pro Display Medium", fontSize: "26px", color: "#888888", marginBottom: 0 }}>
            {t("common:liquidity_metrics")}
          </h2>
          <ListGroup listdata={data} title={t("token:liquidity")} info={t("token:infoDescription.liquidityInfo")} />
        </div>
      )}
      {/* <ListGroup listdata={bscLiquidityScan} title="Liquidity" /> */}
    </>
  );
}
