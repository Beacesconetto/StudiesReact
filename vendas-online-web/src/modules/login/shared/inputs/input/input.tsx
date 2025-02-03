import { Input as InputAntd } from 'antd';
import { 
    BoxInput, 
    TitleInput 
} from './input.styles';

interface InputProps {
    title?: string;
}

const Input = ({ title }: InputProps) => {
  return (
    <BoxInput>
        <TitleInput>{title}</TitleInput>
        <InputAntd />
    </BoxInput>   
  );
};

export default Input;