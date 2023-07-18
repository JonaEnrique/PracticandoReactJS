import { useState } from "react";

function ProfileCard({ titulo, handle, img }) { // Desestructuracion de props

    const [count, setCount] = useState(0);

    function handleClickRes() {
        if(count > 0)
            setCount(count - 1);
    }

    function handleClickSum() {
        setCount(count + 1);
    }

    return (

        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={img} alt={"Logo de " + titulo} />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <div>El titulo es {titulo}</div>
                    <p>El handle es: {handle}</p>
                    <div className="columns">
                        <div className="column">
                            <button onClick={handleClickRes} className="button is-danger is-fullwidth">
                                <p>-</p>
                            </button>
                        </div>
                        <div className="column">
                            <span><p className="content is-medium">{count}</p></span>
                        </div>
                        <div className="column">
                            <button onClick={handleClickSum} className="button is-primary is-fullwidth">
                                <p>+</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;