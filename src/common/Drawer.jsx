import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import cn from 'classnames';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    link: {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.87)"
    }
});

const GreenDrawer = (props) => {
    const { toggleDrawer, keyValue, anchor, open } = props;
    const classes = useStyles();
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav" aria-label="home projects about us" style={{ width: "100%" }}>
                <h4 style={{ color: "#878a8f", textAlign: "left", paddingLeft: "20px" }}>Menu</h4>
                <Link to="/blogsform" className={cn(classes.link)}>
                    <ListItem button>
                        <ListItemText primary="Posts" />
                    </ListItem>
                </Link>
                <Link to="/allblogs" className={cn(classes.link)}>
                    <ListItem button >
                        <ListItemText primary="View Posts" />
                    </ListItem>
                </Link>
                <Link to="/contacts" className={cn(classes.link)}>
                    <ListItem button>
                        <ListItemText primary="Contacts" />
                    </ListItem>
                </Link>
                {/* <Link to="/drafts" className={cn(classes.link)}>
                    <ListItem button>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                </Link> */}

            </List>

        </div>
    );

    return (
        <div>

            <React.Fragment key={keyValue}>
                <SwipeableDrawer
                    anchor={anchor}
                    open={open}
                    onClose={toggleDrawer('top', false)}
                    onOpen={toggleDrawer('top', true)}
                >
                    {list(keyValue)}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}
export default GreenDrawer;