import Logo from "../assets/Dribbble New 2023.svg"
import { FaTwitter, FaFacebookSquare, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="h-16 w-[80%] px-3 text-sm">
        <section className="flex flex-wrap justify-between items-center text-center">
            <img src={Logo} className="w-16" alt="dribble logo" />
            <span>For designers</span>
            <span>Hire talent</span>
            <span>Inspiration</span>
            <span>Advertising</span>
            <span>Blog</span>
            <span>About</span>
            <span>Careers</span>
            <span>Support</span>

            <p className="flex gap-2">
                <span><FaTwitter /></span>
                <span><FaFacebookSquare /></span>
                <span><FaInstagram /></span>
                <span><FaPinterest /></span>
            </p>
        </section>

        <section className="flex flex-wrap justify-between font-[10px] text-gray-500 py-8">
            <div className="flex justify-center items-center gap-2 flex-wrap text-center">
                <p>&copy;2024 Dribbble</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Cookies</p>
            </div>
            
            <div className="flex justify-center items-center flex-wrap text-center gap-2">
                <p>Jobs</p>
                <p>Designers</p>
                <p>Freelancers</p>
                <p>Tags</p>
                <p>Places</p>
                <p>Resources</p>
            </div>
        </section>
    </footer>
    )
}

export default Footer