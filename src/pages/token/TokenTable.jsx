import Table from "@components/Table/Table";
import styles from "./TokenTable.module.css";

const TokenTable = ({ columns, data, onRowClick = null }) => {
  return (
    <Table
      bodyRowClassName={styles.tableRow}
      columnHeaderClassName={styles.columnHeader}
      tableClassName={styles.table}
      columns={columns}
      onRowClick={onRowClick}
      data={data}
    />
  );
};

export default TokenTable;
