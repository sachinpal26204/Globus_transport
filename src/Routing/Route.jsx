import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HOC from "../Component/HOC";
import ScrollToTop from "./Scrolltop";

// Lazy load pages
const HomeSection = lazy(() => import("../Component/HomeSection"));
const AboutSection = lazy(() => import("../Component/AboutSection"));
const ContactSection = lazy(() => import("../Component/ContactSection"));
const Testimonials = lazy(() =>
  import("../Component/Testimonials/Testimonials")
);
const Product = lazy(() => import("../Component/Product/Product"));
const Policy = lazy(() => import("../Component/Policy"));

export default function AppRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const transition = { duration: 0.4, ease: "easeInOut" };

  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: "40px" }}>Loading...</div>
        }
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HOC />}>
              <Route
                index
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <HomeSection />
                  </motion.div>
                }
              />
              <Route
                path="about"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <AboutSection />
                  </motion.div>
                }
              />
              <Route
                path="contact"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <ContactSection />
                  </motion.div>
                }
              />
              <Route
                path="testimonials"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <Testimonials />
                  </motion.div>
                }
              />
              <Route
                path="product"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <Product />
                  </motion.div>
                }
              />
              <Route
                path="policy"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={transition}
                  >
                    <Policy />
                  </motion.div>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
