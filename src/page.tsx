import { About, Contact, Main, Work } from "../src/pages"; // Adjust path if necessary
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
