import { ColumnContainer, RowContainer } from "../helper_components/MyContainers";
import { MyTextArea } from "../helper_components/Texts";
import { ReactComponent as EpicureLogo } from "./../../../assets/icons/epicure_logo.svg";


export const EpicureMainLogo = (props: {onClick : ()=>void}) => {
    return (
      <ColumnContainer style={{justifyContent: "center"}} onClick = {props.onClick}>
        <RowContainer>
          <EpicureLogo />
          <MyTextArea className="logo">EPICURE</MyTextArea>
        </RowContainer>
      </ColumnContainer>
    );
}