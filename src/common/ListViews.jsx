import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 600,
        height: "100vh",
        backgroundColor: "#0f141e",
        display: "flex",
        alignItems: "center",


    },
    link: {
        textDecoration: "none",
        color: "#ddd"
    }


}));

const ListItems = {
    fontSize: "4em"
}

export default function ListViews() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="home projects about us" style={{ width: "100%" }}>
                <h4 style={{ color: "#878a8f", textAlign: "left", paddingLeft: "20px" }}>Menu</h4>
                <ListItem button>
                    <Link to="/" className={cn(classes.link)}><ListItemText primary="Home" disableTypography style={ListItems} /></Link>
                </ListItem>
                <ListItem button >
                    <Link to="/blogs" className={cn(classes.link)}>
                        <ListItemText primary="Blogs" disableTypography style={ListItems} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/allprojects" className={cn(classes.link)}>
                        <ListItemText primary="Projects" disableTypography style={ListItems} />

                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/about" className={cn(classes.link)}>
                        <ListItemText primary="About us" disableTypography style={ListItems} />
                    </Link>

                </ListItem>
                <ListItem button>
                    <Link to="/contact" className={cn(classes.link)}>
                        <ListItemText primary="Contact" disableTypography style={ListItems} />
                    </Link>

                </ListItem>

                <ListItem button >
                    <Link to="/services" className={cn(classes.link)}>
                        <ListItemText primary="Services" disableTypography style={ListItems} />
                    </Link>
                </ListItem>

            </List>
        </div>
    );
}
