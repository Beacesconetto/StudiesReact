import { ButtonProps } from "antd"
import { ButtonAntd } from "./button.styles"

interface ButtonCurrentProps extends ButtonProps {
    margin?: string; 
}

const Button = ({margin, ...props}: ButtonCurrentProps ) => {
    return (
        <ButtonAntd style={{margin}} {...props}/> //Não precisa declarar assim margin: margin, pois o nome da propriedade é igual ao nome da variável
    )
}

export default Button;