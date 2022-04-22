import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { userID } from "../redux/Slice"
import { userDisplayName } from "../redux/Slice"
import {setImgSrc} from "../redux/Slice"
import axios from "axios"


const Profile = () => {
    const accessToken = useSelector((state) => state.accessToken.value);
    const userDisplayName = useSelector((state) => state.user.value.DisplayName);
    const imgSrc = useSelector((state) => state.user.value.imgSrc);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await axios
                .get(
                    `https://api.spotify.com/v1/me?access_token=${accessToken}`
                )
                .catch((error) => error)
            console.log(data);
            console.log("your username is: ", data.data.display_name);
            dispatch(userID(data.data.id));
            dispatch(userDisplayName(data.data.display_name));
            dispatch(setImgSrc(data.data.images[0].url));
        }
        accessToken !== undefined && (fetchUserData());
    }, [accessToken, dispatch]);

    return (
        <div className="profile">
            <img className="img-profile" src={imgSrc} alt={userDisplayName} />
            <p>Logged in as: {userDisplayName}</p>
        </div>
    )
}

export default Profile;