import { useState } from "react";
import { Tabs, Tab, Paper } from "@mui/material";
import PayTransactions from "./Pay/PayTransactions";
import RockobitsTransactionsDistributor from "./Rockobits/RockobitsTransactions";
function Transactions() {
  // Estado para controlar la pestaña seleccionada
  const [selectedTab, setSelectedTab] = useState(0);

  // Manejador de cambio de pestaña
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      {/* Barra de pestañas */}
      <Paper elevation={0}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Pay" />
          <Tab label="Rockobits" />
        </Tabs>
      </Paper>

      {/* Contenido según la pestaña seleccionada */}
      {selectedTab === 0 && <PayTransactions />}
      {selectedTab === 1 && <RockobitsTransactionsDistributor />}
    </div>
  );
}

export default Transactions;
