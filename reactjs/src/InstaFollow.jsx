import React from 'react';
import { Typography , makeStyles , Avatar , Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Grid from '@material-ui/core/Grid';
import './styleM.css';
import { SignalWifi1BarLockSharp } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
    root: {
        border: `1.2px solid ${theme.palette.grey[200]}`,
        padding: theme.spacing(2),
        borderRadius: "10px",
        maxWidth: 200,    
    },
    headerinsta: {
        color : theme.palette.grey[400],
        heigt: "150px"
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    channelUserName: {
        fontWeight: theme.typography.fontWeightBold,
        justify : "center",
        alignItems : "center"
    
    },
    channelNameContainer:{
        marginBottom: theme.spacing(1)
    },
    followButton:{
        textTransform: "none",
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        fontWeight: theme.typography.fontWeightMedium
    },
    photoContainer: {
        marginBottom : theme.spacing(1)
    }
}));

export const InstaFollow = () => {
    const classes = useStyles();
    return (<div className="Insta">
        <Grid container 
            alignItems= "center"
            direction= "column" 
            className={classes.root}  
         >
            <HeaderInsta classes={classes} />
            <ChannelPhoto classes={classes} />
            <ChannelUserName classes={classes} />
            <ChannelName classes={classes} />
            <FollowButton classes={classes}/>
        </Grid>
        </div>
    );
};

const HeaderInsta = ({classes}) => {
    return(
        <Grid container justifyContent = "flex-end">
            <Grid item xs={1}>
                <ClearIcon className={classes.headerinsta} />
            </Grid>
        </Grid>
    );
};
const ChannelPhoto = ({classes}) => {
    return (
        <div className = {classes.photoContainer}>
        <Avatar class="fab fa-instagram fa-4x"
            
            className={classes.avatar}
        
            />
            </div>
    );
};
const ChannelUserName = ({ classes }) => {
    return (
        <Grid
        
            spacing={5}
             >
            <Grid item xs={3} > 
            <Typography variant="body2" className={classes.channelUserName}>@moscow_life</Typography>
            </Grid>
        </Grid>
    );
};
const ChannelName = ({ classes }) => {
    return (
        <div className = { classes.channelNameContainer }>
        <Typography color="textSecondary" variant="caption">
            MOSCOW LIFE
        </Typography>
        </div>

    );
};
const FollowButton = ({ classes }) => {
    return (
        <Button
        className={classes.followButton}
        disableElevation color="primary" variant="contained" size="small">
            Follow
        </Button>
    );
    
};
