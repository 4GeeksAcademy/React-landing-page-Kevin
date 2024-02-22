import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Navbar from "./Navbar";
import CardPrincipal from "../CardPrincipal";

//create your first component
const Home = () => {
    return (
        <div>
            <Navbar/>
            <CardPrincipal/>
            <div className="container">
                <div className="row justify-content-center mt-3">
                    <div className="col-3">
                        <Card name="Mar del Plata" 
                        image="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/01/01184124/Verano-2019-Mar-del-Plata-Atardecer-y-amanecer-con-drone-2.jpg"
                        text="Magníficas playas, amplias bahías, acantilados imponentes y bosques se alternan a lo largo de 47 km de costa. 
                        Sierras, campos ondulados, arboledas, lagunas, arroyos, quintas y canteras conforman paisajes rurales de gran belleza. 
                        La temperatura media en invierno es de 12 ºC a 14 ºC y en verano es de 23 ºC a 27 ºC" />
                    </div>
                    <div className="col-3">
                        <Card name="Rayo Vallecano" 
                        image="https://e0.pxfuel.com/wallpapers/719/791/desktop-wallpaper-rayo-vallecano-fondos-espana-movil-thumbnail.jpg"
                        text="El Rayo Vallecano de Madrid, S. A. D. es un club madrileño. Fundado el 29/05/1924. En los años 50, el Rayo 
                        se acercó a River Plate, ya que River fue jugar con el Real Madrid, dándoles una foto del plantel 
                        firmada. Entonces, River le dio al Rayo dos juegos de camisetas con La Banda Roja, que aun hoy siguen en nuestra camiseta.​" />
                    </div>
                    <div className="col-3">
                        <Card name="Andalucia" 
                        image="https://img.freepik.com/fotos-premium/vista-paseo-maritimo-cadiz-catedral-calle-al-fondo-cadiz-espana_253104-1093.jpg"
                        text="La riqueza cultural andaluza parte especialmente de su patrimonio. Destaca la Alhambra, en Granada, 
                        monumento árabe que se ha convertido en uno de los más importantes del mundo. También, son de gran 
                        importancia la Mezquita de Córdoba, o la Giralda y la Torre del Oro, en Sevilla." />
                    </div>
                    <div className="col-3">
                        <Card name="Madrid" 
                        image="https://media.timeout.com/images/105860214/750/422/image.jpg" 
                        text="Madrid es una ciudad multicultural. Puedes ir desde museos gratuitos hasta los sitios VIP más exclusivos. 
                        Esta ciudad no sabe de prejuicios. Puedes disfrutar de Madrid de forma infinita. En Madrid puedes callejear,
                        como un “gato”, dicen los madrileños, o como un “minino”, por que Madrid te pregunta de dónde eres."/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
