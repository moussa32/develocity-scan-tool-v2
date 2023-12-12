import Table from "@components/Table";
import styles from "@pages/token/TokenTable.module.css";

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
