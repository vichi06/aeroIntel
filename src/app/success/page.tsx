import { Metadata } from "next";
import FormSuccess from "../../components/FormSuccess";

export const metadata: Metadata = {
  title: "Success - AEROINTEL",
  description: "Success - Advanced Drone Solutions",
};

export default function SuccessPage() {
  return <FormSuccess />;
}
