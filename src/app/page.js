import './output.css';
import {Button, Section} from '@radix-ui/themes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Section>
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
                </Section>
                <Section>
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
                </Section>
            </main>
        </div>
    );
}
