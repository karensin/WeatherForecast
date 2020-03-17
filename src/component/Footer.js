import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container>
            <section className="pageFooter">
                <section className='contacts' id="contacts">
                    <div className='connect'>Interested in collaborating? Let's connect! </div>
                    <h4 className="align-left p-2">
                        <section className='contactsList'>
                            <a target="_blank" rel="noopener noreferrer" href="mailto: kkwsin@gmail.com">
                                <i className="fas fa-2x fa-envelope"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/karensin94/'>
                                <i className="fab fa-2x fa-linkedin"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/karensin'>
                                <i className="fab fa-2x fa-github"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href='https://angel.co/karen-kaweng-sin'>
                                <i className="fa fa-2x fa-angellist"></i>
                            </a>
                        </section>
                    </h4>
                </section>
                <h4 className="copyright">Karen Sin 2020</h4>
                <footer>

                </footer>
            </section>

        </Container>

    )
}
