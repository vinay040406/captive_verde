"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/about");
  }, []);
  return <div className="max-w-360 w-full mx-auto">hi</div>;
}
