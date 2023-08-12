'use client';
import MyTimagotchi from "./MyTimagotchi";

export default function MyTimagotchiList({ Timagtochis }) {
    let rows = [];
    // Timagtochis.forEach((Timagotchi, index) => {
    //     rows.push(<MyTimagotchi Timagotchi={Timagotchi} key={index} />);
    // });

    return (
        <section>
            <div className="d-flex justify-content-center" >
                <h1 className='underlined'>MY TIMAGOTCHIS</h1>
            </div>
            <div className='container'>
                <div className='row row-cols-auto'>
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />
                    <MyTimagotchi />

                </div>
            </div>
        </section>
    );
};