import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

function LastPayTransactions({ data }) {
  const { t } = useTranslation();

  const getTypeDistributorString = (type) => {
    if (type === 5) {
      return "BEGINNER";
    }
    if (type === 10) {
      return "STARTER";
    }
    if (type === 20) {
      return "STANDARD";
    }
    if (type === 30) {
      return "ADVANCED";
    }
    if (type === 40) {
      return "ULTIMATE";
    }
    if (type === 50) {
      return "ELITE";
    }

    return "Unknown";
  };
  const renderTypeTransaction = (transaction) => {
    if (transaction.type === "distributor_membership") {
      return (
        <TableRow key={transaction.id}>
          <TableCell sx={{ textAlign: "center" }}>
            {(transaction.createdAt)}
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            {t("view_dashboard_type_distributor_buy_membership")} {" "}
            {getTypeDistributorString(
              transaction.membershipDistributor.type
            )}{" "}
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            {transaction.amount / 100}$
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            {transaction.distributor.name}
          </TableCell>
        </TableRow>
      );
    }

    if (transaction.type === "distributor_rockobits") {
      return (
        <TableRow key={transaction.id}>
          <TableCell sx={{ textAlign: "center" }}>
            {(transaction.createdAt)}
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            {t("view_dashboard_type_distributor_buy")} {" "}
            {transaction.rockobits} Rockobits
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            {transaction.amount / 100}$
          </TableCell>
          <TableCell sx={{ textAlign: "center" }}>
            {transaction.distributor?.name}
          </TableCell>
        </TableRow>
      );
    }
  };
  return (
    <>
      <h2 className="text-xl font-bold mt-3 mb-2">
        {t("view_dashboard_last_pay_transactions")}
      </h2>
      <Box
        className="flex items-center"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <TableContainer className="max-w-xs lg:max-w-full">
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#EFF0F2" }}>
                <TableCell sx={{ textAlign: "center" }}>
                  {" "}
                  {t("view_dashboard_table_date")}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {" "}
                  {t("view_dashboard_table_type")}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {" "}
                  {t("view_dashboard_table_amount")}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {" "}
                  {t("view_dashboard_table_distributor")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    sx={{ textAlign: "center", fontSize: 18 }}
                  >
                    {t("view_dashboard_no_transactions")}
                  </TableCell>
                </TableRow>
              )}
              {data.map((row) => renderTypeTransaction(row))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default LastPayTransactions;
