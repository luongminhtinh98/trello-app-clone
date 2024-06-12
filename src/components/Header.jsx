import { Header } from "antd/es/layout/layout";
import logoTrello from "../assets/logo-trello.png";


const HeaderComponent = () => {
  return (
    <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1677ff",
            height: "40px",
          }}
        >
          <img src={logoTrello} alt="logo trello" height={80} width={80}></img>
    </Header>
  );
};

export default HeaderComponent;