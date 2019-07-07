import React from 'react';
import moment from 'moment';


export default class AddHorse extends React.Component {
    state = {
        error: '',
        jockeyMeetTotal: 0,
        jockeyMeetWins: 0,
        jockeyMeetPlaces: 0,
        jockeyMeetShows: 0,
        jockeyMeetWinPercentage: '',
        jockeyYearTotal: 0,
        jockeyYearWins: 0,
        jockeyYearWinPercentage: '',
        statYear: 0
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting Form');
        // if(!this.state.description || !this.state.amount){
        //     this.setState(() => !this.state.description ? { error: 'Please add a Description' } : { error: 'Please add a Amount' });
        // } else {
        //     this.setState(() => ({ error: '' }));
        //     this.props.onSubmit({
        //         description: this.state.description,
        //         amount: parseFloat(this.state.amount,10) *100,
        //         createdAt: this.state.createdAt.valueOf(),
        //         note: this.state.note
        //     })
        // }
    }
    checkExpand = (e) => {
        if (e.target.value.length > 0) {
            console.log(e.target.value)
            let len = 1.2 + ((e.target.value.length - 2) * .5);
            console.log(len);
            document.getElementById(e.target.id).style.width = `${len}vw`;
        }
        this.updateFormState(e.target);
    }
    componentDidUpdate = () => {
        // console.log("state",this.state);
        // console.log("Win Max", this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetShows);
        // console.log("Wins", this.state.jockeyMeetWins);
        // console.log("Place Max", this.state.jockeyMeetTotal - this.state.jockeyMeetWins - this.state.jockeyMeetShows);
        // console.log("Places", this.state.jockeyMeetPlaces);
        // console.log("Show Max", this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetWins);
        // console.log("Shows", this.state.jockeyMeetShows);
    }
    updateFormState = (item) => {
        this.setState({ error: '' });
        if (item.id === 'jockeyMeetTotal') {
            if (item.value < this.state.jockeyMeetWins + this.state.jockeyMeetPlaces + this.state.jockeyMeetShows) {
                this.setState({ error: 'You cannot have less total races than the pre-set win, place, and show results', jockeyMeetTotal: this.state.jockeyMeetWins + this.state.jockeyMeetPlaces + this.state.jockeyMeetShows });
                document.getElementById(item.id).value = this.state.jockeyMeetWins + this.state.jockeyMeetPlaces + this.state.jockeyMeetShows;
                return
            }
            this.setState({ jockeyMeetTotal: item.value });
        }
        else if (item.id === 'jockeyMeetWins') {
            if (item.value > this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetShows) {
                this.setState({ error: 'Maximum win results cannot exceed race totals', jockeyMeetWins: this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetShows });
                document.getElementById(item.id).value = this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetShows;
                return
            }
            this.setState({ jockeyMeetWins: item.value });
        }
        else if (item.id === 'jockeyMeetPlaces') {
            if (item.value > this.state.jockeyMeetTotal - this.state.jockeyMeetWins - this.state.jockeyMeetShows) {
                this.setState({ error: 'Maximum place results cannot exceed race totals', jockeyMeetPlaces: this.state.jockeyMeetTotal - this.state.jockeyMeetWins - this.state.jockeyMeetShows });
                document.getElementById(item.id).value = this.state.jockeyMeetTotal - this.state.jockeyMeetWins - this.state.jockeyMeetShows;
                return
            }
            this.setState({ jockeyMeetPlaces: item.value });
        }
        else if (item.id === 'jockeyMeetShows') {
            if (item.value > this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetWins) {
                this.setState({ error: 'Maximum show results cannot exceed race totals', jockeyMeetShows: this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetWins });
                document.getElementById(item.id).value = this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetWins;
                return
            }
            this.setState({ jockeyMeetShows: item.value });
        }
        else if (item.id === 'statYear') {
            if (item.value > moment().year()) {
                this.setState({ error: 'Year value cannot be in the future', statYear: moment().year() });
                document.getElementById(item.id).value = moment().year();
                return
            }
            this.setState({ statYear: item.value });
        }
        else if (item.id === 'jockeyYearTotal') {
            if ((item.value < this.state.jockeyYearWins) && item.value.length > 0) {
                this.setState({ error: 'You cannot have less total races than the pre-set win results', jockeyYearTotal: this.state.jockeyYearTotal, jockeyYearWins: this.state.jockeyYearTotal });
                document.getElementById('jockeyYearWins').value = item.value;                
                return
            }

            this.setState({ jockeyYearTotal: item.value });
        }
        else if (item.id === 'jockeyYearWins') {
            if (parseInt(item.value) > parseInt(this.state.jockeyYearTotal)) {
                this.setState({ error: "Maximum the year's win results cannot exceed race totals", jockeyYearWins: this.state.jockeyYearTotal });
                document.getElementById(item.id).value = this.state.jockeyYearTotal;
                return
            }
            this.setState({ jockeyYearWins: item.value });
        }
    }
    focusOut = () => {
        if (this.state.error !== '') this.setState({ error: '' });
        if (this.state.jockeyMeetWins > 0) this.state.jockeyMeetWins / this.state.jockeyMeetTotal < 1 ? this.setState({ jockeyMeetWinPercentage: (this.state.jockeyMeetWins / this.state.jockeyMeetTotal).toFixed(2).toString().substr(1, 3) }) : this.setState({ jockeyMeetWinPercentage: (this.state.jockeyMeetWins / this.state.jockeyMeetTotal).toFixed(2) });
        if (this.state.jockeyYearWins > 0) this.state.jockeyYearWins / this.state.jockeyYearTotal < 1 ? this.setState({ jockeyYearWinPercentage: (this.state.jockeyYearWins / this.state.jockeyYearTotal).toFixed(2).toString().substr(1, 3) }) : this.setState({ jockeyYearWinPercentage: (this.state.jockeyYearWins / this.state.jockeyYearTotal).toFixed(2) });

    }
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.onSubmit} className='addHorse'>
                        <hr />
                        <div className='stats statsForm' >
                            <div className='firstColumn'>
                                <div className='bettingInfo bIForm'>
                                    <input
                                        type='text'
                                        placeholder='Gate'
                                        name='gate'
                                        className='gate gateForm' />
                                    <input
                                        type='text'
                                        placeholder='Odds'
                                        name='odds'
                                        className='odds oddForm' />
                                </div>
                                <div className='horseInfo'>
                                    <input
                                        type='text'
                                        placeholder='Horse Name'
                                        name='horseName'
                                        className='horseName' />
                                    <div>
                                        <h4 className='ownLabel'>Own:</h4><input
                                            type='text'
                                            placeholder='Owner'
                                            name='own'
                                            className='ownForm' />
                                    </div>
                                    <textarea
                                        placeholder='Add a description for the silks here'
                                        name='silks'
                                        className='silks'
                                    ></textarea>
                                </div>
                                <div className='jockeyInfo'>
                                    <input
                                        type='text'
                                        placeholder='Jockey Name'
                                        className='jockey' />
                                    <p className='jockeyStats'>(</p>
                                    <input
                                        id='jockeyMeetTotal'
                                        onChange={(e) => this.checkExpand(e)}
                                        name='jockeyMeetTotal'
                                        type='number'
                                        min='0'
                                        placeholder='T'
                                        className='jockeyStat jockeyStats' />
                                    <input
                                        id='jockeyMeetWins'
                                        onBlur={this.focusOut}
                                        max={this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetShows}
                                        onChange={(e) => this.checkExpand(e)}
                                        type='number'
                                        min='0'
                                        placeholder='W'
                                        className='jockeyStat jockeyStats' />
                                    <input
                                        id='jockeyMeetPlaces'
                                        onBlur={this.focusOut}
                                        max={this.state.jockeyMeetTotal - this.state.jockeyMeetWins - this.state.jockeyMeetShows}
                                        onChange={(e) => this.checkExpand(e)}
                                        type='number'
                                        min='0'
                                        placeholder='P'
                                        className='jockeyStat jockeyStats' />
                                    <input
                                        id='jockeyMeetShows'
                                        onBlur={this.focusOut}
                                        max={this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetWins}
                                        onChange={(e) => this.checkExpand(e)}
                                        type='number'
                                        min='0'
                                        placeholder='S'
                                        className='jockeyStat jockeyStats' />
                                    <p className='jockeyStats' style={{ marginLeft: '5px' }}>{this.state.jockeyMeetWinPercentage === '' || this.state.jockeyMeetWins === 0 ? 'W%' : this.state.jockeyMeetWinPercentage} </p>
                                    <p className='jockeyStats'>)</p>
                                    <input
                                        id='statYear'
                                        onChange={(e) => this.updateFormState(e.target)}
                                        onBlur={this.focusOut}
                                        type='number'
                                        min='1890'
                                        placeholder="Year"
                                        className='jockeyYearStat jockeyStats' />
                                    <p className='jockeyStats'>: (</p>
                                    <input
                                        id='jockeyYearTotal'
                                        onBlur={this.focusOut}
                                        onChange={(e) => this.checkExpand(e)}
                                        name='jockeyYearTotal'
                                        type='number'
                                        min='0'
                                        placeholder='T'
                                        className='jockeyStat jockeyStats' />
                                    <input
                                        id='jockeyYearWins'
                                        onBlur={this.focusOut}
                                        max={this.state.jockeyYearTotal}
                                        onChange={(e) => this.checkExpand(e)}
                                        type='number'
                                        min='0'
                                        placeholder='W'
                                        className='jockeyStat jockeyStats' />
                                    <p className='jockeyStats' style={{ marginLeft: '5px' }}>{this.state.jockeyYearWinPercentage === '' || this.state.jockeyYearWins === 0 ? 'W%' : this.state.jockeyYearWinPercentage} </p>
                                    <p className='jockeyStats'>)</p>

                                </div>
                            </div>
                            <div className='secondColumn'></div>
                            <div className='medication'></div>
                            <div>
                                <table className='tableStats'>
                                    <tbody>
                                        <tr className='tableLife'></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table className='tableStats conditions'>
                                    <tbody>
                                        <tr></tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </form>
                </div>
                {this.state.error && <p className='errors'>{this.state.error}</p>}
            </div>
        )
    }
}