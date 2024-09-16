import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function FolderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Grid
        templateAreas={`"nav main"
                        "nav footer"`}
        gridTemplateRows={"100vh 1fr 0px"}
        gridTemplateColumns={"23vw 1fr"}
        h="100vh"
        color="blackAlpha.700"
        className={robotoMono.className}
      >
        <Navbar />
        <GridItem bg="linear-gradient(135deg, #1F1F1F 0%, #3D3D3D 100%)" area={"main"}>
          {children}
        </GridItem>
      </Grid>
    </Providers>
  );
}