import ProfileCard from "./ProfileCard";
import AlexaImg from "./img/alexa.png"
import CortanaImg from "./img/cortana.png"
import SiriImg from "./img/siri.png"
import "bulma/css/bulma.css"

function App() {
    return (
        <div>
            <h1>Asistentes</h1>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard titulo="Alexa" handle="@alexa88" img={AlexaImg} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="Cortana" handle="@cortana_02" img={CortanaImg} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="Siri" handle="@siri_98" img={SiriImg} />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default App;