import React from 'react';
import { connect } from 'react-redux';
import { enableHelp, disableHelp } from '../actions/help';

class Header extends React.Component {
    componentDidMount = () => { //lifecycle only within class based components (cbc)
        try {
            const json = localStorage.getItem('hoverHelp');
            const hoverHelp = JSON.parse(json);
            hoverHelp === 'enabled' ? this.props.dispatch(enableHelp()) : this.props.dispatch(disableHelp());
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
        window.addEventListener('keypress', (key) => {
            key.key === 'H' && this.props.help.hoverHelp == 'enabled' ? this.props.dispatch(disableHelp()) : this.props.dispatch(enableHelp()); // pressing lowercase 's' toggles the hover help feature
            let scrollTo = document.getElementById(key.key); // pressing race gate number will look for any associated anchors - if they exist it scrolls into center of the screen
            if(scrollTo){
                scrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.help.hoverHelp !== this.props.help.hoverHelp) {
            const json = JSON.stringify(this.props.help.hoverHelp);
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
                        if (e.target.value === 'disabled') {
                            console.log('Enabling')
                            this.props.dispatch(enableHelp())
                        }
                        else if (e.target.value === 'enabled') {
                            console.log('Disabling')
                            this.props.dispatch(disableHelp())
                        }
                    }}
                >{this.props.help.hoverHelp == 'enabled' ? 'Disable' : 'Enable'} Hover Help</button>
            </header>

        )
    };
};

const mapStateToProps = (state) => {
    return {
        help: state.help
    };
};

export default connect(mapStateToProps)(Header);