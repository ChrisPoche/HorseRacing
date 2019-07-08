import React from 'react';
import moment from 'moment';


export default class AddHorse extends React.PureComponent {
    state = {
        error: '',
        jockeyMeetTotal: {
            num: null,
            set: false
        },
        jockeyMeetWins: {
            num: null,
            set: false
        },
        jockeyMeetPlaces: {
            num: null,
            set: false
        },
        jockeyMeetShows: {
            num: null,
            set: false
        },
        // jockeyMeetWins: 0,
        // jockeyMeetWinsSet: false,
        // jockeyMeetPlaces: 0,
        // jockeyMeetPlacesSet: false,
        // jockeyMeetShows: 0,
        // jockeyMeetShowsSet: false,
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
    checkExpand = (item) => {
        console.log('ITEM', item);
        if (item.value.length > 0) {
            let len = 1.2 + ((item.value.length - 2) * .5);
            document.getElementById(item.id).style.width = `${len}vw`;
            if (item.skip) {
                console.log('SKIPPED!!!')
                this.focusOut(item);
            }
            else {
                this.updateFormState(item);
            }
        }
    }
    componentDidUpdate = () => {
        if (this.state.jockeyYearWins >= 0 && this.state.jockeyYearTotal == 0) this.setState({ jockeyYearWinPercentage: '' });
        // console.log('---------')
        // console.log('State', this.state);
        // console.log('Total Set?', this.state.jockeyMeetTotal.set);
        // console.log('Wins Set?', this.state.jockeyMeetWins.set);
        // console.log('Places Set?', this.state.jockeyMeetPlaces.set);
        // console.log('Shows Set?', this.state.jockeyMeetShows.set);
    }
    updateFormState = (item) => {
        this.setState({ error: '' });
        if (item.id === 'jockeyMeetTotal') {
            document.getElementById(item.id).addEventListener('blur', () => {
                var setArray = [
                    this.state.jockeyMeetTotal.set,
                    this.state.jockeyMeetWins.set,
                    this.state.jockeyMeetPlaces.set,
                    this.state.jockeyMeetShows.set
                ];
                var total = this.state.jockeyMeetWins.num + this.state.jockeyMeetPlaces.num + this.state.jockeyMeetShows.num;
                if (setArray.every(set => set === true)) {
                    if (isNaN(parseInt(item.value))) { this.setState(prevState => ({ error: 'Your total race value cannot be left blank', jockeyMeetTotal: { num: total, ...prevState.jockeyMeetTotal } })); document.getElementById(item.id).value = total; }
                    else if ((parseInt(item.value) < (total))) { this.setState({ error: 'You cannot have less total races than the pre-set win, place, and show results', jockeyMeetTotal: { num: total, set: false } }); document.getElementById(item.id).value = total; }
                    this.focusOut(item);
                    let itemSkip = { skip: true, id: 'jockeyMeetTotal', value: document.getElementById('jockeyMeetTotal').value };
                    console.log('ITEM SKIP', itemSkip)
                    this.checkExpand(itemSkip);
                }
                else if (item.value.length > 0) this.setState({ jockeyMeetTotal: { num: parseInt(item.value), set: true } });


                // if (parseInt(item.value) < (parseInt(this.state.jockeyMeetWins) + parseInt(this.state.jockeyMeetPlaces) + parseInt(this.state.jockeyMeetShows)) || (item.value === '' && this.state.jockeyMeetTotalSet)) {
                //     item.value === '' && this.state.jockeyMeetTotalSet ? this.setState({ error: 'Your total race value cannot be left blank', jockeyMeetTotal: parseInt(this.state.jockeyMeetWins) + parseInt(this.state.jockeyMeetPlaces) + parseInt(this.state.jockeyMeetShows) }) : this.setState({ error: 'You cannot have less total races than the pre-set win, place, and show results', jockeyMeetTotal: parseInt(this.state.jockeyMeetWins) + parseInt(this.state.jockeyMeetPlaces) + parseInt(this.state.jockeyMeetShows) });
                //     document.getElementById(item.id).value = parseInt(this.state.jockeyMeetWins) + parseInt(this.state.jockeyMeetPlaces) + parseInt(this.state.jockeyMeetShows);
                //     let itemSkip = { skip: true, id: item.id, value: item.value };
                //     this.checkExpand(itemSkip);
                //     return
                // }
                // else if ((this.state.jockeyMeetWins >= 0 && this.state.jockeyMeetPlaces >= 0 && this.state.jockeyMeetShows >= 0) && item.value > 0) {
                //     this.setState({ jockeyMeetTotal: item.value });
                //     this.focusOut(item);
                // }
                // this.setState({ jockeyMeetTotalSet: true });
            })
        }
        else if (item.id === 'jockeyMeetWins') {
            document.getElementById(item.id).addEventListener('blur', () => {
                var numArray = [
                    isNaN(parseInt(item.value)) ? null : parseInt(item.value),
                    this.state.jockeyMeetPlaces.num,
                    this.state.jockeyMeetShows.num
                ];
                console.log('numArrayBefore', numArray)
                var total = numArray.filter((num) => {
                    return num !== null
                });
                console.log('TotalFilter', total);
                total.length > 0 ? total = total.reduce((total, num) => total + num) : total = [null];
                console.log('Total', total);
                console.log('Item Length', item.value.length);
                if (!this.state.jockeyMeetTotal.set) {
                    this.setState(prevState => ({ jockeyMeetWins: { num: numArray[0], set: numArray[0] === null ? false : true }, jockeyMeetTotal: { ...prevState.jockeyMeetTotal, num: total } }));
                    document.getElementById('jockeyMeetTotal').value = total;
                }
                else if (item.value.length > 0 && this.state.jockeyMeetTotal.set) {
                    if (this.state.jockeyMeetTotal.num - total < 0) {
                        this.setState({ error: 'Maximum win results cannot exceed race totals', jockeyMeetWins: {num: this.state.jockeyMeetTotal.num - (total - parseInt(item.value)), set: true} });
                        document.getElementById(item.id).value = this.state.jockeyMeetTotal.num - (total - parseInt(item.value));
                    }
                    let itemSkip = { skip: true, id: 'jockeyMeetTotal', value: document.getElementById('jockeyMeetTotal').value };
                    this.checkExpand(itemSkip);
                }

                //     if (this.state.jockeyMeetPlacesSet && this.state.jockeyMeetShowsSet)




                //         if ((item.value > this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetShows) || item.value === '') {
                //             if (!this.state.jockeyMeetTotalSet) {
                //                 if (item.value === '' && this.state.jockeyMeetWinsSet) {
                //                     console.log('CLEARING WINS COLUMN');
                //                     var total = parseInt(this.state.jockeyMeetPlaces) + parseInt(this.state.jockeyMeetShows);
                //                     this.setState({ jockeyMeetWins: null, jockeyMeetWinsSet: false });
                //                 }
                //                 else {
                //                     console.log('MAKING A CHANGE TO THE WINS COLUMN')
                //                     var total = parseInt(this.state.jockeyMeetPlaces) + parseInt(this.state.jockeyMeetShows) + parseInt(item.value);
                //                 }
                //                 document.getElementById('jockeyMeetTotal').value = total;
                //                 if (this.state.jockeyMeetPlaces != null && this.state.jockeyMeetShows != null && item.value.length > 0) this.setState({ jockeyMeetTotal: total });
                //             }
                //             else {
                //                 this.setState({ error: 'Maximum win results cannot exceed race totals', jockeyMeetWins: this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetShows });
                //                 document.getElementById(item.id).value = this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetShows;
                //                 return
                //             }
                //         }
                //     if (item.value.length > 0) this.setState({ jockeyMeetWins: item.value, jockeyMeetWinsSet: true });
                //     let itemSkip = { skip: true, id: 'jockeyMeetTotal', value: document.getElementById('jockeyMeetTotal').value };
                //     this.checkExpand(itemSkip);
            });
        }
        else if (item.id === 'jockeyMeetPlaces') {
            document.getElementById(item.id).addEventListener('blur', () => {
                var numArray = [
                    this.state.jockeyMeetWins.num,
                    isNaN(parseInt(item.value)) ? null : parseInt(item.value),
                    this.state.jockeyMeetShows.num
                ];
                console.log('numArrayBefore', numArray)
                var total = numArray.filter((num) => {
                    return num !== null
                });
                console.log('TotalFilter', total);
                total.length > 0 ? total = total.reduce((total, num) => total + num) : total = [null];
                console.log('Total', total);
                if (!this.state.jockeyMeetTotal.set) {
                    this.setState(prevState => ({ jockeyMeetPlaces: { num: numArray[1], set: numArray[1] === null ? false : true }, jockeyMeetTotal: { ...prevState.jockeyMeetTotal, num: total } }));
                    document.getElementById('jockeyMeetTotal').value = total;
                }
                else if (item.value.length > 0 && this.state.jockeyMeetTotal.set) {
                    if (this.state.jockeyMeetTotal.num - total < 0) {
                        this.setState({ error: 'Maximum place results cannot exceed race totals', jockeyMeetPlaces: {num: this.state.jockeyMeetTotal.num - (total - parseInt(item.value)), set: true} });
                        document.getElementById(item.id).value = this.state.jockeyMeetTotal.num - (total - parseInt(item.value));
                    }
                    let itemSkip = { skip: true, id: 'jockeyMeetTotal', value: document.getElementById('jockeyMeetTotal').value };
                    this.checkExpand(itemSkip);
                }
                // if (item.value > this.state.jockeyMeetTotal - this.state.jockeyMeetWins - this.state.jockeyMeetShows) {
                //     if (!this.state.jockeyMeetTotalSet) {
                //         if (item.value === '') {
                //             var total = parseInt(this.state.jockeyMeetWins) + parseInt(this.state.jockeyMeetShows);
                //             this.setState({ jockeyMeetPlaces: null });
                //         }
                //         else {
                //             var total = parseInt(this.state.jockeyMeetWins) + parseInt(this.state.jockeyMeetShows) + parseInt(item.value);
                //         }
                //         document.getElementById('jockeyMeetTotal').value = total;
                //         if (this.state.jockeyMeetWins != null && this.state.jockeyMeetShows != null && item.value.length > 0) this.setState({ jockeyMeetTotal: total });
                //     }
                //     else {
                //         this.setState({ error: 'Maximum place results cannot exceed race totals', jockeyMeetPlaces: this.state.jockeyMeetTotal - this.state.jockeyMeetWins - this.state.jockeyMeetShows });
                //         document.getElementById(item.id).value = this.state.jockeyMeetTotal - this.state.jockeyMeetWins - this.state.jockeyMeetShows;
                //         return
                //     }
                // }
                // if (item.value.length > 0) this.setState({ jockeyMeetPlaces: item.value, jockeyMeetPlacesSet: true });
                // let itemSkip = { skip: true, id: 'jockeyMeetTotal', value: document.getElementById('jockeyMeetTotal').value };
                // this.checkExpand(itemSkip);
            })
        }
        else if (item.id === 'jockeyMeetShows') {
            document.getElementById(item.id).addEventListener('blur', () => {
                var numArray = [
                    this.state.jockeyMeetWins.num,
                    this.state.jockeyMeetPlaces.num,
                    isNaN(parseInt(item.value)) ? null : parseInt(item.value)
                ];
                console.log('numArrayBefore', numArray)
                var total = numArray.filter((num) => {
                    return num !== null
                });
                console.log('TotalFilter', total);
                total.length > 0 ? total = total.reduce((total, num) => total + num) : total = [null];
                console.log('Total', total);
                if (!this.state.jockeyMeetTotal.set) {
                    this.setState(prevState => ({ jockeyMeetShows: { num: numArray[2], set: numArray[2] === null ? false : true }, jockeyMeetTotal: { ...prevState.jockeyMeetTotal, num: total } }));
                    document.getElementById('jockeyMeetTotal').value = total;
                }
                else if (item.value.length > 0 && this.state.jockeyMeetTotal.set) {
                    if (this.state.jockeyMeetTotal.num - total < 0) {
                        this.setState({ error: 'Maximum show results cannot exceed race totals', jockeyMeetPlaces: {num: this.state.jockeyMeetTotal.num - (total - parseInt(item.value)), set: true} });
                        document.getElementById(item.id).value = this.state.jockeyMeetTotal.num - (total - parseInt(item.value));
                    }
                    let itemSkip = { skip: true, id: 'jockeyMeetTotal', value: document.getElementById('jockeyMeetTotal').value };
                    this.checkExpand(itemSkip);

                }
                // if (item.value > this.state.jockeyMeetTotal - this.state.jockeyMeetPlaces - this.state.jockeyMeetWins) {
                //     if (!this.state.jockeyMeetTotalSet) {
                //         if (item.value === '') {
                //             var total = parseInt(this.state.jockeyMeetPlaces) + parseInt(this.state.jockeyMeetWins);
                //             this.setState({ jockeyMeetShows: null });
                //         }
                //         else {
                //             var total = parseInt(this.state.jockeyMeetPlaces) + parseInt(this.state.jockeyMeetWins) + parseInt(item.value);
                //         }
                //         document.getElementById('jockeyMeetTotal').value = total;
                //         if (this.state.jockeyMeetWins != null && this.state.jockeyMeetPlaces != null && item.value.length > 0) this.setState({ jockeyMeetTotal: total });
                //     }
                //     else {
                //         this.setState({ error: 'Maximum show results cannot exceed race totals', jockeyMeetShows: parseInt(this.state.jockeyMeetTotal) - parseInt(this.state.jockeyMeetPlaces) - parseInt(this.state.jockeyMeetWins) });
                //         document.getElementById(item.id).value = parseInt(this.state.jockeyMeetTotal) - parseInt(this.state.jockeyMeetPlaces) - parseInt(this.state.jockeyMeetWins);
                //         return
                //     }
                // }
                // if (item.value.length > 0) this.setState({ jockeyMeetShows: item.value, jockeyMeetShowsSet: true });
                // this.focusOut(item);
                // let itemSkip = { skip: true, id: 'jockeyMeetTotal', value: document.getElementById('jockeyMeetTotal').value };
                // this.checkExpand(itemSkip);
            })
        }
        else if (item.id === 'statYear') {
            document.getElementById(item.id).addEventListener('blur', () => {
                if (item.value > moment().year()) {
                    this.setState({ error: 'Year value cannot be in the future', statYear: moment().year() });
                    document.getElementById(item.id).value = moment().year();
                }
                else if (item.value < 1896) {
                    this.setState({ error: 'Value must be after the year 1895', statYear: 1896 });
                    document.getElementById(item.id).value = 1896;
                }
                this.setState({ statYear: item.value });
                this.focusOut(item);
            });
        }
        else if (item.id === 'jockeyYearTotal') {
            document.getElementById(item.id).addEventListener('focusout', () => {
                if ((item.value < this.state.jockeyYearWins) && item.value.length === this.state.jockeyYearWins.length) {
                    this.setState({ error: 'You cannot have less total races than the pre-set win results', jockeyYearTotal: this.state.jockeyYearTotal, jockeyYearWins: this.state.jockeyYearTotal });
                    document.getElementById('jockeyYearWins').value = item.value;
                    this.focusOut(item);
                    return
                }
                this.setState({ jockeyYearTotal: item.value });
                this.focusOut(item);
            })
        }
        else if (item.id === 'jockeyYearWins') {
            document.getElementById(item.id).addEventListener('blur', () => {
                if (parseInt(item.value) > parseInt(this.state.jockeyYearTotal) && (item.value.length >= this.state.jockeyYearTotal.length)) {
                    this.setState({ error: "Maximum the year's win results cannot exceed race totals", jockeyYearWins: this.state.jockeyYearTotal });
                    document.getElementById(item.id).value = this.state.jockeyYearTotal;
                    return
                }
                this.setState({ jockeyYearWins: item.value });
                this.focusOut(item);
            })
        }
    }
    focusOut = (item) => {
        if (this.state.error !== '') setTimeout(() => {
            this.setState({ error: '' });
        }, 2500);
        // console.log('STATE TOTAL',this.state.jockeyMeetTotal);
        if (this.state.jockeyMeetWins.num > 0 && this.state.jockeyMeetWins.num / this.state.jockeyMeetTotal.num != Infinity) this.state.jockeyMeetWins.num / this.state.jockeyMeetTotal.num < 1 ? this.setState({ jockeyMeetWinPercentage: (this.state.jockeyMeetWins.num / this.state.jockeyMeetTotal.num).toFixed(2).toString().substr(1, 3) }) : this.setState({ jockeyMeetWinPercentage: (this.state.jockeyMeetWins.num / this.state.jockeyMeetTotal.num).toFixed(2) });
        if (this.state.jockeyYearWins > 0 && this.state.jockeyYearWins / this.state.jockeyYearTotal != Infinity) this.state.jockeyYearWins / this.state.jockeyYearTotal < 1 ? this.setState({ jockeyYearWinPercentage: (this.state.jockeyYearWins / this.state.jockeyYearTotal).toFixed(2).toString().substr(1, 3) }) : this.setState({ jockeyYearWinPercentage: (this.state.jockeyYearWins / this.state.jockeyYearTotal).toFixed(2) });

        if (this.state.jockeyYearWins !== document.getElementById('jockeyYearWins').value) this.setState({ jockeyYearWins: document.getElementById('jockeyYearWins').value });
        // Clear input width on any property that has been cleared
        if (document.getElementById(item.id).value.length === 0) document.getElementById(item.id).style.removeProperty('width');
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
                                        onChange={(e) => this.checkExpand(e.target)}
                                        name='jockeyMeetTotal'
                                        type='number'
                                        min='0'
                                        placeholder='T'
                                        className='jockeyStat jockeyStats' />
                                    <input
                                        id='jockeyMeetWins'
                                        onBlur={(e) => this.focusOut(e.target)}
                                        max={this.state.jockeyMeetTotal.num - this.state.jockeyMeetPlaces.num - this.state.jockeyMeetShows.num}
                                        onChange={(e) => this.checkExpand(e.target)}
                                        type='number'
                                        min='0'
                                        placeholder='W'
                                        className='jockeyStat jockeyStats' />
                                    <input
                                        id='jockeyMeetPlaces'
                                        onBlur={(e) => this.focusOut(e.target)}
                                        max={this.state.jockeyMeetTotal.num - this.state.jockeyMeetWins.num - this.state.jockeyMeetShows.num}
                                        onChange={(e) => this.checkExpand(e.target)}
                                        type='number'
                                        min='0'
                                        placeholder='P'
                                        className='jockeyStat jockeyStats' />
                                    <input
                                        id='jockeyMeetShows'
                                        onBlur={(e) => this.focusOut(e.target)}
                                        max={this.state.jockeyMeetTotal.num - this.state.jockeyMeetPlaces.num - this.state.jockeyMeetWins.num}
                                        onChange={(e) => this.checkExpand(e.target)}
                                        type='number'
                                        min='0'
                                        placeholder='S'
                                        className='jockeyStat jockeyStats' />
                                    <p className='jockeyStats' style={{ marginLeft: '5px' }}>{this.state.jockeyMeetWinPercentage === '' || this.state.jockeyMeetWins.num === 0 ? 'W%' : this.state.jockeyMeetWinPercentage} </p>
                                    <p className='jockeyStats'>)</p>
                                    <input
                                        id='statYear'
                                        onChange={(e) => this.updateFormState(e.target)}
                                        onBlur={(e) => this.focusOut(e.target)}
                                        type='number'
                                        min={1896}
                                        placeholder="Year"
                                        className='jockeyYearStat jockeyStats' />
                                    <p className='jockeyStats'>: (</p>
                                    <input
                                        id='jockeyYearTotal'
                                        onBlur={(e) => this.focusOut(e.target)}
                                        onChange={(e) => this.checkExpand(e.target)}
                                        name='jockeyYearTotal'
                                        type='number'
                                        min='0'
                                        placeholder='T'
                                        className='jockeyStat jockeyStats' />
                                    <input
                                        id='jockeyYearWins'
                                        onBlur={(e) => this.focusOut(e.target)}
                                        max={this.state.jockeyYearTotal}
                                        onChange={(e) => this.checkExpand(e.target)}
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