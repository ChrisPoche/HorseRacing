import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../actions/help';


Modal.setAppElement('#app');

class HelpModal extends React.Component {
    render() {
        return (
            <div>
                <Modal
                    id='openModal'
                    closeTimeoutMS={200}
                    isOpen={this.props.help.modal}
                    contentLabel='Hover Help'
                    className='modal'
                >
                    {this.props.help.helpType === 'horseColor' &&
                        <div>
                            <h3 className='modal__title'>Horse Color</h3>
                            <ul className='modal__body'>
                                <li>B - Bay</li>
                                <li>Blk - Black</li>
                                <li>Ch - Chestnut</li>
                                <li>Dkb - Dark Bay</li>
                                <li>Br - Brown</li>
                                <li>Gr - Gray</li>
                                <li>Ro - Roan</li>
                            </ul>
                        </div>
                    }
                    {this.props.help.helpType === 'horseSire' &&
                        <div>
                            <h3 className='modal__title'>Sire</h3>
                            <p className='modal__body'>The horse's father (grandfather), and stud fee</p>
                        </div>
                    }
                    {this.props.help.helpType === 'horseDam' &&
                        <div>
                            <h3 className='modal__title'>Dam</h3>
                            <p className='modal__body'>The horse's mother (maternal grandfather)</p>
                        </div>
                    }
                    {this.props.help.helpType === 'horseBreeder' &&
                        <div>
                            <h3 className='modal__title'>Breeder</h3>
                            <p className='modal__body'>The horse's breeder</p>
                        </div>
                    }
                    {this.props.help.helpType === 'horseTrainer' &&
                        <div>
                            <h3 className='modal__title'>Trainer</h3>
                            <p className='modal__body'>The horse's trainer, their meet stats at the current racetrack, and overall stats for the current year</p>
                        </div>
                    }
                    <div className='modal__wedge'></div>
                </Modal>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        help: state.help
    };
};

export default connect(mapStateToProps)(HelpModal);