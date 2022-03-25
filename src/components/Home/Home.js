import React, {useContext} from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import splashImg from "../../assets/splash.png";
import { AuthContext } from "../Auth/Providers/AuthProvider";


const Home = () => {
  const [auth] = useContext(AuthContext);
  return (
    <Container>
      <Splash image={splashImg} style={{ color: "#F1F1F1" }}>
        <h1 style={{marginBottom: "25px", fontSize: "5em", textShadow: '0 0 6px #303030, 0 0 5px #303030' }}>Expressian Rentals</h1>
        <h2 style={{marginBottom: "27em", fontSize: "2em", textShadow: '0 0 6px #303030, 0 0 5px #303030' }}>gently used eastern european vehicles</h2>
        <h2>{auth.token}</h2>
      </Splash>
    </Container>
  );
};

export default Home;
// '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'
