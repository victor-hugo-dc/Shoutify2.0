export const auth_endpoint = "https://accounts.spotify.com/authorize";
export const client_id = process.env.CLIENT_ID;
export const redirect_uri = process.env.REDIRECT_URI;

export const scopes = [
    "playlist-read-private",
    "user-top-read",
    "user-read-recently-played",
    "playlist-modify-private",
    "playlist-modify-public",
];

export const login_url = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
