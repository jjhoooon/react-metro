import React from "react";
import { MdClose } from "react-icons/md";
import { useFavorites } from "../../../hooks/useFavorites";
import "./FavoriteStationList.css";

const FavoriteStationList = () => {
    const { favorites, removeFromFavorites } = useFavorites();

    const handleRemoveFavorite = (stationName) => {
        removeFromFavorites(stationName);
    };

    return (
        <div className="favorite-station-list">
            <div className="header-bookmark">
                <p>즐겨찾기</p>
            </div>
            <ul className="header-bookmark-contents">
                {favorites.map((stationName) => (
                    <li key={stationName}>
                        <p>{stationName}</p>
                        <p onClick={() => handleRemoveFavorite(stationName)}>
                            <MdClose />
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteStationList;
