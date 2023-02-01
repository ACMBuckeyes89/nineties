
export function BatmanHistorial(){

    return (
        <>
            <div className="public">
                <h1 className="announce">Gotham Public Announcement</h1>
                <p>
                    The Dark Knight is on a crusade to bring justice for the citizens of Gotham City.
                The Joker has escaped Arkham Asylum and a whole host of villains have escaped with him! Reports
                coming out of Gotham PD claim the Penguin, Riddler, and Two Face are on the loose...and Bane is alive!
                Citizens of Gotham, BEWARE — these villains are armed and dangerous. The Joker's laughing gas turns
                anyone who inhales it psychotic. Two Face gambles his next dangerous moves with the flip of his coin.
                If you feel extremely cold in an enclosed space, look behind you because Mr. Freeze can turn any setting ice cold.
                The Riddler and Penguin have recently teamed up to gain control of Gotham's darkest places. And if you come 
                face to face with Bane...RUN!
                </p>
            </div>

        </>
    );
}

type PublicEnemies = {
    alias: string,
    symbol: string,
    name: string,
    job: string
};

export function BatmanVillains(props: PublicEnemies) {

    return(
        <>
          <div>
            <ul>
                <li>{props.alias}</li>
                <li>{props.symbol}</li>
                <li>{props.name}</li>
                <li>{props.job}</li>
            </ul>
          </div>  
        </>
    );
}

type ComicStore = {
    name: string,
    city: string,
    onlineStore: string
}

export function SupportComics(props: ComicStore) {
    let {name, city, onlineStore} = props;

    return(
        <>
           <div>
            <ul>
                <h4>{name}</h4>
                <li>City: {city}</li>
                {onlineStore === "Yes" ? <>
                    <li>Online Store: {onlineStore}</li>
                </>:<li>Online Store: None</li> }
            </ul>
          </div> 
        </>
    );
}