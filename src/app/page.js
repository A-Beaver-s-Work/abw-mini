import { Button } from '@radix-ui/themes';

export default function Home() {
    return (
        <div className="">
            <header className="flex flex-row justify-between w-screen">
                {/*navbar*/}
            </header>
            <main className="">
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
            <footer className="">
                {/*footer*/}
            </footer>
        </div>
    );
}
