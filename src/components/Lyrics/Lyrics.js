import React from "react";
import _get from "lodash/get";

// import { StrollableContainer } from "react-stroller";

// import Controller from "./Controller";

import "./Lyrics.scss";

let interval;

export default class Lyrics extends React.Component {
  constructor(props) {
    super(props);
    // const { loggedIn } = props;

    // if (!loggedIn || loggedIn !== "spotify") {
    //   login();
    // }

    this.state = {
      player: null,
      lyrics: `[Verse 1]
      If you really love nothing
      On what future do we build illusions?
      If you really love nothing
      Do we wait in silent glory?
      If you really love nothing
      What part of betrayal do you wish to deny?
      [Chorus]
      When I find my home
      The next artery
      Splendid, I bled my whole life
      So it’s probably a kiss
      Goodbye then
      [Verse 2]
      If you really love nothing
      Everybody’s made up
      Everybody’s losing
      If you really love nothing
      Shall we sleep in silent glory?
      If you really love nothing
      How could you be there?
      You could just leave forever
      [Chorus]
      When I find my home
      The next artery
      Splendid, I bled my whole life
      So it’s probably a kiss
      Goodbye then
      It's goodbye then
      You can trace a hole upon your dress
      On your dress
      On your dress
      On your dress
      [Bridge]
      Breathe in, it’s optimal
      Read and remember
      The week’s end grading
      Better than seven other men
      Wayward from women who break dimension
      I know that you could just leave forever
      [Chorus]
      When I find my home
      The next artery
      Splendid, I bled my whole life
      So it’s gonna be a kiss
      Goodbye then
      This is goodbye then
      [Outro]
      You can trace a hole upon your dress
      And give me goodbye and a kiss
      I see you trace that hole upon your chest
      Give me goodbye and a kiss
      `
    };
  }

  getLyrics = () => {
    const updatedState = {};
    return getPlayerState()
      .then(({ data: player }) => {
        if (!player) {
          return { player };
        }
        updatedState.player = player;
        return fetchLyrics(player.item.artists[0].name, player.item.name).then(
          ({ data: lyrics }) => {
            return { player, lyrics };
          }
        );
      })
      .then(updatedState => this.setState(updatedState))
      .catch(() => {
        this.setState(updatedState);
      });
  };

  componentDidMount() {
    // this.getLyrics();

    // interval = setInterval(() => {
    //   this.getLyrics();
    // }, 5000);
  }

  componentWillUnmount() {
    // clearInterval(interval);
  }

  render() {
    const {
      isExporting,
      isShowTimer,
      username,
      newPlaylistId,
      loggedIn,
      hideTimer
    } = this.props;

    const { player, lyrics } = this.state;

    return (
      <div className="lyrics-container">
        <div className={`lyrics`}>
          {/* <StrollableContainer draggable> */}
            {/* <h1> {player && player.item.name} </h1>
            <h3>
              {" "}
              {_get(player, "item.artists") &&
                player.item.artists.reduce(
                  (str, { name }, index) =>
                    `${str || name}` + `${index !== 0 ? `,  ${name}` : ""}`,
                  ""
                )}{" "}
            </h3> */}
            <div>
              {lyrics &&
                lyrics
                  .split("\n")
                  .map(line => <h2 className="lyrics-line">{line}</h2>)}{" "}
            </div>
          {/* </StrollableContainer> */}
        </div>
      </div>
    );
  }
}
