import {Button} from '@radix-ui/themes';
import './output.css';

export default function HomePage() {


    return (

        <div>

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

        </div>
    );
}
