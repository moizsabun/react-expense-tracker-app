
import './App.css';
import {Header} from "./components/Header";
import {Balance} from "./components/Balance";
import {IncomeExpenses} from "./components/IncomeExpenses";
import {TransactionList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";

import { GlobalProvidor } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvidor>

    
    <Header/>
      <div className="container">
    <Balance />
<IncomeExpenses />
<TransactionList />
<AddTransaction />
      </div>

</GlobalProvidor>
  );
}

export default App;
