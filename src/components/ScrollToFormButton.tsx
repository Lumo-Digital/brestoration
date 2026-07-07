"use client";

import Link from "next/link";
import Button from "@/components/Button";
import { scrollToForm } from "@/utils/smoothScroll";

interface ScrollToFormButtonProps {
  label: string;
  className?: string;
  buttonClassName?: string;
  onClick?: () => void;
}

export default function ScrollToFormButton({
  label,
  className,
  buttonClassName,
  onClick,
}: ScrollToFormButtonProps) {
  return (
    <Link
      href="/#form"
      className={className}
      onClick={(e) => {
        scrollToForm(e);
        onClick?.();
      }}
    >
      <Button className={buttonClassName}>{label}</Button>
    </Link>
  );
}
