import { Fragment } from "react"
import Header from "./components/Header"
import LeftSidebar from "./components/LeftSidebar"
import MovieList from "./components/MovieList"

export default function App() {
  return (
    <Fragment>

      <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">

        <Header />

        <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <LeftSidebar />
        <MovieList />
        </div>
        </main>

      </body>

    </Fragment>
  )
}