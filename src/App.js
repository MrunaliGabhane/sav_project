import { useState } from "react";
import Recaptcha from "./pages/recaptcha";
import ItemsList from "./pages/ItemsList";

export default function App() {
  const [itemsLoaded, setItemsLoaded] = useState(false);
  return (
    <div>
    {!itemsLoaded ? (
        <Recaptcha onVerify={() => setItemsLoaded(true)} />
      ) : (
        <ItemsList />
      )}
    </div>
  )
}