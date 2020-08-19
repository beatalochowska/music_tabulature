import React from "react";
//  MUSIC_TABS_API = http://www.songsterr.com/a/ra/songs.json
// enum TabResponse {
//         Player = "PLAYER",
//         Guitar = "TEXT_GUITAR_TAB",
//         Chords = "CHORDS",
//         Bass = "TEXT_BASS_TAB"
// }

// interface SongResponse {
//     id: number;
//     type: string;
//     title: string;
//     artist: {
//         id: number;
//         type: string;
//         nameWithoutThePrefix: string;
//         useThePrefix: boolean;
//         name: string;
//     },
//     choordsPresent: boolean;
//     tabTypes: TabResponse[];
// }

// interface SongView {
//     title: string;
//     artist: string;
//     tabTypes: string[];
// }

// export const getTabs = (query: string, tabType: TabResponse): Promise<SongResponse> => {
//     if (tabType === 'Any') {
//     fetch(`MUSIC_TABS_API?query=${query}`).then()

//     }
//     fetch(`MUSIC_TABS_API?query=${query}&tabType=${tabType}`).then()
// }

// export const songMapperToView = (data: SongResponse): SongView => {
//     return {
//         title: data.title,
//         artist: data.artist.name,
//         tabTypes: data.tabTypes
//     }
// }

// export const tabMapperToView = (data: TabResponse): {} => {
//     return {
//         "PLAYER": "Player",
//         "TEXT_GUITAR_TAB": "Guitar",
//         "CHORDS": "Chords",
//         "TEXT_BASS_TAB": "Bass"
//     }
// }
