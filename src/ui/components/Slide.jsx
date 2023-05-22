import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/cartel.css";

const images = [
  <img alt="funcore" height='100' src="\resources\img\slide\funcoreCut.png" />,
  <img alt="combate" src="\resources\img\slide\combateCut.png" />,
  <img alt="taekwondo" height='100' src="\resources\img\slide\taekwondoCut.png" />,
  <img alt="tricking" height='100' src="\resources\img\slide\trickingCut.png" />,
];
const imagesmovil = [
  <img alt="funcore" height='100' src="\resources\img\slide\slidemovil\funcoreCut.png" />,
  <img alt="combate" src="\resources\img\slide\slidemovil\combateCut.png" />,
  <img alt="taekwondo" height='100' src="\resources\img\slide\slidemovil\taekwondoCut.png" />,
  <img alt="tricking" height='100' src="\resources\img\slide\slidemovil\trickingCut.png" />,
];

export function Slide() {
  return (
    <>

    <div className="boxslide">
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={true}
        autoPlay={true}
        transitionTime={1000}
        infiniteLoop={true}    
        passive={true} >
        {images.map((URL, index) => (

          <div className="slide" key={index}>
            {URL}
          </div>
        ))}
      </Carousel>
    </div>
    <div className="boxslideMovil">
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={true}
        autoPlay={true}
        transitionTime={1000}
        infiniteLoop={true}    
        passive={true} >
        {imagesmovil.map((URL, index) => (

          <div className="slide" key={index}>
            {URL}
            {/* <iframe width="100%" height="700"  src={URL} key={index}/> */}
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
}

