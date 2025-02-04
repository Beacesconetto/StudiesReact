import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';
import { 
    BoxInput, 
    TitleInput 
} from './input.styles';

interface InputProps extends InputPropsAntd {
    title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
        {/*Bota o titúlo se tiver */}
        {title && <TitleInput>{title}</TitleInput>}
        <InputAntd {...props}/>
    </BoxInput>   
  );
};

export default Input;