import { WhatsappWrapper } from "./styles";
import WhatsAppIcon from '../../assets/images/whatsapp.png';

const WhatsappButton = () => {


    return(
        <WhatsappWrapper href="https://api.whatsapp.com/send?phone=556999508521">
                <img src={WhatsAppIcon} alt="" className="whatsapp-icon"/>
                <span className="whatsapp-text">Whatsapp</span>
                <span className="whatsapp-number">(69) 9950-8521</span>
            </WhatsappWrapper>
    )

}

export default WhatsappButton;


