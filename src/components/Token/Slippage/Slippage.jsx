import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBuySellBSCResult } from "../../../store/FetchBuySellBSC";
import ListGroup from "../ListGroupReuse/ListGroup";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Slippage() {
  const param = useParams();
  const contractAddress = param.contractAddress;
  const buySellBSCslippage = useSelector(state => state.GetBuySellBSCdata.data);
  const statusSlippage = useSelector(state => state.GetBuySellBSCdata.status);
  const { t } = useTranslation(["token"]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBuySellBSCResult(contractAddress));
  }, [dispatch, contractAddress]);
  const buySellBSCdataslippage = buySellBSCslippage.result;

  const data = [
    {
      name: t("token:buy"),
      value: buySellBSCdataslippage ? Number(buySellBSCdataslippage.buyTax).toFixed() : null,
    },
    {
      name: t("token:sell"),
      value: buySellBSCdataslippage ? Number(buySellBSCdataslippage.sellTax).toFixed() : null,
    },
  ];

  return (
    <>
      {(statusSlippage === "success" || statusSlippage === "loading") && (
        <div className="col">
          <ListGroup listdata={data} title={t("token:slippage")} info={t("token:infoDescription.slippageInfo")} />
        </div>
      )}

      {statusSlippage === "failed" && ""}
    </>
  );
}
