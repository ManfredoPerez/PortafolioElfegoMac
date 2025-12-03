import { WindowsControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper"


const Contact = () => {
  return (
    <>
        <div id="window-header">
            <WindowsControls target="contact" />
            <h2>Contáctame</h2>
        </div>

        <div className="p-5 space-y-5">
            <div className="flex items-center space-x-4">
                <img 
                    src="/images/elfego.png" 
                    alt="Elfego"
                    className="w-24 h-24 rounded-full" 
                />
                
                <h2 className="text-3xl font-bold">Elfego Manfredo Pérez</h2> 
            </div>

            <h3>Conectemos</h3>
            <p>¿Tienes una idea? ¿Un error que solucionar? ¿O simplemente quieres hablar de tecnología? Me apunto.</p>
            <p> Soy una persona organizada, enfocada en el aprendizaje continuo y en aportar soluciones reales. Me apasiona el
                desarrollo de software, la ciberseguridad y la infraestructura. Disfruto trabajar en equipo y asumir retos
                técnicos que me permitan seguir mejorando
            </p>
            <p>perezmanfredo959@gmail.com</p>

            <ul>
                {socials.map(( {id, bg, link, icon, text }) => (
                    <li key={id} style={{ background: bg}}>
                        <a 
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={text}
                        >
                            <img src={icon} alt={text} className="size-5" />
                            <p> {text} </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;