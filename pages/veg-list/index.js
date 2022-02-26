import { useState } from "react";
import { useRouter } from "next/router";
// components
import Layout from "@/components/layout/Layout";
import VegList from "@/components/veg-list/VegList";
import VegListResults from "@/components/veg-list/VegListResults";
// env
import { BACKEND_URL } from "@/config/index";

export default function VegListPage({ vegetablesList }) {
  // navigation
  const router = useRouter();
  // state management
  const [listResults, setListResults] = useState();
  const onSubmit = (list) => {
    const processedList = list.map((item) => {
      if (!Object.keys(item).includes("amount")) {
        item.amount = 0;
      }
      if (!Object.keys(item).includes("containerType")) {
        item.containerType = "Box";
      }
      return item;
    });
    setListResults(list);
  };
  const onConfirm = async (listValues) => {
    const date = new Date().getTime();
    const res = await fetch(`${BACKEND_URL}/api/insert-order`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        list: listValues,
        timestamp: date,
      }),
    }).then((result) => {
      if (result.ok) {
        router.push("/");
      }
    });
  };
  if (listResults) {
    return (
      <Layout>
        <VegListResults data={listResults} onConfirm={onConfirm} />
      </Layout>
    );
  }
  return (
    <Layout>
      <VegList onSubmit={onSubmit} vegetablesList={vegetablesList} />
    </Layout>
  );
}

export async function getServerSideProps() {
  // const vegetables = await prisma.vegetables.findMany();
  const vegetables = await fetch(`${BACKEND_URL}/api/veg-list`, {
    method: "GET",
  });
  const res = await vegetables.json();

  return {
    props: {
      vegetablesList: res.list,
    },
  };
}
