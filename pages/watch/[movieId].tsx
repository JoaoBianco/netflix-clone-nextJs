import React from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Head from "next/head";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <>
      <Head>
        <title>Watching: {data?.title}</title>
      </Head>
      <div className="h-screen w-screen bg-black">
        <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black-70">
          <AiOutlineArrowLeft
            onClick={() => router.push("/")}
            className="text-white cursor-pointer"
            size={40}
          />
          <p className="text-white text-1xl md:text-3xl font-bold">
            <span className="font-light">Watching: </span>
            {data?.title}
          </p>
        </nav>
        <video
          src={data?.video_url}
          className="w-full h-full"
          controls
          autoPlay
        ></video>
      </div>
    </>
  );
};

export default Watch;
