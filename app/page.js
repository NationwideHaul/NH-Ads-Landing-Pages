import { redirect } from "next/navigation";

// This domain is dedicated to landing pages. Root sends visitors to the
// current live landing. When more landings are added, swap this for an index.
export default function Home() {
  redirect("/mac-lightweight-english");
}
