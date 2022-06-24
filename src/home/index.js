import { Box, Button, Grid, makeStyles, Paper } from '@material-ui/core';
import LogoutOutlinedIcon from '../assets/logout.svg';
import React, { useEffect, useState } from 'react';
import './styles.css';
import logo from '../assets/logo.png';
import basketballIcon from '../assets/basketballIcon.png';
import youngBasketballPlayer from '../assets/youngBasketballPlayer.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const [name, setName] = useState('');
  const classes = useStyles();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const { name } = JSON.parse(localStorage.getItem('userInfo'));
      setName(name);
    }
  }, []);

  return (
    <div className={[classes.root, 'rootDiv'].join(' ')}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <img src={logo} width={300} style={{ zIndex: 1000 }} />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper
            className={classes.paper}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button style={{ backgroundColor: 'orange', marginRight: 15 }}>
              Ranking
            </Button>

            <Button style={{ marginRight: 15 }}>Teams</Button>
            <Button style={{ marginRight: 15 }}>Favourites</Button>
            <Button
              title='Logout'
              onClick={() => {
                localStorage.removeItem('userInfo');
                window.location.reload(false);
              }}
            >
              <img src={LogoutOutlinedIcon} />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ marginTop: -300 }}>
          <Paper
            className={[classes.paper, 'transparentBackground'].join(' ')}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <h1>{`Welcome to the Basketball Championship, ${name}`}</h1>
            <img src={basketballIcon} width={400} />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0}>
            <h3>Center</h3>
            <p>
              The center (C)—also known as the five, the pivot or the big
              man—usually plays near the baseline or close to the basket (the
              "low post"). They are usually the tallest players on the floor.
              Centers usually score "down low", or "in the paint" (near the
              basket, in the key), but there have been many centers who are good
              perimeter shooters as well. They're typically skilled at pulling
              down rebounds, contesting shots and setting screens on players.
            </p>
            <h3>Small forward</h3>
            <p>
              The small forward (SF), also known as the three, is considered to
              be the most versatile of the main five basketball positions.
              Versatility is key for small forwards due to the nature of their
              role, which resembles that of a shooting guard more often than
              that of a small forward. This is why the small forward and
              shooting guard positions are often used interchangeably and
              referred to as wings.
            </p>
            <h3>Power forward</h3>
            <p>
              The power forward (PF), also known as the four, often plays a role
              similar to that of the center, down in the "post" or "low blocks".
              The power forward is often the team's most powerful and dependable
              scorer, being able to score close to the basket while also being
              able to shoot mid-range jump shots from 10 – 15 feet from the
              basket.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0}>
            <img src={youngBasketballPlayer} width={500} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0}>
            <h3>Point Guard</h3>
            <p>
              The point guard (PG), also known as the one, is typically the
              team's shortest player and best ball handler and passer. They
              usually are very fast and are good at driving and short-range.
              Therefore, they often lead their team in assists and are able to
              create shots for themselves and their teammates. They are quick
              and able to hit shots outside the key but a majority are inside
              the 3 point line or layups, largely depending on the player's
              skill level. Point guards are looked upon as the "floor general"
              or the "coach on the floor, and the heart of the team." They
              should study the game and game film to be able to recognize the
              weaknesses of the defense, and the strengths of their own offense.
              They are responsible for directing plays, making the position
              equivalent to that of quarterback in American football, playmaker
              in Association football (soccer), center in ice hockey, or setter
              in volleyball.
            </p>
            <h3>Shooting guard</h3>
            <p>
              The shooting guard (SG)—also known as the two or the off
              guard—along with the small forward, is often referred to as a wing
              because of its use in common positioning tactics. As the name
              suggests, most shooting guards are prolific from the three-point
              range and long mid range. A key aspect of being a shooting guard
              is having the ability to patiently and methodically circulate the
              three point line linear with that of the ball. This allows the
              ability to correctly get into open space for other positions
              handling the ball. Just like all positions in basketball, the
              ability to communicate efficiently with teammates is key. If
              teammates do not know when/where a player will be open, they won't
              be able to deliver the ball when an opportunity presents itself.
            </p>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export { Home };
