import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../Button";

export default function Login() {
  const router = useRouter();

  const { data: session } = useSession();

  return (
    <div className="flex justify-center flex-col bg-bgheader items-center shadow-2xl p-10">
      <Image
        src={"/logo_asafe.webp"}
        width={150}
        height={150}
        alt={"logo-asafe-digital"}
      />

      {!session && (
        <>
          <div className="mt-10 flex flex-column">
            <Button
              id="button-login-github"
              className="mx-5"
              onClick={() => signIn("github")}>
              {" "}
              Inicia sesión con Github{" "}
            </Button>
            <Button id="button-login-google" onClick={() => signIn("google")}>
              {" "}
              Inicia sesión con Google{" "}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
