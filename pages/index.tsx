import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-green-700 text-6xl">Netflix Clone</h1>
      <p className="text-white text-lg">Logged in as {user?.name}</p>
      <button
        className="h-10 w-full bg-white font-bold"
        onClick={() => signOut()}
      >
        Logout!
      </button>
    </>
  );
}
