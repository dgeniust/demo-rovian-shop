import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // [THÊM MỚI]
import "./index.css";
import App from "./App.jsx";
import { ViteReactSSG } from "vite-react-ssg";
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <HelmetProvider>
//       <App />
//     </HelmetProvider>
//   </StrictMode>,
// );
export const createApp = ViteReactSSG(<App />);
