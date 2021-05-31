import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';

const useStyle = makeStyles(theme => ({
  selected: {
    backgroundColor: theme.palette.action.selected,
  },
}));

const InfoBox = ({ title, today, total, color, onClick, selected }) => {
  const classes = useStyle();

  return (
    <Grid item xs={12} sm={4}>
      <Card elevation={4} className={selected ? classes.selected : ''}>
        <CardActionArea onClick={onClick}>
          <CardContent>
            <Typography color="textSecondary" variant="subtitle2" gutterBottom>
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              className={`${color}`}
            >
              <CountUp start={0} end={today ?? 0} duration={1.5} />
            </Typography>
            <Typography color="textSecondary" variant="body2">
              <CountUp start={0} end={total ?? 0} duration={1.5} /> Total
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default InfoBox;
