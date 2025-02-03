import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Router />
        <Toaster />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
