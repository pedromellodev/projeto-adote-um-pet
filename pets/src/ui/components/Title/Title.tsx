import  { TitleStyled, SubTitle} from './Title.style';

interface TitleProps {
    Title: string;
    subTitle: string | JSX.Element; // ?? => Propriedade Opcional
}
export default function Title(props: TitleProps){
    return (
        // <> = Fragment apenas do React
    <> 
        <TitleStyled>{props.Title}</TitleStyled>
        <SubTitle>{props.subTitle}</SubTitle>
    </>
    )
}