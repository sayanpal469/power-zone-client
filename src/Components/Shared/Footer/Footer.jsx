import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-black text-neutral-content">
                <div>
                    <span class="text-2xl font-semibold">POWER <span className='text-warning'>X</span></span>
                </div>
                <div>
                    <span class="text-xl">Need Help?</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="text-xl">Digital Resourses</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span class="text-xl">Connect with us</span>
                    <div class="grid grid-flow-col gap-4 mt-3">
                        <a ><AiFillYoutube className='text-3xl'></AiFillYoutube></a>
                        <a ><FaFacebookF className='text-2xl'></FaFacebookF></a>
                        <a ><AiOutlineInstagram className='text-3xl'></AiOutlineInstagram></a>
                        <a ><AiOutlineWhatsApp className='text-3xl'></AiOutlineWhatsApp></a>
                    </div>
                </div>
                <div>
                    <span class="text-xl">Join Our Newsletter</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;