import Topbar from '../components/Home/Topbar';
import Maintop from '../components/Home/Maintop';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Project from '../components/Projects/Projects';
import Teams from '../components/Teams/Teams';
import Footer from '../components/Footer/Footer';
import { makeStyles } from '@material-ui/core';
import cn from 'classnames'
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import ScrollY from '../actions/ParralaxActions';
import { useSelector } from 'react-redux';
import FullScreenLoad from '../common/FullScreenLoad';
import { ModalClose } from '../actions/ModalActions';
import "./Home.css"
const useStyles = makeStyles({

})

const HomePage = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    // const [heighbottom, setTopHeight] = useState(0);
    // const teams = useRef();
    // const topWrapper = useRef();
    // useEffect(() => {
    //     setTopHeight((teams.current.getBoundingClientRect().top))
    // })
    useEffect(() => {
        dispatch(ModalClose());
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', () => {
            dispatch(ScrollY(window.pageYOffset));
            return () => window.removeEventListener('scroll', () => {
                dispatch(ScrollY(window.pageYOffset));
            })
        })
    }, [dispatch])
    const setOffsetY = useSelector((state) => state.parralx.scrollX)

    // if (setOffsetY > heighbottom) {
    //     topWrapper.current.style.display = "none"
    //     console.log("hdden")

    // } else if (setOffsetY < heighbottom) {
    //     topWrapper.current.style.display = "block"
    //     topWrapper.current.style.transition = "all 2s linear"

    // }


    return (
        <div>
            <FullScreenLoad />
            <div>
                <div className="home" style={{ background: "#113628" }}>
                    <Topbar />
                    <Maintop />
                </div>
                <div>
                    <About />

                </div>
                <div>
                    <Services />

                </div>
            </div>
            <div>
                <Project />
            </div>
            <div>
                <Teams />
            </div>
            <div>
                <Footer />
            </div>
        </div >

    )
}
export default HomePage;