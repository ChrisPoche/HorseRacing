import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';



const jockeyTemplate = {
    name: '',
    meetStats: {
        total: 0,
        wins: 0,
        place: 0,
        show: 0,
        winPercentage: 0
    },
    yearStats: {
        year: 2019,
        total: 0,
        wins: 0,
        winPercentage: 0
    }
};


const horseTemplate = {
    name: '',
    owner: '',
    silks: {
        description: '',
        logoLocation: ''
    },
    pedigree: {
        color: '', // B - Bay, Blk - Black, Ch - Chestnut, Dkb - Dark Bay, Br - Brown, Gr - Gray, Ro - Roan
        sex: '', // c - colt, f - filly, g - gelding, h - horse, m - mare, r - ridgling
        age: 0,
        month: '(Jan)',
        auction: { // can be null  BAR, OBS, KEE - OBS APR15 or KEESEP9 or BARJAN13 $8,500
            auctionHouse: 'OBS',
            date: moment(20130301, 'YYYYMMDD'), // to be represented as ex. APR15
            price: 125000
        },
        parents: {
            sire: {
                name: 'Zensational',
                sire: "Unbridled's Song",
                studFee: 5000
            },
            dam: {
                name: 'Cuyahoga',
                sire: 'Theatrical*Ire'
            },
            breeder: 'Kinsman Farm (Ky)',
            trainer: {
                name: 'Pender Michael',
                meetStats: {
                    total: 23,
                    wins: 1,
                    place: 2,
                    show: 3,
                    winPercentage: .04
                },
                yearStats: {
                    year: 2015,
                    total: 102,
                    wins: 11,
                    winPercentage: .11
                }
            }
        },
        medication: 'L',
        projectedWeight: 122,
        stats: {
            life: {
                total: 14,
                wins: 2,
                place: 1,
                show: 2,
                earnings: 85050,
                bestBeyerSpeed: 84
            },
            currentYear: {
                year: 2015,
                total: 6,
                wins: 1,
                place: 0,
                show: 1,
                earnings: 21400,
                bestBeyerSpeed: 81
            },
            priorYear: {
                year: 2014,
                total: 4,
                wins: 1,
                place: 1,
                show: 0,
                earnings: 53900,
                bestBeyerSpeed: 84
            },
            trackStats: { // this will need to be moved eventually when doing it by track
                total: 5,
                wins: 1,
                place: 1,
                show: 1,
                earnings: 62900,
                bestBeyerSpeed: 84
            },
            trackConditionStats: {
                dryFast: {
                    total: 5,
                    wins: 1,
                    place: 0,
                    show: 0,
                    earnings: 16000,
                    bestBeyerSpeed: 81
                },
                wet: {
                    tomlinsonRating: 340,
                    total: 0,
                    wins: 0,
                    place: 0,
                    show: 0,
                    earnings: 0,
                    bestBeyerSpeed: 0
                },
                synthetic: {
                    total: 5,
                    wins: 1,
                    place: 1,
                    show: 1,
                    earnings: 62900,
                    bestBeyerSpeed: 84
                },
                turf: {
                    tomlinsonRating: 284,
                    total: 4,
                    wins: 0,
                    place: 0,
                    show: 1,
                    earnings: 6150,
                    bestBeyerSpeed: 81
                },
                distance: {  // will need to change by race distance
                    tomlinsonRating: 326,
                    total: 0,
                    wins: 0,
                    place: 0,
                    show: 0,
                    earnings: 0,
                    bestBeyerSpeed: 0
                }
            },
            raceHistory: [
                {
                    raceDate: moment(20150729),
                    raceNumber: 3,
                    raceTrack: 'Dmr',
                    raceCondition: 'fst', // fr - frozen, fm - firm, fst - fast, gd - good, hy - heavy, my - muddy, sl - slow, sly - sloppy, wf - wet fast
                    raceDistance: '6 1/2f',
                    raceSplits: {
                        firstCall: ':22.1',
                        secondCall: ':45.2',
                        stretch: '1:11.2',
                        finish: '1:18.1'
                    }
                }
            ]
        }
    }
};
const TestRide = {
    name: 'Test Ride',
    owner: 'Pender Racing LLC',
    silks: {
        description: 'Cerise, Black Coto And White Emblem On',
        logoLocation: ''
    },
    medication: 'L',
    projectedWeight: 122,
    pedigree: {
        color: 'Gr/ro.', // B - Bay, Blk - Black, Ch - Chestnut, Dkb - Dark Bay, Br - Brown, Gr - Gray, Ro - Roan
        sex: 'g(09.25.14)', // c - colt, f - filly, g - gelding, h - horse, m - mare, r - ridgling
        age: 4,
        month: 'Apr',
        auction: { // can be null  BAR, OBS, KEE - OBS APR15 or KEESEP9 or BARJAN13 $8,500
            auctionHouse: 'OBS',
            date: moment(20130301, 'YYYYMMDD'), // to be represented as ex. APR15
            price: 125000
        },
        parents: {
            sire: {
                name: 'Zensational',
                sire: "Unbridled's Song",
                studFee: 5000
            },
            dam: {
                name: 'Cuyahoga',
                sire: 'Theatrical*Ire'
            },
            breeder: 'Kinsman Farm (Ky)',
            trainer: {
                name: 'Pender Michael',
                meetStats: {
                    total: 23,
                    wins: 1,
                    place: 2,
                    show: 3,
                    winPercentage: .04
                },
                yearStats: {
                    year: 2015,
                    total: 102,
                    wins: 11,
                    winPercentage: .11
                }
            }
        },
    },
    stats: {
        life: {
            total: 14,
            wins: 2,
            place: 1,
            show: 2,
            earnings: 85050,
            bestBeyerSpeed: 84
        },
        currentYear: {
            year: 2015,
            total: 6,
            wins: 1,
            place: 0,
            show: 1,
            earnings: 21400,
            bestBeyerSpeed: 81
        },
        priorYear: {
            year: 2014,
            total: 4,
            wins: 1,
            place: 1,
            show: 0,
            earnings: 53900,
            bestBeyerSpeed: 84
        },
        trackStats: { // this will need to be moved eventually when doing it by track
            total: 5,
            wins: 1,
            place: 1,
            show: 1,
            earnings: 62900,
            bestBeyerSpeed: 84
        },
        trackConditionStats: {
            dryFast: {
                total: 5,
                wins: 1,
                place: 0,
                show: 0,
                earnings: 16000,
                bestBeyerSpeed: 81
            },
            wet: {
                tomlinsonRating: 340,
                total: 0,
                wins: 0,
                place: 0,
                show: 0,
                earnings: 0,
                bestBeyerSpeed: 0
            },
            synthetic: {
                total: 5,
                wins: 1,
                place: 1,
                show: 1,
                earnings: 62900,
                bestBeyerSpeed: 84
            },
            turf: {
                tomlinsonRating: 284,
                total: 4,
                wins: 0,
                place: 0,
                show: 1,
                earnings: 6150,
                bestBeyerSpeed: 81
            },
            distance: {  // will need to change by race distance
                tomlinsonRating: 326,
                total: 0,
                wins: 0,
                place: 0,
                show: 0,
                earnings: 0,
                bestBeyerSpeed: 0
            }
        },
        raceHistory: [
            {
                raceDate: moment(20150729),
                raceNumber: 3,
                raceTrack: 'Dmr',
                raceCondition: 'fst', // fr - frozen, fm - firm, fst - fast, gd - good, hy - heavy, my - muddy, sl - slow, sly - sloppy, wf - wet fast
                raceDistance: '6 1/2f',
                raceSplits: {
                    firstCall: ':22.1',
                    secondCall: ':45.2',
                    stretch: '1:11.2',
                    finish: '1:18.1'
                }
            }
        ]
    }
};

const TestRideJockey = {
    name: 'Nicolas G',
    meetStats: {
        total: 54,
        wins: 1,
        place: 3,
        show: 4,
        winPercentage: .02
    },
    yearStats: {
        year: 2015,
        total: 285,
        wins: 15,
        winPercentage: .05
    }
};



class Horse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverHelp: props.help.hoverHelp
        }
    };
    componentDidMount = () => {
        const helpDelay = (fn) => {
            let timer;
            return function () {
                clearTimeout(timer);
                timer = setTimeout(fn, 500);
            }
        }
        const changeBackground = () => {
            // const test = document.getElementById('test');
            // console.log(test);
            // test.style.backgroundColor = color;
            console.log('color change');
        }
    }
    render() {
        return (

            <div>
                <hr />
                <div className='stats' >
                    <div className='firstColumn'>
                        <div className='bettingInfo'>
                            <p className='gate'>7</p>
                            <p className='odds'>15-1</p>
                        </div>
                        <div className='horseInfo'>
                            <p className='horseName'>{TestRide.name}</p>
                            <h4>Own: {TestRide.owner}</h4>
                            <p>{TestRide.silks.description}</p>
                        </div>
                        <p className='jockey'>{TestRideJockey.name.toUpperCase()} ({TestRideJockey.meetStats.total} {TestRideJockey.meetStats.wins} {TestRideJockey.meetStats.place} {TestRideJockey.meetStats.show} {TestRideJockey.meetStats.winPercentage.toString().substr(1, 3)}) {TestRideJockey.yearStats.year}: ({TestRideJockey.yearStats.total} {TestRideJockey.yearStats.wins} {TestRideJockey.yearStats.winPercentage.toString().substr(1, 3)})</p>
                    </div>
                    <div className='secondColumn'>
                        <p id='test' onMouseEnter={this.changeBackground }>{TestRide.pedigree.color} {TestRide.pedigree.sex} {TestRide.pedigree.age} ({TestRide.pedigree.month}) {TestRide.pedigree.auction.auctionHouse.toUpperCase()}{moment(TestRide.pedigree.auction.date).format('MMMYY').toUpperCase()} ${TestRide.pedigree.auction.price.toLocaleString()}</p>
                        <p>Sire: {TestRide.pedigree.parents.sire.name} ({TestRide.pedigree.parents.sire.sire}) ${TestRide.pedigree.parents.sire.studFee.toLocaleString()}</p>
                        <p>Dam: {TestRide.pedigree.parents.dam.name} ({TestRide.pedigree.parents.dam.sire})</p>
                        <p>Br: {TestRide.pedigree.parents.breeder}</p>
                        <p>Tr: {TestRide.pedigree.parents.trainer.name} ({TestRide.pedigree.parents.trainer.meetStats.total} {TestRide.pedigree.parents.trainer.meetStats.wins} {TestRide.pedigree.parents.trainer.meetStats.place} {TestRide.pedigree.parents.trainer.meetStats.show} {TestRide.pedigree.parents.trainer.meetStats.winPercentage.toString().substr(1, 3)}) {TestRide.pedigree.parents.trainer.yearStats.year}: ({TestRide.pedigree.parents.trainer.yearStats.total} {TestRide.pedigree.parents.trainer.yearStats.wins} {TestRide.pedigree.parents.trainer.yearStats.winPercentage.toString().substr(1, 3)})</p>
                    </div>
                    <div className='medication'>
                        <p>{TestRide.medication} {TestRide.projectedWeight}</p>
                    </div>
                    <div>
                        <table className='tableStats'>
                            <tbody>
                                <tr className='tableLife'>
                                    <td>Life</td>
                                    <td>{TestRide.stats.life.total}</td>
                                    <td>{TestRide.stats.life.wins}</td>
                                    <td>{TestRide.stats.life.place}</td>
                                    <td>{TestRide.stats.life.show}</td>
                                    <td>${TestRide.stats.life.earnings.toLocaleString()}</td>
                                    <td>{TestRide.stats.life.bestBeyerSpeed}</td>
                                </tr>
                                <tr>
                                    <td>{TestRide.stats.currentYear.year}</td>
                                    <td>{TestRide.stats.currentYear.total}</td>
                                    <td>{TestRide.stats.currentYear.wins}</td>
                                    <td>{TestRide.stats.currentYear.place}</td>
                                    <td>{TestRide.stats.currentYear.show}</td>
                                    <td>${TestRide.stats.currentYear.earnings.toLocaleString()}</td>
                                    <td>{TestRide.stats.currentYear.bestBeyerSpeed}</td>
                                </tr>
                                <tr>
                                    <td>{TestRide.stats.priorYear.year}</td>
                                    <td>{TestRide.stats.priorYear.total}</td>
                                    <td>{TestRide.stats.priorYear.wins}</td>
                                    <td>{TestRide.stats.priorYear.place}</td>
                                    <td>{TestRide.stats.priorYear.show}</td>
                                    <td>${TestRide.stats.priorYear.earnings.toLocaleString()}</td>
                                    <td>{TestRide.stats.priorYear.bestBeyerSpeed}</td>
                                </tr>
                                <tr>
                                    <td>Dmr</td>
                                    <td>{TestRide.stats.trackStats.total}</td>
                                    <td>{TestRide.stats.trackStats.wins}</td>
                                    <td>{TestRide.stats.trackStats.place}</td>
                                    <td>{TestRide.stats.trackStats.show}</td>
                                    <td>${TestRide.stats.trackStats.earnings.toLocaleString()}</td>
                                    <td>{TestRide.stats.trackStats.bestBeyerSpeed}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table className='tableStats conditions'>
                            <tbody>
                                <tr>
                                    <td>D.Fst</td>
                                    <td>{TestRide.stats.trackConditionStats.dryFast.total}</td>
                                    <td>{TestRide.stats.trackConditionStats.dryFast.wins}</td>
                                    <td>{TestRide.stats.trackConditionStats.dryFast.place}</td>
                                    <td>{TestRide.stats.trackConditionStats.dryFast.show}</td>
                                    <td>${TestRide.stats.trackConditionStats.dryFast.earnings.toLocaleString()}</td>
                                    <td>{TestRide.stats.trackConditionStats.dryFast.bestBeyerSpeed}</td>
                                </tr>
                                <tr>
                                    <td>Wet({TestRide.stats.trackConditionStats.wet.tomlinsonRating})</td>
                                    <td>{TestRide.stats.trackConditionStats.wet.total}</td>
                                    <td>{TestRide.stats.trackConditionStats.wet.wins}</td>
                                    <td>{TestRide.stats.trackConditionStats.wet.place}</td>
                                    <td>{TestRide.stats.trackConditionStats.wet.show}</td>
                                    <td>${TestRide.stats.trackConditionStats.wet.earnings.toLocaleString()}</td>
                                    <td>{TestRide.stats.trackConditionStats.wet.bestBeyerSpeed}</td>
                                </tr>
                                <tr>
                                    <td>Synth</td>
                                    <td>{TestRide.stats.trackConditionStats.synthetic.total}</td>
                                    <td>{TestRide.stats.trackConditionStats.synthetic.wins}</td>
                                    <td>{TestRide.stats.trackConditionStats.synthetic.place}</td>
                                    <td>{TestRide.stats.trackConditionStats.synthetic.show}</td>
                                    <td>${TestRide.stats.trackConditionStats.synthetic.earnings.toLocaleString()}</td>
                                    <td>{TestRide.stats.trackConditionStats.synthetic.bestBeyerSpeed}</td>
                                </tr>
                                <tr>
                                    <td>Turf({TestRide.stats.trackConditionStats.turf.tomlinsonRating})</td>
                                    <td>{TestRide.stats.trackConditionStats.turf.total}</td>
                                    <td>{TestRide.stats.trackConditionStats.turf.wins}</td>
                                    <td>{TestRide.stats.trackConditionStats.turf.place}</td>
                                    <td>{TestRide.stats.trackConditionStats.turf.show}</td>
                                    <td>${TestRide.stats.trackConditionStats.turf.earnings.toLocaleString()}</td>
                                    <td>{TestRide.stats.trackConditionStats.turf.bestBeyerSpeed}</td>
                                </tr>
                                <tr>
                                    <td>Dst({TestRide.stats.trackConditionStats.distance.tomlinsonRating})</td>
                                    <td>{TestRide.stats.trackConditionStats.distance.total}</td>
                                    <td>{TestRide.stats.trackConditionStats.distance.wins}</td>
                                    <td>{TestRide.stats.trackConditionStats.distance.place}</td>
                                    <td>{TestRide.stats.trackConditionStats.distance.show}</td>
                                    <td>${TestRide.stats.trackConditionStats.distance.earnings.toLocaleString()}</td>
                                    <td>{TestRide.stats.trackConditionStats.distance.bestBeyerSpeed}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('mapping state', state);
    return {
        help: state.help
    };
};

export default connect(mapStateToProps)(Horse);