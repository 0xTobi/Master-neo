import '../css/Happy.css';
import happyclient1 from "../images/happyclient1.svg";
import happyclient2 from "../images/happyclient2.svg";
import happyclient3 from "../images/happyclient3.svg";
import happyclient4 from "../images/happyclient4.svg";
// import happyclient5 from "../images/happyclient5.svg";


function Happyclient() {
  return (
    <div>
        <div id="clients" >
            <h5 className="clients">Happy <span className="MNMA">Clients</span></h5>
            <div className="happycards">
                <div className="happycard">
                    <img src={happyclient1} alt="mp4.socials" className="firstcard" />
                    <div className="happyglowDot"></div>
                </div>
                <div className="happycard">
                    <img src={happyclient2} alt="Devolution" className="" />
                    <div className="happyglowDot"></div>
                </div>
                <div className="happycard">
                    <img src={happyclient3} alt="shiba Rocket" className="" />
                    <div className="happyglowDot"></div>
                </div>
                <div className="happycard">
                    <img src={happyclient4} alt="mp3finance.com" className="" />
                    <div className="happyglowDot"></div>
                </div>
                {/* <div className="happycard happycard5">
                    <img src={happyclient5} alt="Radar" className="" />
                    <div className="happyglowDot"></div>
                </div> */}
            </div>
        </div>
    </div>
  );
}

export default Happyclient;
