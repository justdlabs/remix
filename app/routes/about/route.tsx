import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header";

const title = "About | Justd Remix Starter Kit";
const description =
  "Acme is a leading software house dedicated to delivering innovative and custom software solutions.";

export const meta: MetaFunction = () => {
  return [
    { title: title },
    {
      property: "og:title",
      content: title,
    },
    {
      name: "description",
      content: description,
    },
  ];
};

export default function About() {
  return (
    <>
      <Header title="About" description={description} />
    </>
  );
}
