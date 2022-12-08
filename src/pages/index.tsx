import Image from "next/image";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { HStack, Main, Spacer } from "../styles/global";

function Home() {
  return (
    <Main
      style={{
        justifyContent: "center",
      }}
    >
      <HStack
        style={{
          maxWidth: 400,
        }}
      >
        <Image
          src="/assets/vr_smart_logo.png"
          alt="VRSmart Logo"
          width={80}
          height={80}
          style={{
            marginBottom: 32,
          }}
        />

        <Input placeholder="Digite seu usuario" />
        <Input placeholder="Digite sua senha" type="password" />

        <Spacer />

        <Button href="/dashboard/">Entrar</Button>
      </HStack>
    </Main>
  );
}

export default Home;
