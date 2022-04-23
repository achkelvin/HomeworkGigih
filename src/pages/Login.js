const Login = () => {
    const clientID = '342bc7f599c441feb8418cdf919d1182';
    const redirectURI = 'https://final-project-gg2fe.vercel.app/';
    const scope = 'playlist-modify-private';
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectURI);

    return (
        <>
            <a href={url}><button className="selectButton">Login With Spotify</button></a>
        </>
    )
}

export default Login;