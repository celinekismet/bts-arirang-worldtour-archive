

export class ReadEventDto {

  /**
   * The unique identifier for the event.
   */
  eventId: number;

  /**
   * The date of the event.
   */
  date: Date;

  /**
   * The setlist for the event.
   */
  setlist: string[];

  /**
   * The number of tickets sold for the event.
   */
  ticketsSold: number;

  /**
   * The attendance for the event.
   */
  attendance: number;

  /** The location where the event took place. */
  location: {
    locationId: number;
    country: string;
    city: string;
    venue: string;
  };

  /** The outfits worn at the event. */
  outfits: { outfitId: number; name: string }[];

  /** The surprise songs performed at the event. */
  surpriseSongs: { surpriseSongId: number; title: string }[];

  /** The media (photos/videos) associated with the event. */
  media: { mediaId: number; url: string; type: string }[];

  /** The highlights of the event. */
  highlights: {
    highlightId: number;
    title: string;
    description: string;
  }[];

  /** The hit tweets associated with the event. */
  tweets: { hitTweetId: number; tweetUrl: string }[];
}