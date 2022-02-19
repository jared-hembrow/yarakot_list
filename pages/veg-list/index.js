import { useState } from "react";
import { useRouter } from "next/router";
// components
import Layout from "@/components/layout/Layout";
import VegList from "@/components/veg-list/VegList";
import VegListResults from "@/components/veg-list/VegListResults";
// prisma
import prisma from "@/config/client";
export default function VegListPage({ vegetablesList }) {
  // navigation
  const router = useRouter();
  // state management
  const [listResults, setListResults] = useState();
  const onSubmit = (list) => {
    setListResults(list);
  };
  const onConfirm = async (listValues) => {
    const res = await fetch("/api/insert-order", {
      method: "POST",
      body: JSON.stringify({ list: JSON.stringify(listValues) }),
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
  const vegetables = await prisma.vegetables.findMany();

  return {
    props: {
      vegetablesList: vegetables,
    },
  };
}
