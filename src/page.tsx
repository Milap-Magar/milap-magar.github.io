import { About, Contact, Main, Work } from "../src/pages";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <div className="center w-full h-full">
        <Main />
        <Work />
        <About />
        <Contact />
      </div>
    </Layout>
  );
}
