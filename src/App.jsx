
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplyJob from "./pages/ApplyJob";

function App() {

return (
<>
  
    <ApplyJob />
  

  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    theme="colored"
  />
</>
 
);
}

export default App;