import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout, LoaderPage } from "@components";

// import Home from "@pages/Home"; // Without lazy and Suspense
const Home = lazy(() => import("@pages/Home"));

export default function App() {

  return (
    <BrowserRouter basename="musk-special-tstar">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={(
              <Suspense fallback={<LoaderPage />}>
                <Home />
              </Suspense>
            )}
          />
          {/* <Route index element={<Home />} /> */}
          {/* Without lazy and Suspense 👆️ */}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
