import HeaderText from "../HeaderText/HeaderText";
import { useTranslation } from "react-i18next";
import TokenTable from "../TokenTable";
import "./TokenOwner.css";

const TokenOwner = ({ ownerInfo }) => {
  const { t } = useTranslation(["token"]);

  const columns = [
    {
      accessor: "address",
      Header: t("token:address"),
    },
    {
      accessor: "ownership",
      Header: t("token:ownership"),
      Cell: ({ value }) => {
        return (
          <div>
            {value.ownership ? (
              <span className="token_owner_rennounced">Rennounced</span>
            ) : (
              <span className="token_owner_not_rennounced">Not Rennounced</span>
            )}
          </div>
        );
      },
    },
    {
      accessor: "liquidity",
      Header: t("token:liquidity"),
      Cell: ({ value }) => {
        console.log(value);
        return (
          <div className="token_owner_liquidity">
            {value.liquidity !== "NaN" ? (
              <p className="liquidity" style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
                {value.liquidity}
              </p>
            ) : (
              <p className="liquidity">0</p>
            )}

            <p className="rate"> {value.rate}%</p>
          </div>
        );
      },
    },
    {
      accessor: "tokens",
      Header: t("token:tokens"),
      Cell: ({ value }) => {
        return (
          <div className="token_owner_tokens">
            <p className="tokens">{value.tokens}</p>
            <p className="rate">{value.rate}%</p>
            {/* <p className='price'>{value.tokens.price}</p> */}
          </div>
        );
      },
    },
  ];
  const OwnerData = [];

  if (ownerInfo) {
    const address = ownerInfo.ownerAddress.substr(0, 4) + "..." + ownerInfo.ownerAddress.substr(-6);
    const renounceOwnership = ownerInfo.renounceOwnership;
    const tokenBalance = ownerInfo.tokenBalance;
    const tokenBalance_percentage = ownerInfo.tokenBalance_percentage.toLocaleString("en-US");
    const LPtokenBalance = ownerInfo.LPtokenBalance.toLocaleString("en-US");
    const LPtokenBalance_percentage = ownerInfo.LPtokenBalance_percentage.toLocaleString("en-US");
    OwnerData.push({
      address: address,
      ownership: renounceOwnership,
      liquidity: { liquidity: tokenBalance, rate: tokenBalance_percentage },
      tokens: { tokens: LPtokenBalance, rate: LPtokenBalance_percentage, price: "287,547$" },
    });
  }

  return (
    <>
      {OwnerData.length > 0 ? (
        <>
          <HeaderText nameHeader={t("token:token_owner")} title="Welcome to develocity." />
          <TokenTable data={OwnerData} columns={columns} />
        </>
      ) : null}
    </>
  );
};

export default TokenOwner;
