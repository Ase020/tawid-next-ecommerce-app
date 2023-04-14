import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      {session && (
        <div className="text-blue-900 flex justify-between">
          <h2>
            Hello, <b>{session?.user?.name}</b>
          </h2>

          <div className="flex items-center bg-gray-200 gap-1 text-black cursor-pointer rounded-md text-sm overflow-hidden">
            <Image
              src={session?.user?.image}
              alt={session?.user?.name}
              width={36}
              height={36}
              className="object-cover rounded-lg"
            />
            {/* <span className="px-3 py-1">{session.user.name}</span> */}
          </div>
        </div>
      )}
    </Layout>
  );
}
