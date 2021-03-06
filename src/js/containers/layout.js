import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import Modal from '../components/modal/index';
/**
 * @class Carousel
 * @extends {PureComponent}
 */
export default class Layout extends Component {

    /**
     * @constant propTypes
     * @type {Object}
     */
    static propTypes = {
        isSent: PropTypes.bool.isRequired
    };

    /**
     * @constant state
     * @type {Object}
     */
    state = {
        modal: false,
        modalTwo: false,
        showStatus: this.props.isSent
    }

    render() {

        const { modal, modalTwo, fixedNav, showStatus } = this.state;

        return (
          <section className="content">
            <section className={`header-fix  display`} />
            <header className={`fixed-nav`}>
                <a href="/"><h1>AsSoonAsSeen</h1></a>
                <section className="contact">

                    <Modal
                        className="status"
                        title="Contact Us"
                        open={showStatus}
                        onClose={() => this.setState({ showStatus: !showStatus })}
                        >
                        <p>Message has been successfully sent!</p>
                    </Modal>

                    <Modal
                        className="modal"
                        title="Call Us"
                        btnClass="phone"
                        open={modal === true}
                        onOpen={() => this.setState({ modal: true })}
                        onClose={() => this.setState({ modal: false })}
                        >
                        <p>0044 (0)77 91 075 281</p>
                    </Modal>

                    <Modal
                        className="modal-two"
                        title="Email Us"
                        btnClass="email"
                        open={modalTwo === true}
                        onOpen={() => this.setState({ modalTwo: true })}
                        onClose={() => this.setState({ modalTwo: false })}
                        >
                        <a href="mailto:info@assoonasseen.co.uk?subject=AsSoonAsSoon%Enquiry">info@assoonasseen.co.uk</a>
                    </Modal>

                </section>
                
            </header>
            <main>
                <section className="main-image">
                    <picture>
                        <source media="(max-width: 767px)" srcSet="/images/mobile-main.jpg" />
                        <img src="/images/main-image.jpg" />
                    </picture>
                </section>
               
                <section className="welcome">
                    <p>At a time when new media are multiplying and evolving fast,
                    we cut through the noise, keep the bigger picture under control,
                    focus on content,
                    provide sophisticated graphics and imaginative visuals for a meaningful communication.
                    Let As Soon As Seen take care of your business image.</p>
                </section>
                <section className="homepage-email">
                    <form action="index.php" method="post">
                        <input required placeholder="Name*" name="name" id="name" type="text" />
                        <input required placeholder="Telephone*" name="telephone" id="telephone" type="text" />
                        <input required placeholder="Email*" name="email" id="email" type="text" />
                        <input required placeholder="Subject*" name="subject" id="subject" type="text" />
                        <textarea name="message" placeholder="Message..." id="message" />
                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>AsSoonAsSeen 2017</p>
            </footer>
          </section>
        )
    }
}
