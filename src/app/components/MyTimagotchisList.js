import MyTimagotchi from "./MyTimagotchi";



export default function MyTimagotchiList() {

    return (
        <section>
            <div className="d-flex justify-content-center" >
                <h1 className='underlined'>My Timagotchis</h1>
            </div>
            <div>
                <MyTimagotchi />
            </div>
        </section>
    );
};