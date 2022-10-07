import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/loader/Loader";

const Home = lazy(() => import("../pages/home/Home"));
const Services = lazy(() => import("../pages/services/Services"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const CaseStudy = lazy(() => import("../pages/case-study/CaseStudy"));
const Aboutus = lazy(() => import("../pages/about-us/Aboutus"));
const Carrer = lazy(() => import("../pages/carrer/Carrer"));
const PageNotFound = lazy(() => import("../pages/404/PageNotFound"));
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const MediaPresence = lazy(() =>
  import("../pages/media-presence/MediaPresence")
);
const UnprotectedRoutes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/services",
    component: Services,
    name: "Services",
  },
  {
    path: "/case-study",
    component: CaseStudy,
    name: "Services",
  },
  {
    path: "/blogs",
    component: Blogs,
    name: "Blogs",
  },
  {
    path: "/media-presence",
    component: MediaPresence,
    name: "MediaPresence",
  },
  {
    path: "/about-us",
    component: Aboutus,
    name: "Login",
  },
  {
    path: "/carrer",
    component: Carrer,
    name: "carrer",
  },
  {
    path: "/contact",
    component: Contact,
    name: "contact",
  },
  {
    path: "*",
    component: PageNotFound,
    name: "PageNotFound",
  },
];

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {UnprotectedRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={`${route.path}`}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
