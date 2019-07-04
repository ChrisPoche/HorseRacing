import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Horse from '../components/Horse';
import { addHorse } from '../actions/horse';


const TestRide = {
    name: 'Test Ride',
    owner: 'Pender Racing LLC',
    silks: {
        description: 'Cerise, Black Coto And White Emblem On',
        logoLocation: ''
    },
    pedigree: {
        color: 'Gr/ro.',
        sex: 'g(09.25.14)',
        age: 4,
        month: 'Apr',
        auction: {
            auctionHouse: 'OBS',
            date: moment(20130301, 'YYYYMMDD'),
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
        raceConditionStats: {
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
            distance: {
                tomlinsonRating: 326,
                total: 0,
                wins: 0,
                place: 0,
                show: 0,
                earnings: 0,
                bestBeyerSpeed: 0
            }
        },
        pastRaceHistory: [
            {
                raceDate: moment(20150729),
                raceNumber: 3,
                raceTrack: 'Dmr',
                raceCondition: 'fst',
                raceDistance: '6 1/2f',
                raceSplits: {
                    firstCall: ':22.1',
                    secondCall: ':45.2',
                    stretch: '1:11.2',
                    finish: '1:18.1'
                }
            }
        ]
    },
    trackStats: {
        DMR: {
            total: 5,
            wins: 1,
            place: 1,
            show: 1,
            earnings: 62900,
            bestBeyerSpeed: 84
        }
    },
    currentRace: {
        track: 'DMR',
        number: 3,
        odds: '15-1',
        gate: '7',
        medication: 'L',
        projectedWeight: 122,
        jockey: '<jockeyId>'
    }
};



export class AllHorse extends React.Component {
    addHorse = () => {
        this.props.addHorse(TestRide);
    };
    componentDidUpdate() {
        console.log(this.props.horse);
    }
    render() {
        return (
            <div>
                {
                    this.props.horse.length === 0 ? (
                        <p>
                            No one is in the stable
                        </p>
                    ) : this.props.horse.map((horse) => (<Horse key={horse.id} {...horse} />))
                }
                <button onClick={this.addHorse}>Make test horse</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        horse: state.horse
    };
}

const mapDispatchToProps = (dispatch) => ({
    addHorse: (horse) => dispatch(addHorse(horse))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllHorse);