import { Button } from '@radix-ui/themes';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex flex-row justify-between w-screen">
                {/*navbar*/}
            </header>
            <main className="flex-grow">
                {/*content*/}
            </main>
            <footer className="bg-creme">
                <div className="flex flex-row py-8">
                    <div className="border-stone-300 pl-8 pr-4 w-1/3 space-y-4 small-col-12-12 large-col-4-12 mission text-left">
                        <h6 className="py-2 text-stone-500 text-lg font-proxima font-bold uppercase">
                            We inspire people to plant, nurture, and celebrate trees.
                        </h6>
                        <p className=" text-stone-500 font-serif text-base italic tracking-tighter">
                            A Beaver's Work is a 501(c)(3) nonprofit conservation and education organization. 
                            A million members, donors, and partners support our programs to make our world greener and healthier.
                        </p>
                        <a href="/about/" className="inline-block text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                            More about our mission and programs...
                        </a>
                        <p className="space-x-2" >
				            <a href="https://www.facebook.com/" aria-label="Facebook">
                                <img src="/images/fb.png" className="inline block w-5 h-auto"/>
                            </a>
				            <a href="https://instagram.com/" aria-label="Instagram">
                                <img src="/images/insta.png" className="inline block w-5 h-auto"/></a>
				            <a href="https://www.twitter.com/" aria-label="Twitter/X">
                                <img src="/images/x.png" className="inline block w-5 h-auto"/>
                            </a>
				            <a href="https://www.pinterest.com/" aria-label="Pinterest">
                                <img src="/images/pin.png" className="inline block w-5 h-auto"/>
                            </a>
			            </p>
                    </div>
                    <div className="border-l border-stone-300 pl-6 pr-8 w-1/6 space-y-4 small-col-12-12 medium-col-3-12 large-col-2-12 text-left">
                        <h6 className="py-2 text-stone-500 text-lg font-proxima font-bold uppercase">
                            Info
                        </h6>
                        
                        <ul>
                            <li>
                                <a href="/about/annualreport" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    Annual Report
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/media" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    Media
                                </a>
                            </li>
                            <li>
                                <a href="/careers" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l border-stone-300 pl-6 pr-8 w-1/6 space-y-4 small-col-12-12 medium-col-3-12 large-col-2-12 text-left">
                        <h6 className="py-2 text-stone-500 text-lg font-proxima font-bold uppercase">
                            Action
                        </h6>
                        
                        <ul>
                            <li>
                                <Button href="/donate" className="inline-block mb-4 px-2 py-1 text-dark-green font-proxima font-bold text-base uppercase rounded-lg border border-dark-green hover:bg-dark-creme">
                                    Donate Now
                                </Button>
                            </li>
                            <li>
                                <a href="/partnerships" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    Corporate Partnerships
                                </a>
                            </li>
                            <li>
                                <a href="/states" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    Your State
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l border-stone-300 pl-6 pr-8 w-1/6 space-y-4 small-col-12-12 medium-col-3-12 large-col-2-12 text-left">
                        <h6 className="py-2 text-stone-500 text-lg font-proxima font-bold uppercase">
                            Connect
                        </h6>
                        
                        <ul>
                            <li>
                                <a href="/status" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    Order Status
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/optout" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    Opt Out
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <h8 className="py-2 text-stone-500 font-proxima text-base font-bold uppercase">
                                    1-123-456-7899
                                </h8>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l border-stone-300 pl-6 pr-8 w-1/6 space-y-4 small-col-12-12 medium-col-3-12 large-col-2-12 text-left">
                        <h6 className="py-2 text-stone-500 text-lg font-proxima font-bold uppercase">
                            Related Sites
                        </h6>
                        
                        <ul>
                            <li>
                                <a href="/farm" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    A Beaver's Work Farm 
                                </a>
                            </li>
                            <li>
                                <a href="/carbon" className="inline-block py-2 text-stone-500 font-proxima font-bold text-base uppercase hover:underline">
                                    A Beaver's Work Carbon
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-dark-creme text-center">
                    <span className="uppercase space-x-4">
                        <img src="/images/logo.png" className="inline block w-8 h-auto py-2" alt="A Beaver's Work" />
                        <p className="inline block font-proxima font-bold uppercase text-stone-500 text-xs">
                            &copy; 2024 A Beaver's Work. &nbsp; 
                            <a href="/about/privacy.cfm">Privacy policy</a>
                            &nbsp;
                            &nbsp;
                            <a href="/about/terms.cfm">Terms of Use</a>
                        </p>
                    </span>
                </div>
            </footer>
        </div>);
}
