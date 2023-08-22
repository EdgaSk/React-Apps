import React from 'react';
import Nftsdata from "../data/nftdata.json";
import './styles/Home.css';
import Hero from '../components/Hero';
import Nftcard from '../components/NFTcard';

const Home = () => {
    const first5Nfts = Nftsdata.slice(0, 5);

    return (
        <main>
            <section>
                <Hero 
                    heroTitle="World Of Top Works"
                    heroSubtitle="Welcome to the world of rare digital art. Explore     the best art from hand-picked digital artist out there and find     the hidden gem."
                />
            </section>
            <section>
                <div className="sectionTitle" >Feature Items</div>
                <div className="featureCointainer">
                    {first5Nfts.map((Nftdata) => (
                        <Nftcard 
                            key={Nftdata.id} 
                            nftImg={Nftdata.image}
                            nftName={Nftdata.name}
                            nftPrice={Nftdata.price}
                            nftCrypto={Nftdata.crypto}
                            lastSale={Nftdata.lastsale}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;