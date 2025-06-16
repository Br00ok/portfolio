import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function LearnMoreButton() {
  return (
    <Button variant={"default"} size={"lg"}>
      <Link href="/#about">Learn more</Link>
    </Button>
  );
}
