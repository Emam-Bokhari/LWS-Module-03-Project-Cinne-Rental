import Avatar from "../assets/movie-covers/avatar.png"
import Tag from "../assets/tag.svg"
import { getAllMoviesData } from "../data/moviesData"
import Rating from "./Rating"
import { getImgUrl } from "../utility/cineRentalImage"

export default function MovieList() {

    const movies = getAllMoviesData()

    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

                {movies.map((movie,id)=> (

                    <figure key={id} className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                        <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="" />
                        <figcaption className="pt-4">
                            <h3 className="text-xl mb-1">{movie.title}</h3>
                            <p className="text-[#575A6E] text-sm mb-2">{movie.description}</p>
                            {/* rating */}
                            <Rating value={movie.rating} />
                            <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                href="#">
                                <img src={Tag} alt="" />
                                <span>${movie.price} | Add to Cart</span>
                            </a>
                        </figcaption>
                    </figure>

                ))}

            </div>
        </div>
    )
}