import axios from "axios";

export async function getUserId(token) {
    const endpoint = `https://api.spotify.com/v1/me`;
    const response = await axios.get(endpoint, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export async function getUserFavorites(type, time_range, limit = 20, token) {
    const endpoint = `https://api.spotify.com/v1/me/top/${type}`;
    const response = await axios.get(endpoint, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            time_range: time_range,
            limit: limit,
        },
    });
    return response.data.items;
}

export async function getRecentTracks(token) {
    const endpoint = "https://api.spotify.com/v1/me/player/recently-played";
    const response = await axios.get(endpoint, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            limit: 50,
        },
    });
    const filtered = response.data.items.map((track) => track.track);
    return filtered;
}

export async function getJournalEntries() {
    const endpoint = "http://localhost:4000/entries";
    const response = await axios.get(endpoint);
    return response.data;
}
