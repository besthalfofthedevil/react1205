import Link from "next/link";
import { useRouter } from "next/navigation";

export const NavigateBack = () => {
  const router = useRouter();
  const returnBack = () => {
    router.back();
  };
  return <Link href="" onClick={returnBack}/>;
};
