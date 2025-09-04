export interface IMusicdata {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
};



export const mockData: MusicTrack = {
  wrapperType: "track",
  kind: "song",
  artistId: 909253,
  collectionId: 1469577723,
  trackId: 1469577835,
  artistName: "Jack Johnson",
  collectionName: "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
  trackName: "The Sharing Song",
  collectionCensoredName: "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
  trackCensoredName: "The Sharing Song",
  artistViewUrl: "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
  collectionViewUrl: "https://music.apple.com/us/album/the-sharing-song/1469577723?i=1469577835&uo=4",
  trackViewUrl: "https://music.apple.com/us/album/the-sharing-song/1469577723?i=1469577835&uo=4",
  previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/51/78/c5/5178c543-49eb-af78-720b-a5691cb5d4d1/mzaf_6341149981915541860.plus.aac.p.m4a",
  artworkUrl30: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/30x30bb.jpg",
  artworkUrl60: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/60x60bb.jpg",
  artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/08/11/d2/0811d2b3-b4d5-dc22-1107-3625511844b5/00602537869770.rgb.jpg/100x100bb.jpg",
  collectionPrice: 9.99,
  trackPrice: 1.29,
  releaseDate: "2005-01-01T12:00:00Z",
  collectionExplicitness: "notExplicit",
  trackExplicitness: "notExplicit",
  discCount: 1,
  discNumber: 1,
  trackCount: 14,
  trackNumber: 8,
  trackTimeMillis: 165000,
  country: "USA",
  currency: "USD",
  primaryGenreName: "Rock",
  isStreamable: true
};

export interface musicDetailsProps {

    MusicTrack: IMusicdata;

}