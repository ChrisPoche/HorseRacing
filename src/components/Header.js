import React from 'react';
import { connect } from 'react-redux';
import { enableHelp, disableHelp } from '../actions/help';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverHelp: props.help.hoverHelp
        }
        console.log('props', props.help.test);
        console.log('state', this.state.hoverHelp);
    }
    // toggleHelp = () => {
    //     let hoverHelp = this.state.hoverHelp;
    //     this.state.hoverHelp == 'disabled' ? hoverHelp = 'enabled' : hoverHelp = 'disabled';
    //     this.setState(() => ({ hoverHelp }));
    //     console.log("Help", hoverHelp);
    // };
    componentDidMount = () => { //lifecycle only within class based components (cbc)
        try {
            const json = localStorage.getItem('hoverHelp');
            const hoverHelp = JSON.parse(json);
            if (hoverHelp) {
                this.setState(() => ({ hoverHelp }));
            }
        }
        catch (e) {
        }
        const header = document.getElementById('header');
        const headerTop = header.offsetTop;

        const handleScroll = () => {
            if (window.scrollY > headerTop) {
                header.classList.add('fixedHeader');
                document.body.style.paddingTop = header.offsetHeight + 'px';
            } else {
                header.classList.remove('fixedHeader');
                document.body.style.paddingTop = 0;
            }
        }

        window.addEventListener('scroll', handleScroll);
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        console.log('this.state.hoverhelp', this.state.hoverHelp);
        if (prevState.hoverHelp !== this.state.hoverHelp) {
            console.log('should have changed');
            const json = JSON.stringify(this.state.hoverHelp);
            localStorage.setItem('hoverHelp', json);
        }
    }
    render() {
        return (
                <header id='header'>
                    <h1>Welcome to the Racetrack</h1>
                    <button
                        id='hoverHelp'
                        value={this.props.help.hoverHelp}
                        onClick={(e) => {
                            console.log('target state', e.target.value)
                            if (e.target.value === 'disabled') {
                                this.props.dispatch(enableHelp())
                            }
                            else if (e.target.value === 'enabled') {
                                this.props.dispatch(disableHelp())
                            }
                        }}
                    >{this.props.help.hoverHelp == 'enabled' ? 'Disable' : 'Enable'} Hover Help</button>
                </header>

        )
    };
}

const mapStateToProps = (state) => {
    console.log('mapping state', state);
    return {
        help: state.help
    };
};

export default connect(mapStateToProps)(Header);