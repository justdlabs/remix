import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header";

const title = "Contact Us | Justd Remix Starter Kit";
const description =
  "Have any questions or need assistance? Feel free to reach out to us anytime. We’re here to help you with anything you need.";

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

export default function Contact() {
  return (
    <>
      <Header title="Contact" description={description} />
    </>
  );
}
