import { useState } from "react";

// components
import Layout from "@/components/layout/Layout";
import VegList from "@/components/veg-list/VegList";
import VegListResults from "@/components/veg-list/VegListResults";

export default function index() {
  // state management
  const [listResults, setListResults] = useState();
  const onSubmit = (list) => {
    console.log(list);
    setListResults(list);
  };
  if (listResults) {
    return (
      <Layout>
        <VegListResults data={listResults} />
      </Layout>
    );
  }
  return (
    <Layout>
      <VegList onSubmit={onSubmit} />
    </Layout>
  );
}
