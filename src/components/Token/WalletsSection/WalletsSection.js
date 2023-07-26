import { Tabs, Tab } from "react-bootstrap";
import Wallet10Top from "../WalletsTable/Wallet10Top";
import WalletsTable from "../WalletsTable/WalletsTable";
import BSCTrasactionTable from "../WalletsTable/BSCTrasactionTable";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./WalletsSection.css";

const WalletsSection = () => {
  const topWalletData = useSelector(state => state.topWallet.topWallet);
  const bSCTrasaction = useSelector(state => state.bSCTrasaction.bSCTrasaction);
  const walletsData = useSelector(state => state.tokenOwner.tokenOwner);

  const { t } = useTranslation(["token"]);
  let Active =
    topWalletData?.ownerInfo?.top10LiquidityHolder?.length > 0
      ? "LiquidityWallets"
      : topWalletData?.topTenHolder?.length > 0
      ? "TokenTransactions"
      : "TopWallets";
  return (
    <div className="wallets_table wallet_table_td_width">
      <Tabs defaultActiveKey={Active} id="uncontrolled-tab-example">
        {/* {walletsData?.ownerInfo?.top10LiquidityHolder.length > 0 && (
          <Tab eventKey="LiquidityWallets" title={t("token:top10liquiditywallets")} className="h-50">
            <WalletsTable walletsData={walletsData} />
          </Tab>
        )} */}
        {topWalletData?.topTenHolder?.length > 0 && (
          <Tab eventKey="TopWallets" title={t("token:top10wallets")}>
            <Wallet10Top topWalletData={topWalletData} />
          </Tab>
        )}

        {bSCTrasaction?.tokenTransaction?.length > 0 && (
          <Tab eventKey="TokenTransactions" title={t("token:tokenTransactions")}>
            <BSCTrasactionTable bSCTrasaction={bSCTrasaction} />
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default WalletsSection;
