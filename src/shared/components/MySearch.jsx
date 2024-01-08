import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Search.module.css";
import ResultDropdown from "./ResultDropdown";
import useDebounce from "@hooks/useDebounce";
import { BiUpsideDown } from "react-icons/bi";
import { getNetworkDetails } from "@util/tokenSupportedNetworks";
// import NetworkSupported from "./NetworkSupported";
import { useQuery } from "@tanstack/react-query";
import { requestSearch } from "@/api/contractInfo";

const notify = (type, message) =>
  toast[type](message, {
    toastId: message,
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const MySearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(null);

  const debouncedValue = useDebounce(query, 500);
  const {
    data: results,
    isSuccess,
    isError,
    error: responseError,
    isFetched,
    isLoading,
    isInitialLoading,
    refetch,
  } = useQuery({
    queryKey: ["search", debouncedValue],
    enabled: false,
    queryFn: () => requestSearch({ name: debouncedValue }),
  });
  const navigate = useNavigate();

  //Send new request to the server after 500ms form last character user has entered
  useEffect(() => {
    if (debouncedValue.length > 0) {
      refetch(debouncedValue);
    }
  }, [debouncedValue]);

  //Enable search button only if user typed contract address
  useEffect(() => {
    if (debouncedValue.startsWith("0x") && debouncedValue.length === 42) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isFetched, debouncedValue]);

  //Update local state that carry search results
  useEffect(() => {
    if (results && query.length > 0 && isSuccess) {
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [results, isFetched, query]);

  //Update error flag to be only show when server return error
  useEffect(() => {
    setError(null);
    if (isError && debouncedValue.startsWith("0x")) {
      notify(
        "success",
        "This contract address is not registered yet start scan"
      );
    } else if (isError >= 400) {
      setError(responseError?.data?.payload?.responseMessage);
    } else {
      setError(null);
    }
  }, [isError, debouncedValue]);

  const handleSearch = (event) => {
    const { value } = event.target;
    const userQuery = value;
    const alphaNumericOnly = /^[A-Za-z0-9\s]+$/;
    setSuggestions([]);

    //First check if user typed anything and remove white spaces
    if (userQuery.trim().length > 0) {
      //Second check if user typed character that only alphabetic or numeric
      if (alphaNumericOnly.test(userQuery)) {
        setQuery((prevState) => {
          if (prevState !== query) {
            setError(null);
          }
          return userQuery;
        });
      } else {
        notify(
          "error",
          "Contract address or token name must be written correctly"
        );
      }
    } else {
      setError(null);
      setIsDisabled(true);
      setQuery("");
    }
  };

  const searchContractAddress = () => {
    if (!isDisabled) {
      navigate(`/token/${query}`);
    }
  };
  return Error("asdas");

  return (
    <div className={styles.searchWrapper}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <span className={styles.searchNote}>
        <FaCircle className={`${styles.dot} ${styles.dot_ltr}`} />
        Enter the token name and click scan
      </span>

      <div className={styles.searchSection}>
        <input
          type="text"
          className={styles.searchInput}
          onChange={handleSearch}
          value={query === null ? "" : query}
        />
        <button
          onClick={searchContractAddress}
          className={`${styles.searchBtn} ${styles.searchBtn_ltr}`}
          disabled={isDisabled}
        >
          {isInitialLoading ? "loading..." : "Scan"}
        </button>
        {isFetched && isSuccess && (
          <div
            className={
              results?.results?.length !== 0 ? styles.searchBlock : null
            }
          >
            {results?.result?.map((result, index) => (
              <ResultDropdown
                key={index}
                contractAddress={result?.contractAddress}
                logo={result?.logo}
                name={result?.name}
                symbol={result?.symbol}
                contractScan={result?.contractScan}
                isScam={result?.isNotListed}
                network={getNetworkDetails(result.network)}
              />
            ))}
          </div>
        )}
        {isSuccess && error && (
          <div className={`${styles.searchBlock} ${styles.notFoundData}`}>
            <BiUpsideDown size={18} />
            {error}
          </div>
        )}
      </div>
      {/* <NetworkSupported /> */}
    </div>
  );
};

export default MySearch;
