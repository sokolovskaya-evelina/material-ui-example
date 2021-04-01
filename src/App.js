import './App.css';
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid,
    IconButton,
    Paper, TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import LayerIcon from "@material-ui/icons/Layers";
import RestoreIcon  from "@material-ui/icons/Restore";
import FolderIcon  from "@material-ui/icons/Folder";
import FavoriteIcon  from "@material-ui/icons/Favorite";
import LocationOnIcon  from "@material-ui/icons/LocationOn";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1,
    },
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundOverlay: 'rgba(0,0,0,.1)'
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(2),
        marginTop: theme.spacing(8)
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
    const classes = useStyles()

    const [value, setValue] = useState('recents')
    const handleChange = (e, newValue) => {setValue(newValue)}

    const [open, setOpen] = useState(false)
    const handleClickOpen = () =>{setOpen(true)}
    const handleClose = () =>{setOpen(false)}

    return (
        <>
            <AppBar position='fixed'>
                <Container fixed>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' aria-label='menu' className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='h5' className={classes.title}>Example Material UI</Typography>
                        <Box mr={3}>
                            <Button color='inherit' variant='outlined' onClick={handleClickOpen}>Log In</Button>
                            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                                <DialogTitle id='form-dialog-title'>Log In</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Log In to see video</DialogContentText>
                                    <TextField autoFocus margin='dense' id='name' label='Email' type='email' fullWidth/>
                                    <TextField margin='dense' id='pass' label='Password' type='password' fullWidth/>
                                    <DialogActions>
                                        <Button onClick={handleClose} color='primary'>Close</Button>
                                        <Button onClick={handleClose} color='primary'>Log In</Button>
                                    </DialogActions>
                                </DialogContent>
                            </Dialog>
                        </Box>
                        <Button color='secondary' variant='contained'>Sign Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item mg={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography component='h1' variant='h3' color='inherit' gutterBottom>Hello, I'm
                                        Evelina</Typography>
                                    <Typography variant='h5' color='inherit' paragraph>Lorem ipsum dolor, sit amet
                                        consectetur adipisicing elit. Amet officiis cum beatae ad quisquam voluptatibus
                                        fuga! Est, sed minima. Assumenda repel.</Typography>
                                    <Button variant='contained' color='secondary'>Learn more</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container maxWidth='md'>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>About Me</Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>Lorem ipsum dolor, sit
                            amet consectetur adipisicing elit. Amet officiis cum beatae ad quisquam voluptatibus fuga!
                            Est, sed minima. Assumenda repellendus temporibus incidunt. Tempora nam atque enim numquam
                            deserunt beatae.</Typography>
                    </Container>
                </div>
                <div className={classes.mainButtons}>
                    <Grid container spacing={5} justify='center'>
                        <Grid item>
                            <Button variant='contained' color='primary'>Start Now</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='outlined' color='primary'>Learn More</Button>
                        </Grid>
                    </Grid>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs='12' sm='6' md='4'>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia}
                                               image='https://source.unsplash.com/random'
                                               title='Image title'
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant={'h5'} gutterBottom>
                                            Blog Post
                                        </Typography>
                                        <Typography>
                                            Blog Post. Lorem ipsum dolor, sit
                                            amet consectetur adipisicing elit.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>
                                            View
                                        </Button>
                                        <Button size='small' color='primary'>
                                            Edit
                                        </Button>
                                        <LayerIcon/>
                                        <PlayCircleFilledIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                        }
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
                <BottomNavigation value={value}
                                  onChange={handleChange}
                                  className={classes.root}
                >
                    <BottomNavigationAction label='Recents'
                                            value='recents'
                                            icon={<RestoreIcon/>}
                    />
                    <BottomNavigationAction label='Favorites'
                                            value='favorites'
                                            icon={<FavoriteIcon/>}
                    />
                    <BottomNavigationAction label='Nearby'
                                            value='nearby'
                                            icon={<LocationOnIcon/>}
                    />
                    <BottomNavigationAction label='Folder'
                                            value='folder'
                                            icon={<FolderIcon/>}
                    />
                </BottomNavigation>
                <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
                    Material UI Example
                </Typography>
            </footer>
        </>
    );
}

export default App;
