import React, {Component} from 'react';
import logo from '../logo.svg';
import './Navbar.css';
import NavButton from "./NavButton";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faBars from '@fortawesome/fontawesome-free-solid/faBars'
const pub = process.env.PUBLIC_URL;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            toggled: 0
        };
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        console.log("Toggle!!! I am now");
        console.log(this.state.toggled.toString());
        if (this.state.toggled) {
            this.setState({
                toggled: 0
            })
        } else {
            this.setState({
                toggled: 1
            })
        }

    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

    render() {
        const {width} = this.state;
        const isMobile = width <= 1440;
        if (isMobile) { //we're in mobile baby
            if (this.state.toggled) { // the hamburger menu has been toggled! Time to actually display something
                return (
                    <div className="NavBar">
                        {/*<img className="logo" src={pub + "/img/svg/LOGO.svg"} alt={"Logo"}/>*/}
                        <div className="MenuToggle" onClick={this.toggle}>
                            <img src={pub + "/img/svg/Hamburger-white.svg"}/>
                        </div>
                        <div className="NavButtons">
                            <NavButton onClick={this.toggle} location="Home"/>
                            <NavButton onClick={this.toggle} location="Projects"/>
                            <NavButton onClick={this.toggle} location="Experiences"/>
                            <NavButton onClick={this.toggle} location="Contact"/>
                            <NavButton location="Resume"/>
                        </div>

                    </div>
                );
            } else {
                return (
                    <div className="NavBar">
                        {/*<img className="logo" src={pub + "/img/svg/LOGO.svg"} alt={"Logo"}/>*/}
                        <div className={"MenuToggle"} onClick={this.toggle}>
                            <img onClick={this.toggle} src={pub + "/img/svg/Hamburger-white.svg"}/>
                        </div>
                    </div>
                );
            }

        } else {
            return (
                <div className="NavBar">
                    {/*<img className="logo" src={pub + "/img/svg/LOGO.svg"} alt={"Logo"}/>*/}
                    <NavButton location="Home"/>
                    <NavButton location="Projects"/>
                    <NavButton location="Experiences"/>
                    <NavButton location="Contact"/>
                    <NavButton location="Resume"/>
                </div>
            );
        }
    }
}

export default Navbar;