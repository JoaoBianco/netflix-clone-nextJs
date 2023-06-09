import BillBoard from "@/components/BillBoard";
import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import NavBar from "@/components/NavBar";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
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
  const { data: movies = [] } = useMovieList();
  const { data: favoriteMovies = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <NavBar />
      <BillBoard />
      <div className="pb-40">
        <MovieList data={movies} title="Trending Now" />
        <MovieList data={favoriteMovies} title="My List" />
      </div>
    </>
  );
}
