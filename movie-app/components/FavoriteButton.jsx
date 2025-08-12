import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteToSupabase, loadFavoritesFromSupabase, removeFavoriteFromSupabase } from '../src/RTK/favoriteThunks';
import { setFavorites } from '../src/RTK/favoriteSlice';

export default function FavoriteButton() {
    const { movie } = useSelector((state) => state.detail);
    const user = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();


    const isFavorite = useSelector((state) => state.favorite.some((item) => item.id === movie.id));

    const handleClick = async (e) => {
        e.stopPropagation();

        if (isFavorite) {
            await dispatch(removeFavoriteFromSupabase({ userId: user.id, movieId: movie.id }));
        } else {
            await dispatch(addFavoriteToSupabase({ userId: user.id, movie }));
        }

        dispatch(loadFavoritesFromSupabase(user.id))
    };

    return (
        <button onClick={handleClick}>
        {isFavorite ? (
            <>
            <div className="text-[2rem] text-red-600">♥</div>
            <div>관심</div>
            </>
        ) : (
            <>
            <div className="text-[2rem]">♡</div>
            <div>관심</div>
            </>
        )}
        </button>
    );
}
