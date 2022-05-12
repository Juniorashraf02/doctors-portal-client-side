import React from 'react';
import footerImage from '../../../assets/images/footer.png';


const Footer = () => {
    const years = new Date().getFullYear();
    // mt-[-80px]
    return (
        <section className="bg-base-200">
            <footer className="footer p-10  text-base-content "  style={{
            background:`url(${footerImage})`,
            'backgroundSize':'cover'
        }}>
                <div>
                    <span className="footer-title">Services</span>
                    <a href="#d" className="link link-hover">Emergency Checkup</a>
                    <a href="#d" className="link link-hover">Monthly Checkup</a>
                    <a href="#d" className="link link-hover">Weekly Checkup</a>
                    <a href="#d" className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <a href="#d" className="link link-hover">Fluoride Treatment</a>
                    <a href="#d" className="link link-hover">Teeth Whitening</a>
                    <a href="#d" className="link link-hover">Cavity Filling</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <p>New York - 101010 Hudson</p>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
            <p>Copyright &copy;{years} All Rights Reserved</p>
        </section>
    );
};

export default Footer;