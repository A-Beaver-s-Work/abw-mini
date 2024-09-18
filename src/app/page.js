import './output.css';
import { Button } from '@radix-ui/themes';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex flex-row justify-between w-screen">
                {/*navbar*/}
            </header>
            <main className="flex-grow">
                <div className="relative h-screen bg-[url('/img/hero.jpg')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="flex flex-col items-start justify-center h-full pl-10">
                        <div className="text-white font-extrabold text-6xl">
                           <p>Be a part of</p>
                            <p>planting millions</p>
                        </div>
                        <div className="text-white font-light text-2xl mt-4">
                            <p>This planting season, we have big goals to plant trees in forests and communities </p>
                            <p>where they'll do the most good. But we can't meet them without you.</p>
                        </div>
                        <div className="absolute bottom-14 left-10 flex gap-8 z-0">
                            <Button style={{backgroundColor: '#f3c851'}}
                                    className="text-base font-light text-black px-10 py-5 rounded-lg">DONATE NOW </Button>
                            <Button className="text-base font-light bg-white text-black px-10 py-5 rounded-lg">LEARN
                                MORE </Button>
                        </div>
                    </div>
                </div>
            
                <div className="bg-light-gray">
                    <div className="flex flex-col h-full py-24 justify-center items-center">
                        <h1 className="py-2 text-dark-green text-center text-3xl font-proxima-h font-extrabold uppercase">
                            We are the Arbor Day Foundation
                        </h1>
                        <div className="text-custom-black font-light text-1xl leading-7 text-center font-proxima">
                            <p>We’re a global nonprofit inspiring people to plant, nurture, and celebrate trees. In the face of a changing world, we’re</p>
                            <p>scaling our efforts to plant 500 million trees by 2027 in areas where they’re needed most. With a strong network of</p>
                            <p>global partners, a science-based approach, and more than 50 years of planting trees all over the world, we know what it</p>
                            <p>takes to make it happen.</p>
                        </div>
                        <div className="text-custom-black font-light text-1xl leading-7 text-center font-proxima pt-3">
                            <p>Help us plant more trees, educate more people, get more hands in the dirt, and support more lives across the globe.</p>
                        </div>
                        <div className="flex py-8">
                            <Button className="text-lg bg-custom-yellow border border-border-yellow font-light text-black px-10 py-3 font-proxima rounded-lg uppercase">plant trees now </Button>
                        </div>
                    </div>
                </div>
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
        </div>
    );
}
