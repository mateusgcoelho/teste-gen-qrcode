import Image from "next/image";
import { useState } from "react";
import QRCode from "react-qr-code";
import { Input } from "../components/input";
import { styled, theme } from "../styles";
import { HStack, Main, Spacer } from "../styles/global";

import QRCodeLink from "qrcode";
import { Button } from "../components/button";

const Header = styled("header", {
  width: "100%",

  marginBottom: 64,
  borderBottom: "1px solid $lightGray",
});

const HeaderContent = styled("section", {
  width: "100%",
  maxWidth: 1000,
  padding: "12px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 auto",
});

const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
});

const NavItem = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 16,
  fontWeight: "bold",
  color: "$vrSoftware",
  textDecoration: "none",

  "&+&": {
    marginLeft: 16,
  },
});

function Dashboard() {
  const [qrCodeDownload, setQrCodeDownload] = useState();

  const [qrCode, setQrCode] = useState("");

  const [idLoja, setIdLoja] = useState();
  const [nomeFantasia, setNomeFantasia] = useState();
  const [urlApi, setUrlApi] = useState();

  const handleIdLoja = (e: any) => {
    setIdLoja(e.target.value);
  };

  const handleUrlApi = (e: any) => {
    setUrlApi(e.target.value);
  };

  const handleNomeFantasia = (e: any) => {
    setNomeFantasia(e.target.value);
  };

  const generateQRCode = () => {
    handleQRCodeDownload(
      '{"id":' +
        idLoja +
        ',"nomeFantasia":"' +
        nomeFantasia +
        '", "hostUrl":"' +
        urlApi +
        '"}'
    );
  };

  const handleQRCodeDownload = (code: string) => {
    setQrCode(code);
    QRCodeLink.toDataURL(
      code,
      {
        width: 500,
        margin: 3,
      },
      function (err: any, url: any) {
        setQrCodeDownload(url);
      }
    );
  };

  return (
    <Main>
      <Header>
        <HeaderContent>
          <Image
            src="/assets/vr_smart_logo.png"
            alt="VRSmart Logo"
            width={80}
            height={80}
          />

          <Nav>
            <NavItem
              style={{
                color: theme.colors.gray.toString(),
                fontWeight: "normal",
              }}
            >
              Status PDVSmart
            </NavItem>
            <NavItem
              style={{
                color: theme.colors.gray.toString(),
                fontWeight: "normal",
              }}
            >
              Relatorios
            </NavItem>
            <NavItem href="/dashboard/">QRCode</NavItem>
            <NavItem
              style={{
                color: theme.colors.gray.toString(),
                fontWeight: "normal",
              }}
            >
              Configurações
            </NavItem>
          </Nav>
        </HeaderContent>
      </Header>

      <div
        style={{
          width: "100%",
          maxWidth: 1000,
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <HStack
          style={{
            maxWidth: 400,
            margin: "0",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: "100%",
              marginBottom: 20,
            }}
          >
            <p
              style={{
                marginBottom: 6,
              }}
            >
              ID LOJA
            </p>
            <Input
              placeholder="Ex: 1"
              id="idloja"
              type="number"
              onChange={(e: any) => {
                handleIdLoja(e);
              }}
            />
          </div>

          <div
            style={{
              width: "100%",
              marginBottom: 20,
            }}
          >
            <p
              style={{
                marginBottom: 6,
              }}
            >
              NOME FANTASIA
            </p>
            <Input
              placeholder="Ex: VR Software LTDA."
              id="nomeFantasia"
              onChange={(e: any) => {
                handleNomeFantasia(e);
              }}
            />
          </div>

          <div
            style={{
              width: "100%",
            }}
          >
            <p
              style={{
                marginBottom: 2,
              }}
            >
              IP SERVIDOR (SIGA O EXEMPLO):
            </p>
            <p
              style={{
                marginBottom: 6,
                color: theme.colors.vrSoftware.toString(),
                fontSize: 12,
              }}
            >
              http://192.168.1.127:8096
            </p>
            <Input
              placeholder="Ex: http://192.168.1.127:8098"
              id="urlApi"
              onChange={(e: any) => {
                handleUrlApi(e);
              }}
            />
          </div>

          <Spacer />

          <Button
            onClick={() => {
              generateQRCode();
            }}
          >
            Gerar QrCode
          </Button>
        </HStack>

        <HStack
          style={{
            margin: "0",
            maxWidth: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {qrCode != "" && (
            <>
              <QRCode value={qrCode} />

              <Spacer />

              <Button href={qrCodeDownload} download={"qrcode.png"}>
                Baixar QrCode
              </Button>
            </>
          )}

          {qrCode == "" && (
            <p
              style={{
                textAlign: "center",
              }}
            >
              Preencha as informações e gere o qrCode!
            </p>
          )}
        </HStack>
      </div>
    </Main>
  );
}

export default Dashboard;
