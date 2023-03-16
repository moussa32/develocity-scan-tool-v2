import { useMemo } from "react";
import { useTable } from "react-table";
import styles from "./ProductsTable.module.css";

const products = [
  {
    category: "A. Identifiers ",
    exp: "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name ",
    collected: "NO ",
  },
  {
    category: "B. Personal information categories listed in the California Customer Records statute ",
    exp: "Name, contact information, education, employment, employment history, and financial information  ",
    collected: "NO ",
  },
  {
    category: "C. Protected classification characteristics under California or federal law ",
    exp: "Gender and date of birth  ",
    collected: "NO ",
  },
  {
    category: "D. Commercial information ",
    exp: "Transaction information, purchase history, financial details, and payment information ",
    collected: "NO ",
  },
  {
    category: "E. Biometric information ",
    exp: "Fingerprints and voiceprints  ",
    collected: "NO ",
  },
  {
    category: "F. Internet or other similar network activity ",
    exp: "Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements  ",
    collected: "NO ",
  },
  {
    category: "G. Geolocation data ",
    exp: "Device location ",
    collected: "NO ",
  },
  {
    category: "H. Audio, electronic, visual, thermal, olfactory, or similar information ",
    exp: "Images and audio, video or call recordings created in connection with our business activities ",
    collected: "NO ",
  },
  {
    category: "I. Professional or employment-related information ",
    exp: "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us  ",
    collected: "NO ",
  },
  {
    category: "J. Education Information ",
    exp: "Student records and directory information  ",
    collected: "NO ",
  },
  {
    category: "K. Inferences drawn from other personal information  ",
    exp: "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics   ",
    collected: "NO ",
  },
];

const ProductsTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Examples",
        accessor: "exp",
        maxWidth: 100,
      },
      {
        Header: "Collected",
        accessor: "collected",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: products });

  return (
    <>
      <table className={styles.table} {...getTableProps}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr className={styles.tableHeaderRow} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr className={styles.tableBodyRow} {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductsTable;
