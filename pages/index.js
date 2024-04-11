import { lazy } from "react";
import Login from "../components/layouts/login";
import Dashboard from "../components/layouts/Dashboard";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";

const Footer = lazy(() => import("micro/footer"));

export default function Home({ session }) {
  const GAnalyticsLoader = dynamic(() =>
    import("micro/analytics").catch(() => {
      console.error("No se pudo cargar Google Analytics.");
      return () => null;
    })
  );
  return (
    <>
      {" "}
      {session === null ? (
        <main className={styles.main}>
          <Login />
        </main>
      ) : (
        <>
          <Dashboard />
        </>
      )}
      <Footer />
      <GAnalyticsLoader />
    </>
  );
}

Home.requireAuth = true;

export async function getServerSideProps(ctx) {
  const session = await getServerSession(ctx);

  return {
    props: { session },
  };
}
