import { Button } from "@heroui/react";
import Link from "next/link";
import { IconArrowNarrowDown } from "@tabler/icons-react";
export default function NextSectionButton({ path }: { path: string }) {
  return (
    <Button
      isIconOnly
      aria-label="Arrow"
      className="bg-transparent text-secondary rounded-full hover:bg-secondary/30"
    >
      <Link href={`#${path}`}>
        <IconArrowNarrowDown />
      </Link>
    </Button>
  );
}
