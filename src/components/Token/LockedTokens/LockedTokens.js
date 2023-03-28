import HeaderText from "../HeaderText/HeaderText";
import "./LockedTokens.css";
// import { useTranslation } from 'react-i18next';
import unicrypt from "../../../assets/unicrptLogo.png";
import TokenTable from "../TokenTable";

function getTimeStamp(milliSecond) {
  let date = new Date(milliSecond).toISOString().slice(0, 16).replace("T", " ");
  return date;
}
const columns = [
  {
    accessor: "network",
    Header: "Network",
    Cell: ({ value }) => {
      return (
        <div className="locked_tokens_network">
          <img className="logo" src={value === "unicrypt" ? unicrypt : unicrypt} alt="logo" width={100} />
          <p>{value}</p>
        </div>
      );
    },
  },
  {
    accessor: "address",
    Header: "Address",
  },
  {
    accessor: "tokens",
    Header: "Tokens",
    Cell: ({ value }) => {
      return (
        <div className="locked_tokens_tokens">
          <p className="tokens">{value}</p>
          {/* <p className='rate'>{row.rate}</p> */}
        </div>
      );
    },
  },
  {
    accessor: "unlockedOn",
    Header: "Unlocked on",
    Cell: ({ value }) => {
      return (
        <div className="locked_tokens_tokens">
          <p className="tokens">{getTimeStamp(value)}</p>
          {/* <p className='rate'>{row.rate}</p> */}
        </div>
      );
    },
  },
];

const LockedTokens = ({ LockedTokensData }) => {
  // const { t } = useTranslation(["token"])
  let LockedData = [];
  if (LockedTokensData?.APIsResult) {
    for (let i = 0; i < LockedTokensData.APIsResult.length; i++) {
      let id = i;
      let network = LockedTokensData?.APIsResult[i].network;
      let address =
        LockedTokensData?.APIsResult[i].lpAddress.substr(0, 5) +
        "..." +
        LockedTokensData?.APIsResult[i].lpAddress.substr(-5);
      // let rate = LockedTokensData.ownerInfo.lockedToken[i].lockedPercentage;
      let tokens = LockedTokensData?.APIsResult[i].lockedAmount;
      let image = LockedTokensData?.APIsResult[i].logoURL;
      let unlockedOn = LockedTokensData?.APIsResult[i].lockedDuration;
      LockedData.push({ id, network, address, tokens, unlockedOn, image });
    }
  }
  return (
    <>
      <HeaderText nameHeader="Locked Tokens" title="Welcome to develocity." />
      <TokenTable data={LockedData} columns={columns} />
    </>
  );
};

export default LockedTokens;
